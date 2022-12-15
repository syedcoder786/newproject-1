const express = require('express');
const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI');
const path = require('path')
const cors = require('cors');

const app = express();

//bodyParser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //helps in console.log(Object)
//Cors middleware
app.use(cors());


//Mongoose Connection
mongoose
    .connect(db,{ useNewUrlParser: true , useUnifiedTopology: true})
    .then( console.log('Connected to Mongoose') )
    .catch(err=> console.log(err))

const {
    admin,
    login
  } = require("./routes/auth");

const {
    addUser,
    fetchUsers,
    deleteUser
} = require("./routes/user");

//routes
app.use('/auth',admin);
app.use('/auth',login);
app.use('/user',addUser);
app.use('/user',fetchUsers);
app.use('/user',deleteUser);


//Serve static asserts if in production
if(process.env.NODE_ENV === 'production'){
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}


const port = process.env.PORT || 5000 ;
app.listen(port, ()=>{console.log(`server running on port ${port}`)});