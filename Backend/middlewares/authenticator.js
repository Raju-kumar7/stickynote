const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


function authenticator(req, res, next){
    const token = req.headers.authorization
    jwt.verify(token, 'rajukumar', (error, decode)=>{
        if (error) {
            res.send({
                message: 'something went wrong'+ error, 
                status: 0
            })
        }
        if (decode) {
            req.body.user= decode.userId
            next()
        }else{
            res.send({
                message: 'token is not valid login please!', 
                status: 2
            })
        }
    })
}

module.exports ={authenticator}