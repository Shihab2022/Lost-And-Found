import { apiHandler } from "./instances";

export const loginUserApi = async (params: any) => {
    console.log({ params })
    const res = await apiHandler({
        baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
        path: "/login",
        axiosMethod: "post",
        formData: false,
        params: params,
    });
    return res;
};