const  {Admin} = require('../models/admin')
const bcrypt = require('bcryptjs')
const {createToken} = require("../utils/token");

const login = async (req,res, next) => {
    try{
        let username = req.body.email;
        let password = req.body.password;
        // const user = await User.findOne({$or: [{email: username}, {fullName: username}]});
        const user = await Admin.findOne({email: username});
        if(!user) return res.status(404).json({
            success: false,
            message: "User not found",
        });
        if(user) {
            const isPassword = await bcrypt.compare(password, user.password);
            if(!isPassword) return res.status(400).json({
                success: false,
                message: "Invalid password"
            });
            const token = createToken({
                id: user._id,
                email: user.email,
                isAdmin: user.isAdmin
            });
            // return res.status(200).json({
            //     success: true,
            //     data: user,
            //     token: `Bearer ${token}`
            // })
            res.cookie('token', `Bearer ${token}`, { maxAge: 900000, httpOnly: true }).redirect("/admin");
        }
    } catch(err) {
        if(err) return res.json({message: err.message});
    }
    // let username = req.body.email
    // let password = req.body.password
    // User.findOne({$or: [{username:email},{ fullname:email}]})
    // .then(user =>{
    //     if(user){
    //             bcrypt.compare(password, user.password, function(err, result){})
    //     }else{
    //         res.json({
    //             message: "Not an Admin"
    //         })
    //     }
    // })
}

module.exports = {login};