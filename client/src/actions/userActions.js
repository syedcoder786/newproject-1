import { USERS_DATA, ADD_USER, LOADING_USERS, DELETE_USER } from './types';
import axios from "axios"
import { returnErrors } from './errorActions'

export const fetchUsers = () => (dispatch, getState) => {

    //get token from local storage
    const token = getState().auth.token;

    //headers
    const config = {
        headers:{
            "Content-type":"application/json"
        }
    }
    if(token){
        config.headers['x-auth-token'] = token;
    }

    dispatch({
        type: LOADING_USERS,
        payload: true
    })

    axios({
        method: 'post',
        url: '/user/fetchUsers',
        headers: config.headers
    })
    .then(users => {
        dispatch({
            type: LOADING_USERS,
            payload: false
        })
        dispatch({
            type: USERS_DATA,
            payload: users.data
        }) 
    })
}



export const addUser = (user) => (dispatch, getState) => {

  //get token from local storage
  const token = getState().auth.token;

  //headers
  const config = {
      headers:{
          "Content-type":"application/json"
      }
  }
  if(token){
      config.headers['x-auth-token'] = token;
  }

axios({
    method: 'post',
    url: '/user/addUser',
    data: user,
    headers: config.headers
})
    .then(userData =>{
        console.log(userData.data)
        dispatch({
            type: ADD_USER,
            payload: userData.data
        })
    }).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status,'USER_ADD_FAIL'));
    })
}

export const deleteUser = (id) => (dispatch, getState) => {

    //get token from local storage
    const token = getState().auth.token;
  
    //headers
    const config = {
        headers:{
            "Content-type":"application/json"
        }
    }
    if(token){
        config.headers['x-auth-token'] = token;
    }
  
  axios({
      method: 'delete',
      url: '/user/deleteUser',
      data: id,
      headers: config.headers
  })
    .then(userData =>{
      dispatch({
          type: DELETE_USER,
          payload: userData.data
      })
    }).catch(err => {
        console.log(err)
      dispatch(returnErrors(err.response.data, err.response.status,'DELETE_USER_ERR'));
    })
  }

export const clearAddUser = () => (dispatch) => {
    dispatch({
        type: ADD_USER,
        payload: null
    })
}