import config from "../../../config"
import { generateJwtToken } from "../../utils/jwtHelper"
import prisma from "../../utils/prisma"
import { TLoginInfo } from "../user/user.interface"
import bcrypt from 'bcrypt';

const loginUser = async (payload: TLoginInfo) => {
    const { email, password } = payload

    const userInfo = await prisma.user.findUniqueOrThrow({
        where: {
            email
        }
    })
    const verifyPass = await bcrypt.compare(password, userInfo.password)
    if (!verifyPass) {
        throw new Error("You are not aphorized")

    }
    const tokenData = {
        email: userInfo.email,
        userId: userInfo.id
    }
    const token = generateJwtToken(tokenData, config.jwt_access_secret as string, config.jwt_access_expire_in as string)
    const resData = {
        id: userInfo.id,
        email: userInfo.email,
        name: userInfo.name, token
    }
    return resData
}
const changePassword = async (payload: any) => {
    const userData = await prisma.user.findUniqueOrThrow({
        where: {
            id: payload.id,
        }
    });

    const isCorrectPassword: boolean = await bcrypt.compare(payload.password, userData.password);

    if (!isCorrectPassword) {
        throw new Error("Password incorrect!")
    }

    const hashedPassword: string = await bcrypt.hash(payload.updatedPass, 12);

    await prisma.user.update({
        where: {
            id: payload.id,
        },
        data: {
            password: hashedPassword,
        }
    })

    return {
        message: "Password changed successfully!"
    }

}
export const AuthService = {
    loginUser,
    changePassword
}