
//Creating DB connection


const MongoClient = require ("mongodb").MongoClient;
const ObjectID =require ('mongodb').ObjectID;
const dbname = "job_mongodb";
const url = "mongodb://loacalhost:27017";
const mongoOptions = {userNewParser:true};

const state = {
    db: null
};

const connect = (cb) =>{
    if (state.db)
    cb();
    else{
        MongoClient.connect(url,mongoOptions,(err,client)=>{
            if(err)
            cb(err);
            else{
                state.db = client.db(dbname);
            }
        });

        
    }
}

const getPrimaryKey = (_id)=>{
    return ObjectID(_id);
}
const getDB= ()=>{
    return state.db;
}

