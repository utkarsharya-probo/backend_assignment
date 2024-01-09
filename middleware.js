 function verifyRequest(req,res,next){
if(req.body.Contract_name == "" || req.body.Description == "" || req.body.Amount == ""){
res.status(402).send("Fill out the details properly");

}
else{
    next();
}

 }
 module.exports = verifyRequest;