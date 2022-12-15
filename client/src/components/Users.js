import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, clearAddUser } from '../actions/userActions'
import { useLocation } from 'react-router-dom'

function Users(props) {
    const dispatch = useDispatch()
    const { loading } = useSelector(state => state.user)

    // useEffect(() => {
    //     dispatch(fetchUsers())
    // },[dispatch])

    const onClick = (id) => {
        dispatch(deleteUser({id}))
    }

    const {pathname} = useLocation() 

    useEffect(() => {
          console.log(`You changed the page to: ${pathname}`) 
        //   alert("changing")
          dispatch(clearAddUser())
    },[pathname]) 

    const allUsers = props.users.map(user => (
        <div key={user._id}>
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">{user.email}</p>
                <p className="card-text">{user.phone}</p>
                <p className="card-text">{user.address}</p>
                <a className="btn btn-danger" onClick={()=>onClick(user._id)}>Delete</a>
            </div>
            </div><br/>
        </div>
    ))

    return (
        <div>
        <center>
            <br/>
            <h1>Users</h1>
            <br/>
            {loading?<div><h3>Loading...</h3></div>:allUsers}
            {/* <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Button</a>
                </div>
            </div><br/>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Button</a>
                </div>
            </div> */}
        </center>
        </div>
    );
}

export default Users;