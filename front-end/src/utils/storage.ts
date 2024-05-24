export function setToken(userToken: string) {
    try {
        localStorage.setItem("token", userToken);
    } catch (error) {
        return null;
    }
}

export function getToken() {
    try {
        const tokenString = localStorage.getItem("token");
        return tokenString;
    } catch (error) {
        return "";
    }
}


export const removeToken = () => {

    try {
        localStorage.removeItem("token");;
    } catch (error) {
        return "";
    }
};