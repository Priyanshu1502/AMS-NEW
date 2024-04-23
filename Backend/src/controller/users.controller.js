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
const userRefreshToken = asyncHandler(
    async (req, res) => {

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

export {
    userRegisteration,
    userLogIn,
    userLogOut,
    userRefreshToken,
    getUserDetails
}