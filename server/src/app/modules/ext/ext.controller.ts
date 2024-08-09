import httpStatus from "http-status"
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sentResponce"
import { Request, Response } from "express"
import { extService } from "./ext.service"

const ext = catchAsync(async (req: Request, res: Response) => {
    const result = await extService.ext(req)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Request  successfully",
        data: result
    })
})

export const extController = {
    ext

}