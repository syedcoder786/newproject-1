import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import AddUser from '../components/AddUser';
import Navbar from '../components/Navbar';
import Users from '../components/Users';
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../actions/userActions'

const DashboardRoutes = (props) => {
  const [newUsers, setNewUsers] = useState([])
  const dispatch = useDispatch()
  const { users, deletedUser, userData } = useSelector(state => state.user)
  const { user } = useSelector(state => state.auth)
    useEffect(() => {
        dispatch(fetchUsers())
    },[user])

    useEffect(() => {
      setNewUsers(users)
    },[users])
    
    useEffect(() => {
      if(userData){
        setNewUsers((users) => [userData, ...users])
      }
    },[userData])

    useEffect(() => {
      if(deletedUser){
        var newArray = newUsers.filter(user => {return user._id !== deletedUser._id});
        console.log(newArray)
        setNewUsers([...newArray])
      }
    },[deletedUser])

      return (
          <div>
            <BrowserRouter>
            <Navbar/>
                <Routes>
                  <Route exact path="/" element = {<Navigate to="/adduser" />}/>
                  <Route path="/adduser" element = {<AddUser/>}/>
                  <Route path="/users" element = {<Users users={newUsers}/>}/>
                </Routes>
            </BrowserRouter>
          </div>         
      )
}

export default DashboardRoutes;
