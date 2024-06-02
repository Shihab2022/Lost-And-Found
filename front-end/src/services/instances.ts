import { SOMETHING_WENT_WRONG } from "@/contants/messages";
import { TInstances } from "@/types/instancesType";
import { getToken } from "@/utils/storage";
import axios from "axios";
import qs from "qs";

export const apiHandler = ({
    baseURL = process.env.NEXT_PUBLIC_BACKEND_API_URL,
    params,
    path,
    formData,
    axiosMethod,
}: TInstances): any => {
    let parsedPath = baseURL + path;
    if (axiosMethod === "get" && Object.keys(params).length) {
        parsedPath = `${parsedPath}?${qs.stringify(params)}`;
    }
    const options = {
        headers: {
            "Content-Type": formData ? "multipart/form-data" : "application/json",
            authorization: `${getToken()}`,
        },
        method: axiosMethod,
        data: params,
        url: parsedPath,
        ...(axiosMethod === "get"
            ? params && { params: {} }
            : { data: formData ? params : JSON.stringify(params) }),
    };
    return axios(options)
        .then((res) => ({
            data: res.data,
            success: res?.data?.success === false ? false : true,
            error: res?.data?.error,
            params,
        }))
        .catch((err) => {
            const e = err.toJSON();
            if (e.status === 401) {
                window.location.href = "/login";
            } else {
                return {
                    status: e.status,
                    message: err?.response?.data?.message || SOMETHING_WENT_WRONG,
                    success: false,
                    params,
                };
            }
        });
};
