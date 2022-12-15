import {combineReducers} from 'redux';
import errorReducer from './errorReducers';
import authReducer from './authReducers';
import userReducer from './userReducers';

export default combineReducers({
    error:errorReducer,
    auth:authReducer,
    user:userReducer,
});