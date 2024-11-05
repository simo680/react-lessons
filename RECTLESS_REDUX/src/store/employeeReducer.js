
const defaultstate = {}

const USER_INFO = "USER_INFO"

export const employeeReducer = (state = defaultstate, action) => {
    switch(action.type) {
        case USER_INFO:
            return action.payload
        default:
            return state
    }
}

export const userInfoAction = (payload) => ({ type: USER_INFO, payload});