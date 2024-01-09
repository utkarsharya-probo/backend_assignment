var chai = require('chai');
var chaiHttp = require('chai-http');
const app = require('../server.js');
chai.use(chaiHttp);
chai.should();
describe("Testing the update contract api",()=>{
describe("id is  valid",()=>{
it("it should not show error",(done)=>{
    const updatedUserData = {
        
        "Contract_name": 'eng vs aus',
        "Description": 't20',
        "userid" : "1",
        "Amount" : "5"
        
      };
chai.request(app).put('/1').send(updatedUserData).end((err,res)=>{
    res.should.have.status(201);
    done();
})



})

})
describe("Bad request",()=>{
    it("it should  show error",(done)=>{
        const updatedUserData = {
            "Contract_name" : "ind vs sl",
            "Amount" : "9"
        }
    chai.request(app).put('/1').send(updatedUserData).end((err,res)=>{
        res.should.have.status(500);
        done();
    })
    
    
    
    })
    
    })


});
