import prisma from "../../utils/prisma"
import bcrypt from "bcrypt"
import { TUser } from "./user.interface"
import { userIncludeField } from "../../conostant/conostant"

const createUser = async (payload: TUser) => {
    const hashPass = await bcrypt.hash(payload.password, 12)
    const userData = {
        name: payload.name,
        email: payload.email,
        password: hashPass
    }
    const result = await prisma.$transaction(async (transactionClient) => {
        const user = await transactionClient.user.create(
            { data: userData })
        const profile = await transactionClient.userProfile.create({
            data: {
                userId: user?.id,
                ...payload?.profile
            }
        })
        const { password, ...rest } = user
        return { ...rest, profile }
    })
    return result
}

const getMyProfileInfo = async (req: any) => {
    const { userId } = req.user
    const result = await prisma.userProfile.findUniqueOrThrow({
        where: { userId }, include: {
            user: {
                select: userIncludeField
            }
        }
    })
    return result
}
const getAllUser = async () => {
    const result = await prisma.user.findMany({
        select: userIncludeField
    })
    return result
}

const updateProfileInfo = async (req: any) => {
    const { userId } = req.user
    const data = req.body

    await prisma.userProfile.findUniqueOrThrow({
        where: {
            userId
        }
    })
    const userProfileInfo = await prisma.user.update({
        where: { id: userId },
        data,
    })
    return userProfileInfo
}
const deleteUser = async (req: any) => {
    const { id } = req.body
    const res = await prisma.$transaction(async (tx) => {
        await tx.userProfile.delete({ where: { userId: id } })
        const userDelete = await tx.user.delete({ where: { id } })
        return userDelete
    })
    return res
}
const updateStatus = async (req: any) => {
    const { id, role } = req.body

    const res = await prisma.user.update({ where: { id }, data: { role } })
    return res
}
export const UserService = {
    createUser,
    getMyProfileInfo,
    updateProfileInfo,
    getAllUser,
    deleteUser,
    updateStatus
}