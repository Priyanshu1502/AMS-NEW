import { UserDB } from "../model/users.model.js"
import { apiError } from "../utils/apiError.js"
import apiResponse from "../utils/apiResponse.js"
import asyncHandler from "../utils/asyncHandler.js"

const UserTokens = async function (userId) {

    try {
        const userDetail = await UserDB.findById(userId)

        const UserAccessToken = userDetail.generateAccessToken()
        const UserRefreshToken = userDetail.generateRefreshToken()

        userDetail.refreshToken = UserRefreshToken

        await userDetail.save({ validateBeforeSave: false })

        return { UserAccessToken, UserRefreshToken }
    } catch (error) {
        throw new apiError(500, "Something went wrong while generating Tokens!", { error: error.message });
    }
}

const userRegisteration = asyncHandler(
    async (req, res) => {
        const { username, email, password, fullName, currentPassword } = req.body

        if (currentPassword !== password) {
            throw new apiError(400, "Password and Current Password are different!")
        }
        if ([username, email, password, fullName].some(field => {
            field.trim() === ""
        })) {
            throw new apiError(404, "All the Fields are required!")
        }

        const user = await UserDB.create({
            username,
            email,
            password,
            fullName
        })

        const userDetail = await UserDB.findById(user._id)
        res
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

        if (!isUserExist) {
            throw new apiError(404, "Invalid User Credentials!")
        }

        const isPasswordCorrect = await isUserExist.isPasswordCorrect(password)
        if (!isPasswordCorrect) {
            throw new apiError(401, "Password is Incorrect!")
        }

        const { UserAccessToken, UserRefreshToken } = UserTokens(isUserExist._id)
        if (!UserAccessToken) {
            throw new apiError(500, "Something wents wrong in Server!")
        }

        const LoggedInUser = await UserDB.findById(isUserExist._id).select('-password -refreshToken')
        
        const options ={
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

const userLogOut = asyncHandler(async (req,res)=>{

})

export { 
    userRegisteration,
    userLogIn,
    userLogOut
}