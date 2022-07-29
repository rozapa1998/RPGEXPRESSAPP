import { authType } from "../../types/auth.types";

const { SING_IN , SING_OUT , SING_UP } = authType;

const initialState= {
    token: null,
    userId: null,
}

const AuthReducer = (state = initialState, action) => {
    switch(action.type){
        case SING_UP:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
            };
            default:
                return state;
    }
}

export default AuthReducer