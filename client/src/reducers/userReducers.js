import { USERS_DATA, ADD_USER, LOADING_USERS, DELETE_USER } from '../actions/types';

const initialState={
    userData: null,
    users: [],
    loading: null,
    deletedUser: null,
}

export default function(state=initialState,action){
    switch(action.type){
        case USERS_DATA:
        return{
            ...state,
            users:action.payload,
        }
        case ADD_USER:
            return{
                ...state,
                userData:action.payload,
            }
        case DELETE_USER:
            return{
                ...state,
                deletedUser:action.payload,
            }
        case LOADING_USERS:
            return{
                ...state,
                loading:action.payload,
            }
        default:
            return state;
    };
}