import {
    LOGIN,
    LOGOUT
} from '../constants/actions-types';

const initialLogin = {
    user: {},
    logged: false
}
export default function login(login = initialLogin, action) {
    switch (action.type) {
        case LOGIN:
            return {user: action.payload, logged: true};
        case LOGOUT:
            return initialLogin;
        default:
            return login;
    }
}   
