const express = require('express');
const expressApp = require('./express-app');
const { PORT } = require('./config/config');

(async function StartServer(){
    const app = express();
    try {
        // Handling Error and Setting the api module also called the middleware
        await expressApp(app);

        app.listen(PORT,()=>{

        }).on('error',(err)=>{
            console.log(err,'error has occur');
        })
    } catch (error) {
        
    }
})()