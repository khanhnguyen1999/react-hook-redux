// là plain object có thuộc tính type quan trọng { type }
// là một function return về plain object
const LOGOUT = "LOGOUT";
const LOGIN = "LOGIN"
const REGISTER = "REGISTER"
function actLogout(){
    return {
        type: LOGOUT
    }
}
function actLogin(user){
    return {
        type: LOGIN,
        user
    }
}
function actRegister(user){
    return {
        type: REGISTER,
        user
    }
}
export {
    // action type
    LOGOUT,
    LOGIN,
    REGISTER,
    // function 
    actLogout,
    actLogin,
    actRegister
}