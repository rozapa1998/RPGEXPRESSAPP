import { URL_AUTH_SINGUP } from "../../constants/data/firebase";
import { authType } from "../../types/auth.types";


const {SING_IN, SING_UP, SING_OUT} = authType

export const singup = ( email , password ) => {
    return async (dispatch) => {
        try {
            const response = await fetch(URL_AUTH_SINGUP, {
                method: "POST" ,
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true,
                })
            })

            const result = await response.json();

            dispatch({
                type: SING_UP,
                token: result.idToken,
                userId: result.localId,
            })
        } catch (error) {
            console.warn(error);
        }
    };
};