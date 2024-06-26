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
export const changePassword = async (params: any) => {
    const res = await apiHandler({
        baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
        path: "/changePassword",
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
export const getMyFoundItem = async (params: any) => {
    const res = await apiHandler({
        baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
        path: "/myFoundItem",
        axiosMethod: "get",
        formData: false,
        params: params,
    });
    return res;
};
export const deleteLostItems = async (params: any) => {
    const res = await apiHandler({
        baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
        path: "/myLostItem",
        axiosMethod: "delete",
        formData: false,
        params: params,
    });
    return res;
};
export const deleteFoundItems = async (params: any) => {
    const res = await apiHandler({
        baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
        path: "/myFoundItem",
        axiosMethod: "delete",
        formData: false,
        params: params,
    });
    return res;
};
export const createClaim = async (params: any) => {
    const res = await apiHandler({
        baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
        path: "/claims",
        axiosMethod: "post",
        formData: false,
        params: params,
    });
    return res;
};