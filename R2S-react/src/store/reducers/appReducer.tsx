import { Actions } from "../actions/actionTypes"

const initContentOfConfirmModal = {
    isOpen: false,
    messageId: "",
    handleFunc: null,
    dataFunc: null
}

const initialState = {
    started: true,
    systemMenuPath: '/home',
    contentOfConfirmModal: {
        ...initContentOfConfirmModal
    }
}

const appReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case Actions.APP_START_UP_COMPLETE:
            return {
                ...state,
                started: true
            }
        case Actions.SET_CONTENT_OF_CONFIRM_MODAL:
            return {
                ...state,
                contentOfConfirmModal: {
                    ...state.contentOfConfirmModal,
                    ...action.contentOfConfirmModal
                }
            }
        default:
            return state;
    }
}

export default appReducer;