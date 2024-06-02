import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sentResponce";
import httpStatus from "http-status";
import { CategoryService } from "./Category.service";
import { pick } from "../../utils/pick";
import { pickAbleField, searchAbleOptions } from "./category.constant";

const createCategory = catchAsync(async (req: Request, res: Response) => {

    const result = await CategoryService.createCategory(req.body)
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Found item category created successfully",
        data: result
    })
})
const createFoundItem = catchAsync(async (req: Request, res: Response) => {

    const result = await CategoryService.createFoundItem(req)
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Found item  created successfully",
        data: result
    })
})
const createLostItem = catchAsync(async (req: Request, res: Response) => {

    const result = await CategoryService.createLostItem(req)
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Lost item created successfully",
        data: result
    })
})

const getFoundItem = catchAsync(async (req: Request, res: Response) => {
    const filterValue = pick(req.query, pickAbleField)
    const options = pick(req.query, searchAbleOptions)
    const result = await CategoryService.getFoundItem(filterValue, options)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Found items retrieved successfully",
        data: result
    })
})
const createClaim = catchAsync(async (req: Request, res: Response) => {
    const result = await CategoryService.createClaim(req)
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Claim created successfully",
        data: result
    })
})

const getClaim = catchAsync(async (req: Request, res: Response) => {
    const result = await CategoryService.getClaim()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Claims retrieved successfully",
        data: result
    })
})
const updateClaimStatus = catchAsync(async (req: Request, res: Response) => {
    const { claimId } = req.params
    const status = req.body
    const result = await CategoryService.updateClaimStatus(claimId as string, status)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Claim updated successfully",
        data: result
    })
})
const getCategory = catchAsync(async (req: Request, res: Response) => {
    const result = await CategoryService.getCategory()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Category get successfully",
        data: result
    })
})
export const CategoryController = {
    createCategory,
    createFoundItem,
    getFoundItem,
    createClaim,
    getClaim,
    updateClaimStatus,
    getCategory,
    createLostItem
}