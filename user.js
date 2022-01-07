const mysql =require ("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/connection").prototype);


const dbinfo = {
    host: "localhost",
    user: "root",
    password: "root",
    database: "project1",
  };

  const record ={

    sender:"omkar",
    reciver:"nikhil",
    msg:"hello....."
  }

  const addRecord =async (record) => {
      const connection =mysql.createConnection(dbinfo);
      await connection.connectAsync();
      const sql =`INSERT INTO message (sender,reciever,msg) values (?,?,?)`;
      await connection.queryAsync(sql,[record.sender,record.reciever,record.msg]);
      await connection.endAsync();
      console.log("message record added !!");
  }

  const getRecord =async (record) => {
    const connection =mysql.createConnection(dbinfo);
    await connection.connectAsync();
    const sql =`select * from message`;
    const list =await connection.queryAsync(sql,[]);
     await connection.endAsync();
    console.log("list record added !!");
    console.log(list);
    return list;
}

//getRecord()

module.exports ={addRecord, getRecord};