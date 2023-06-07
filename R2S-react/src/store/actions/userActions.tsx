import { Actions } from "./actionTypes"

export const userLoginSuccess = (userInfo: any) => ({
    type: Actions.USER_LOGIN_SUCCESS,
    userInfo: userInfo
})

export const userLoginFail = () => ({
    type: Actions.USER_LOGIN_FAIL
})

export const processLogout = () => ({
    type: Actions.PROCESS_LOGOUT
})