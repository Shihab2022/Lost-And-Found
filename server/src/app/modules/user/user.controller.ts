import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { UserService } from "./user.service";
import sendResponse from "../../utils/sentResponce";
import httpStatus from "http-status";

const createUser = catchAsync(async (req: Request, res: Response) => {
    const result = await UserService.createUser(req.body)
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "User registered successfully",
        data: result
    })
})
const getMyProfileInfo = catchAsync(async (req: Request, res: Response) => {
    const result = await UserService.getMyProfileInfo(req)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Profile retrieved successfully",
        data: result
    })
})
const updateProfileInfo = catchAsync(async (req: Request, res: Response) => {
    const result = await UserService.updateProfileInfo(req)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User profile updated successfully",
        data: result
    })
})
export const UserController = {
    createUser,
    getMyProfileInfo,
    updateProfileInfo
}