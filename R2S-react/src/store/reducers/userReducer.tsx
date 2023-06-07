import Cookies from 'js-cookie';
import { Actions } from "../actions/actionTypes"
import { Reducer } from 'redux';

interface UserInfo {
    fullName: string;
    email: string;
    address: string;
    phoneNumber: string;
    gender: boolean;
    img_url: string
    // ...
}
interface UserState {
    isLoggedIn: boolean;
    userInfo: null | UserInfo;
}

const getInitialState = () => {
    const userState = Cookies.get('userState');
    return userState ? JSON.parse(userState) : initialState;
}

const initialState: UserState = {
    isLoggedIn: false,
    userInfo: null
}

const userReducer: Reducer<UserState, any> = (state = getInitialState(), action: any) => {
    switch (action.type) {
        case Actions.USER_LOGIN_SUCCESS:
            Cookies.set('userState', JSON.stringify({
                ...state,
                isLoggedIn: true,
                userInfo: action.userInfo
            }));
            return {
                ...state,
                isLoggedIn: true,
                userInfo: action.userInfo
            }
        case Actions.USER_LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                userInfo: null
            }
        case Actions.PROCESS_LOGOUT:
            Cookies.remove('userState');
            return {
                ...state,
                isLoggedIn: false,
                userInfo: null
            }
        default:
            return state;
    }
}

export default userReducer;