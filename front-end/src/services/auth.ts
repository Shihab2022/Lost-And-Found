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