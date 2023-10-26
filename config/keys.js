
if(process.env.NODE_ENV ==='production'){
    //We are in production return the production keys
    module.exports = require('./prod')
}else{
    //we are in developemt return development keys
    module.exports = require ('./dev') 
}

