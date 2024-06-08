import { apiHandler } from "./instances";

export const loginUserApi = async (params: any) => {
    const res = await apiHandler({
        baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
        path: "/login",
        axiosMethod: "post",
        formData: false,
        params: params,
    });
    return res;
};
export const registerUser = async (params: any) => {
    const res = await apiHandler({
        baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
        path: "/register",
        axiosMethod: "post",
        formData: false,
        params: params,
    });
    return res;
};
export const getUserInfo = async (params: any) => {
    const res = await apiHandler({
        baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
        path: "/my-profile",
        axiosMethod: "get",
        formData: false,
        params: params,
    });
    return res;
};
export const updateUserInfo = async (params: any) => {
    const res = await apiHandler({
        baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
        path: "/my-profile",
        axiosMethod: "put",
        formData: false,
        params: params,
    });
    return res;
};
export const getAllUserInfo = async (params: any) => {
    const res = await apiHandler({
        baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
        path: "/users",
        axiosMethod: "get",
        formData: false,
        params: params,
    });
    return res;
};
export const deleteUserInfo = async (params: any) => {
    const res = await apiHandler({
        baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
        path: "/user",
        axiosMethod: "delete",
        formData: false,
        params: params,
    });
    return res;
};
export const updateUsersInfo = async (params: any) => {
    const res = await apiHandler({
        baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
        path: "/user",
        axiosMethod: "put",
        formData: false,
        params: params,
    });
    return res;
};
export const getMyLostItem = async (params: any) => {
    const res = await apiHandler({
        baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
        path: "/myLostItem",
        axiosMethod: "get",
        formData: false,
        params: params,
    });
    return res;
};