export const validateLogin = () => {
    const isLogin = localStorage.getItem("login");
    if (isLogin == "true"){
        return true
    }
    return false;
};