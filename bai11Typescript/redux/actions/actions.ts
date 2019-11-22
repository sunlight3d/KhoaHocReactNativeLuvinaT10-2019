import {CHANGE_EMAIL, CHANGE_PASSWORD} from './actionTypes'
export const changeEmail = (text: string) => {
    return {
        type: CHANGE_EMAIL,
        text
    }
}
export const changePassword = (text: string) => {
    return {
        type: CHANGE_PASSWORD,
        text
    }
}
