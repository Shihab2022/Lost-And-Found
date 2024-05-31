import { Prisma, Status } from "@prisma/client"
import prisma from "../../utils/prisma"
import { userIncludeField } from "../../conostant/conostant"
import { IPaginationOptions } from "../../interface/pagination"
import calculatePagination from "../../utils/calculatePagination"
import { SearchAbleFields } from "./category.constant"

const createCategory = async (payload: { name: string }) => {
    const result = await prisma.category.create({
        data: {
            name: payload.name
        }
    })

    return result
}
const createFoundItem = async (req: any) => {
    const userData = req.user
    const data = req.body
    const isCategoryExit = await prisma.category.findUniqueOrThrow({
        where: {
            id: data.categoryId
        }
    })
    const isUserExit = await prisma.user.findUniqueOrThrow({
        where: {
            id: userData.userId
        },
        select: userIncludeField
    })
    data["userId"] = userData.userId
    const result = await prisma.foundItem.create({
        data
    })
    return {
        ...result, user: isUserExit, category: isCategoryExit
    }
}
const getCategory = async () => {
    const res = await prisma.category.findMany({})
    return res
}
const getFoundItem = async (params: any, options: IPaginationOptions) => {
    const { limit, skip, page } = calculatePagination(options)
    const { searchTerm, ...filterData } = params
    const andConditions: Prisma.FoundItemWhereInput[] = []
    if (searchTerm) {
        andConditions.push({
            OR: SearchAbleFields.map(field => ({
                [field]: {
                    contains: searchTerm,
                    mode: "insensitive"
                }
            }))
        })
    }


    if (Object.keys(filterData).length > 0) {
        andConditions.push({
            AND: Object.keys(filterData).map(key => ({
                [key]: {
                    equals: (filterData as any)[key]
                }
            }))
        })
    }
    const whereCondition: Prisma.FoundItemWhereInput = { AND: andConditions }
    const result = await prisma.foundItem.findMany({
        where: whereCondition,
        skip,
        take: limit,
        orderBy: {
            [(options?.sortBy as any)]: options?.sortOrder
        },
        include: {
            category: true,
            user: {
                select: userIncludeField
            }
        }
    })
    const total = await prisma.foundItem.count({
        where: whereCondition
    })
    return {
        meta: {
            page, limit, total
        },

        data: result
    }
}
const createClaim = async (req: any) => {
    const { userId } = req.user
    const data = req.body
    await prisma.user.findUniqueOrThrow({
        where: {
            id: userId
        }
    })
    await prisma.foundItem.findUniqueOrThrow({
        where: {
            id: data.foundItemId
        }
    })
    data["userId"] = userId
    const result = await prisma.claim.create({
        data
    })
    return result
}

const getClaim = async () => {
    const result = await prisma.claim.findMany({
        include: {
            foundItem: {
                include: {
                    category: true,
                    user: {
                        select: userIncludeField
                    }
                }
            },

        }
    })
    return result
}

const updateClaimStatus = async (claimId: string, status: any) => {
    await prisma.claim.findUniqueOrThrow({
        where: {
            id: claimId
        }
    })

    const updatedInfo = await prisma.claim.update({
        where: { id: claimId }, data: { status: status.status }
    })
    return updatedInfo
}


export const CategoryService = {
    createCategory,
    createFoundItem,
    getFoundItem,
    createClaim,
    getClaim,
    updateClaimStatus,
    getCategory

}