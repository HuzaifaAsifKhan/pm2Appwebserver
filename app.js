const express = require('express');
const debug =  require('debug')('pm2');
const app = express();


const EXPRESS_PORT = process.env.EXPRESS_PORT || 3010;



app.get('/', (req, res) => {
  debug(`${req.headers['user-agent']} has access root URL`)
  res.send("Hello I'm Testing PM2")
})



app.listen(EXPRESS_PORT, err =>{
  if(!err){
    // console.log(`Working Fine on Port ${EXPRESS_PORT}`);
    debug(`Working Fine on Port ${EXPRESS_PORT}`)
  } else {
    console.log('some Problem Occured')
  }
})
