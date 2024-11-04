const express = require('express');
const cors = require('cors');
const { customer, product, shopping } = require('./api/api-index');
const handleErorrs = require('./utils/handleErrors');
// const {}
// const handleErrors = require('ha')
module.exports = async(app)=>{
    app.use(express.json({limit:'1mb'}));
    app.use(express.urlencoded({extended:true, limit:'1mb'}));
    app.use(cors());
    // app.use(express.static())


    customer(app);
    product(app);
    shopping(app)
    
    app.use(handleErorrs)
}