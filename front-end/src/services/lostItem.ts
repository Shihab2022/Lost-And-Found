import { apiHandler } from "./instances";

export const getCategory = async (params: any) => {
    const res = await apiHandler({
        baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
        path: "/category",
        axiosMethod: "get",
        formData: false,
        params: "",
    });
    return res;
};
export const createLostItem = async (params: any) => {
    const res = await apiHandler({
        baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
        path: "/lost-items",
        axiosMethod: "post",
        formData: false,
        params: params,
    });
    return res;
};