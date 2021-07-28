import {
    LOGIN_REQUEST ,
    LOGIN_SUCCESS ,
    LOGIN_FAIL ,

    FETCH_USER_REQUEST,
FETCH_USER_SUCCESS,
FETCH_USER_FAILURE,

SET_ALERT , REMOVE_ALERT

   } from  '../Constants/userConstants';



   export const authReducer = (state = { }, action) => {
    switch (action.type) {

        case LOGIN_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
            }

        case LOGIN_FAIL:
            return {
                loading: false,
                isAuthenticated: false,
            }
            default:
                return state
        }}

        export const dataReducer = (state = {} , action) => {
            switch(action.type) {
                case FETCH_USER_REQUEST:
                    return {
                        ...state,
                        loading : true
                    };
                case FETCH_USER_SUCCESS :
                    return {
                        ...state,
                        loading : false,
                        users : action.payload.users
                    };
                case FETCH_USER_FAILURE :
                    return {
                        ...state,
                        loading : false,
                        error : action.payload.error
                    };
                default: return state;
            }
        };

