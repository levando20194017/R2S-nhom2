import { Actions } from "./actionTypes";

export const appStartUpComplete = () => ({
    type: Actions.APP_START_UP_COMPLETE
});

export const setContentOfConfirmModal = (contentOfConfirmModal: any) => ({
    type: Actions.SET_CONTENT_OF_CONFIRM_MODAL,
    contentOfConfirmModal: contentOfConfirmModal
});