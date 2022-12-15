const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')
const User = require('../../models/User')

router.post('/addUser', auth, (req,res) => {
    const { name, email, phone, address } = req.body;

    // console.log(req.body)

    const newUser = new User({
        name,
        email,
        phone,
        address,
    })

    newUser.save()
        .then(user => {
            res.json(user)
        })
        .catch(err => {
            console.log(err)
            res.status(400).json({msg: "Unable to add user. Status code(400)"})
        })

})

module.exports = router;