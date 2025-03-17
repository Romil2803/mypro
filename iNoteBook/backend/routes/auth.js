const express = require('express');
const router = express.Router();
const User = require('../models/User');
// const { query, validationResult } = require('express-validator');
// router.post('/',[
//     query('name').isLength({min:3}),
//     query('email').isEmail(),
//     query('password').isLength ({min: 5}),
// ],(req,res)=>{
//     // res.send("hello");
//     // console.log(req.body);
//     // const user=User(req.body)
//     // user.save()
//     // res.send(req.body);
//         const result = validationResult(req);
//         if (!result.isEmpty()) {
//             return res.status(400).json({ result: result.array() });
//         }
  
//     res.send(req.query);
// })
const { body,validationResult } = require('express-validator');

router.post('/', [
    body('name',"Enter a valid Name").isLength({ min: 3 }),
    body('email',"Enter a valid Email").isEmail(),
    body('password').isLength({ min: 5 }),
], (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ result: result.array() });
    }
    User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        }).then (user => res.json(user))
        .catch(err =>{console.log(err)})
});

module.exports = router