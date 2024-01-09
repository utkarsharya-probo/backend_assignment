const {getDataFromDB,getDataFromDBbyid,DeleteContractByid,addOreditContract} = require('../../models/contract.model');

async function httpGetData(req,res){
    try {
       
        const data = await getDataFromDB();
        res.status(200).json(data);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error fetching data' });
      }
}
async function httpGetDataByid(req,res){
    try {
       
        const data = await getDataFromDBbyid(req.params.id);
        if(data.length == 0){
            res.status(404).json('no data found to corresponding id');
        }
        else{
        res.status(200).json(data);
        }
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error fetching data' });
      }
}

async function httpDeletebyId(req,res){
try{
const affectedRows = await DeleteContractByid(req.params.id);
if(affectedRows == 0){
res.status(404).json('no record with given id');
}
else{
res.send('Deleted successfuly');
}
}
catch(error){
res.status(500).json('bad request');

}


}
async function httpAdd(req,res){
await addOreditContract(req.body);
res.status(201).send('created successfully');
}
async function httpEdit(req,res){
    try{
   const affectedRows =  await addOreditContract(req.body,req.params.id);
   if(affectedRows == 0){
    res.status(404).send('no record found with given id');
   }
   else{
    res.status(201).send('updated successfully');
   }
}
catch(error){
res.status(500).send('error detected');

}
    }

module.exports = {httpGetData,httpGetDataByid,httpDeletebyId,httpAdd,httpEdit};