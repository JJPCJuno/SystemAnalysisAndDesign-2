const Sequelize = require("sequelize");
require("dotenv").config();

async function connectToDB(){
    const sequelize=new Sequalize("db_sad2", "root", "",{
        host:"localhost",
        dialect:"mysql"
    });
    sequelize.authenticate().then(()=>{
        //this is the resolve promise
        console.log("DB connection is succesful")
    }).catch((err)=>{
        //reject the promise
        console.error("Encountered error",err)
    });
}

exports.connectToDB=connectToDB