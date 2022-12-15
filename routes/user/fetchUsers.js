const express = require('express');
const router = express.Router();
const User = require('../../models/User')
const auth = require('../../middleware/auth')


router.post('/fetchUsers', auth, (req,res) => {
    User.find()
    .then(allUsers => {
        // console.log(allUsers)
        res.json(allUsers)
    })
    .catch(err => {
        console.log(err)
    })

})

module.exports = router;