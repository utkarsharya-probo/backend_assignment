const db = require('../db.js');

async function getDataFromDB() {
    
      const query = 'SELECT * FROM contract';
     const [rows] = await db.query(query)
     .catch(err=>console.log(err));

 return rows; 
  }
  async function getDataFromDBbyid(id,page,limit) {
    
    const query = `SELECT * FROM contract WHERE userid = ${id} LIMIT ${limit} OFFSET ${page}`;
   const [rows] = await db.query(query)
   .catch(err=>console.log(err));

return rows; 
}
async function DeleteContractByid(id) {
    
    const query = 'DELETE FROM contract WHERE Contractid = ?';
   const [rows] = await db.query(query,[id])
   .catch(err=>console.log(err));

return rows.affectedRows; 
}
async function addOreditContract(obj,id = 0){
    try{
    const [data] = await db.query("CALL contract_add_or_edit(?,?,?,?,?)",[id,obj.Contract_name,obj.Description,obj.userid,obj.Amount]);
    return data[0][0].affectedRows;
    }
    catch(error){
        throw error;
    }
    }
module.exports = {
    getDataFromDB,
    getDataFromDBbyid,
    DeleteContractByid,
    addOreditContract
};