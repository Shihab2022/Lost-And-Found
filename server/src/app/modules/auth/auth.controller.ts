import httpStatus from "http-status"
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sentResponce"
import { AuthService } from "./auth.service"
import { Request, Response } from "express"

const loginUser = catchAsync(async (req: Request, res: Response) => {
    const result = await AuthService.loginUser(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User logged in successfully",
        data: result
    })
})
const changePassword = catchAsync(async (req: Request, res: Response) => {
    const result = await AuthService.changePassword(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Password change successfully",
        data: result
    })
})

export const AuthController = {
    loginUser,
    changePassword
}
