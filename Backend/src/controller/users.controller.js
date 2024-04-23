import { UserDB } from "../model/users.model.js"
import { apiError } from "../utils/apiError.js"
import apiResponse from "../utils/apiResponse.js"
import asyncHandler from "../utils/asyncHandler.js"

const UserTokens = async function (userId) {

    try {
        const userDetail = await UserDB.findById(userId)
        // console.log(userId)
        const UserAccessToken = userDetail.generateAccessToken()
        const UserRefreshToken = userDetail.generateRefreshToken()

        userDetail.refreshToken = UserRefreshToken

        await userDetail.save({ validateBeforeSave: false })

        return { UserAccessToken, UserRefreshToken }

    } catch (error) {
        throw new apiError(500, "Something went wrong while generating Tokens!");
    }
}

const userRegisteration = asyncHandler(
    async (req, res) => {
        const { username, email, password, fullName, currentPassword } = req.body
        // console.log(req.body)

        if ([username, email, password, fullName, currentPassword].some((field) => {
            field.trim() === ""
        })) {
            throw new apiError(404, "All the Fields are required!")
        }

        if (password !== currentPassword) {
            throw new apiError(400, "Password and Current Password are different!")
        }

        const isUserValid = await UserDB.findOne({ $or: [{ username }, { email }] })

        if (isUserValid) {
            throw new apiError(409, "Email and Username already Exist!")
        }

        const user = await UserDB.create({
            username,
            email,
            fullName,
            password
        })

        const userDetail = await UserDB.findById(user._id).select('-password')

        return res
            .status(201)
            .json(
                new apiResponse(
                    200,
                    "User is Registered Successfully.",
                    userDetail
                )
            )
    })

const userLogIn = asyncHandler(
    async (req, res) => {
        const { username, email, password } = req.body

        if (!(username || email) && !password) {
            throw new apiError(
                400,
                "Username, email and password are required!"
            )
        }

        const isUserExist = await UserDB.findOne({ $or: [{ username }, { email }] })

        // console.log(isUserExist)
        if (!isUserExist) {
            throw new apiError(404, "Invalid User Credentials!")
        }

        const isPasswordCorrect = await isUserExist.isPasswordCorrect(password)
        if (!isPasswordCorrect) {
            throw new apiError(401, "Password is Incorrect!")
        }

        const { UserAccessToken, UserRefreshToken } = await UserTokens(isUserExist._id)

        if (!UserAccessToken) {
            throw new apiError(500, "Something wents wrong in Server!")
        }

        const LoggedInUser = await UserDB.findById(isUserExist._id).select('-password -refreshToken')

        const options = {
            httpOnly: true,
            secure: true
        }

        res
            .status(200)
            .cookie('userLoginDetails', UserAccessToken, options)
            .cookie('userRefreshToken', UserRefreshToken, options)
            .json(
                new apiResponse(
                    200,
                    "User Logged In Successfully.",
                    {
                        userLoginDetails: UserAccessToken,
                        userRefreshToken: UserRefreshToken,
                        LoggedInUser
                    }
                )
            )
    }
)

const userLogOut = asyncHandler(
    async (req, res) => {

        try {
            await UserDB.findByIdAndUpdate(req.user._id,
                {
                    $unset: {
                        refreshToken: 1
                    }
                },
                {
                    new: true
                }
            )



            const options = {
                httpOnly: true,
                secure: true
            }
            res
                .status(200)
                .clearCookie('userLoginDetails', options)
                .clearCookie('userRefreshToken', options)
                .json(
                    new apiResponse(
                        200,
                        "User is Logged Out Successfully.",
                        {}
                    )
                )
        } catch (error) {
            throw new apiError(401,"Invalid User Credentials!")
        }
    })

const getUserDetails = asyncHandler(
    async (req, res) => {
        // console.log(req.user)
        return res
            .status(200)
            .json(
                new apiResponse(
                    200,
                    "User fetched Successfully.",
                    req.user
                )
            )

    }
)

const UserTokenRefreshing = asyncHandler(
    async (req, res) => {

    // check is accessToken is expired or not if !accesstoken.
    //get the refresh token from the cookies.
    //check if refresh token is not present then user not login.
    // take the id from the refresh token and find the user and check the refresh token is same in both .
    //if refresh was same then genrete new tokens throw token genration.
    // update the tokens in cookie and database too.

    const RefreshToken = req.cookies?.refreshToken || req.body?.refreshToken

    if (!RefreshToken) {
        throw new apiError(401, "Unauthorized Access!")
    }

    const options = {
        httpOnly: true,
        secure: true
    }

    try {
        const decoded_jwt = jwt.verify(RefreshToken, process.env.REFRESH_TOKEN_SECRET, options)

        const userData = await UserDB.findById(decoded_jwt._id)

        if (userData?.refreshToken !== RefreshToken) {
            throw new apiError(404, "Refresh Token is expired!")
        }

        const { userAccessToken, userRefreshToken } = await generateUserTokens(decoded_jwt._id)

        res
            .status(200)
            .cookie("userDetails", userAccessToken, options)
            .cookie("refreshToken", userRefreshToken, options)
            .json(
                new apiResponse(
                    200,
                    "The Token is Refreshed Successfully!",
                    {
                        userAccessToken,
                        refreshToken: userRefreshToken,
                    }
                )
            )
    } catch (error) {
        throw new apiError(401,
            error?.message || "Invalid Refresh Token")
    }
})

const ChangeCurrentPassword = asyncHandler(
    async (req, res) => {

    const { oldPassword, newPassword } = req.body

    const user = await UserDB.findById(req.user._id)

    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword)

    if (!isPasswordCorrect) {
        throw new apiError(400, "The password is incorrect!")
    }

    user.password = newPassword

    await user.save({
        validateBeforeSave: false
    })

    res.status(200).json
        (
            new apiResponse(
                200,
                "Password is changed successfully."
            )
        )


})

const UpdateUserDetails = asyncHandler(
    async (req, res) => {
    const { email, fullName, username } = req.body

    if (!email || !fullName || !username) {
        throw new apiError(404, "Email, Fullname and Username are required for Changes!")
    }

    const user = await UserDB.findByIdAndUpdate(req.user._id,
        {
            $set: {
                fullName: fullName,
                email,
                username
            }
        },
        {
            new: true
        }
    ).select('-password -refreshToken')
    // user.username = username
    // user.fullName = fullName
    // user.email = email
    // user.save(
    //     {
    //         validateBeforeSave: false
    //     }
    // )

    res.status(200).json(new apiResponse(200, "Account Details is Updated Successfully.", user))
})

const DeleteUserAccount = asyncHandler(
    async (req, res) => {

    const { password } = req.body

    if (!password) {
        throw new apiError(404, "password is required!")
    }

    const user = await UserDB.findById(req.user._id)

    const isPasswordCorrect = await user.isPasswordCorrect(password)

    if (!isPasswordCorrect) {
        throw new apiError(400, "password is incorrect!")
    }

    await user.deleteOne()

    const options = {
        httpOnly: true,
        secure: true
    }

    res
        .clearCookie('userDetails', options)
        .clearCookie('refreshToken', options)
        .status(200)
        .json(
            new apiResponse(200, "The Account has been Deleted Successfully.")
        )
})

const UpdateUserAvatar = asyncHandler(
    async (req, res) => {
    const Avatar = req.file?.path

    const user = await UserDB.findByIdAndUpdate(req.user._id,
        {
            $set: {
                avatar: Avatar
            }
        },
        {
            new: true
        }).select('-password -refreshToken')

    res.status(200).json(new apiResponse(200, "Avatar is Updated Successfully.", user))
})

const UpdateCoverImage = asyncHandler(
    async (req, res) => {
    const coverImage = req.file?.path

    const user = await UserDB.findByIdAndUpdate(req.user._id,
        {
            $set: {
                coverImage
            }
        },
        {
            new: true
        }
    ).select('-password -refreshToken')

    res.status(200).json(new apiResponse(200, "Cover Image is Updated Successfully.", user))
})

const getUserChannelDetails = asyncHandler(
    async (req, res) => {

    const {username} = req.params
    if (!username) {
        throw new apiError(400, " username is missing!");
    }
    // console.log(req.params);
    const channel = await UserDB.aggregate([
        {
            $match: {
                username: username?.toLowerCase()
            }
        },
        {
            $lookup: {
                from: "subscriberdbs",
                localField: "_id",
                foreignField: "channel",
                as: "subscribers"
            }
        },
        {
            $lookup: {
                from: "subscriberdbs",
                localField: "_id",
                foreignField: "subscriber",
                as: "subscribedTo"
            }
        },
        {
            $addFields: {
                subscribersCount: {
                    $size: "$subscribers"
                },
                channelSubscribedToCount: {
                    $size: "$subscribedTo"
                },
                isSubscribed: {
                    $cond: {
                        if: { $in: [req.user?._id, "$subscribers.subscriber"] },
                        then: true,
                        else: false
                    }
                }
            }

        },
        {
            $project: {
                fullName: 1,
                username: 1,
                email: 1,
                subscribersCount: 1,
                isSubscribed: 1,
                channelSubscribedToCount: 1,
                avatar: 1,
                coverImage: 1,
            }
        }
    ])

    if (!channel?.length) {
        throw new apiError(404, "Channel does not exist!");
    }

    return res
        .status(200)
        .json(new apiResponse(200,
            "User Channel Fetched Successfully.",
            channel[0]
        ))
})


export {
    userRegisteration,
    userLogIn,
    userLogOut,
    UserTokenRefreshing,
    getUserDetails,
    ChangeCurrentPassword,
    getUserDetails,
    getUserChannelDetails,
    UpdateCoverImage,
    UpdateUserDetails,
    DeleteUserAccount,
    UpdateUserAvatar
}