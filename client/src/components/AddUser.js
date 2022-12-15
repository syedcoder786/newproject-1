import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../actions/userActions';
// import '@fortawesome/fontawesome-free/css/all.min.css'; 
// import 'bootstrap-css-only/css/bootstrap.min.css'; 
// import 'mdbreact/dist/css/mdb.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { clearErrors } from '../actions/errorActions'
import { useLocation } from 'react-router-dom'
import { clearErrors } from '../actions/errorActions';

function AddUser(props) {
    const dispatch = useDispatch()
    const { userData } = useSelector((state) => state.user)
    const { msg } = useSelector((state) => state.error)
    // useEffect(() => {
    //     dispatch(logout())
    // },[])
    useEffect(() => {
        if(userData){
            console.log(userData)
            toast.success("User Added!")
        }
    },[userData])

    const {pathname} = useLocation() 

    useEffect(() => {
          console.log(`You changed the page to: ${pathname}`) 
        //   alert("changing")
          dispatch(clearErrors())
    },[pathname]) 

    useEffect(() => {
        if(msg){
            setErrmsg(msg.msg)
        }else{
            setErrmsg('')
        }
    },[msg])

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [errmsg, setErrmsg] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        setErrmsg('')
        console.log(email)
        console.log(phone)
        if(!name || !email || !phone || !address){
            setErrmsg('Please enter all fields.')
            return
        }else if(/\s/g.test(name)){
            setErrmsg('Enter username without space.')
        }else if(!/^[a-zA-Z]*$/g.test(name)) {
            setErrmsg('Alphabets only in username.')
        }else if(!/^\d{10}$/.test(phone)){
            setErrmsg('Only 10 numbers in phone.')
        }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            setErrmsg('Invalid email.')
        }else{
            const user = {
                name,
                email,
                phone,
                address,
            }
            dispatch(addUser(user))
            setName('')
            setEmail('')
            setPhone('')
            setAddress('')
        }
    }
    return (
        <div>
            <ToastContainer />
            <center>
                <br/>
                <h1>Add User</h1>
                <br/>
            <form style={{width:"60%"}} onSubmit={onSubmit}>
                {errmsg &&
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        {errmsg}
                        <button 
                            type="button" 
                            className="close" 
                            data-dismiss="alert" 
                            aria-label="Close"
                            onClick={() => setErrmsg(null)}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                }
            <div class="form-group">
                <label for="formGroupExampleInput">User Name:</label>
                <input 
                    type="text" 
                    class="form-control" 
                    id="formGroupExampleInput" 
                    placeholder="User Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div class="form-group">
                <label for="formGroupExampleInput2">Phone Number:</label>
                <input 
                    type="tel" 
                    class="form-control" 
                    id="formGroupExampleInput2" 
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>

            <div class="form-group">
                <label for="exampleFormControlInput1">Email address:</label>
                <input 
                    type="email" 
                    class="form-control" 
                    id="exampleFormControlInput1" 
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            {/* <div class="form-group">
                <label for="exampleFormControlTextarea1">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div> */}
              <div class="form-group">
                    <label for="inputAddress">Address:</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="inputAddress" 
                        placeholder="1234 Main St"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                {/* <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" class="form-control" id="inputCity"/>
                    </div>
                    <div class="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                    </div>
                    <div class="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" class="form-control" id="inputZip"/>
                    </div>
                </div> */}
            <button 
                type="submit" 
                class="btn btn-primary"
            >Add User</button>
            </form>
            </center>
        </div>
    );
}

export default AddUser;