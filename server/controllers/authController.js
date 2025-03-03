const { models } = require("mongoose");
const Auth = require("../models/Auth");
const bcrypt = require("bcrypt")

exports.signupController = async (req, res, next) => {
    try {
        let { name, email, password } = req.body;
        const user = await Auth.findOne({ email: email })
        if (user) {
            return req.status(223).json({ message: 'User Already Exist!' })
        }
        if (password.length < 6) return res.json({ message: 'Min length 6' });
        password = await bcrypt.hash(password, 10);
        const newUser = Auth({ name, email, password })
        await newUser.save();
        res.json({
            message: 'Account successfully created!'
        })
    }
    catch (error) {
        next(error)
    }
}

const singinController = async (req, res, next) => {
    try {
        const { email, password } = req.body;

    }
    catch (error) {

    }
}
