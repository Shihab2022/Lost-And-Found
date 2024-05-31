import { jwtDecode } from "jwt-decode";

export const decodedToken = (token: any) => {
    return jwtDecode(token);
};