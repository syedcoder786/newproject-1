const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')
const User = require('../../models/User')

router.delete('/deleteUser', auth, (req,res) => {
    const { id } = req.body;

    User.findOneAndRemove({_id:id})
        .then(user => {
            console.log(user)
            // res.json(user)
        })
        .catch(err => {
            res.status(400).json({msg:"Error with status 400."})
            // console.log(err)
        })

})

module.exports = router;