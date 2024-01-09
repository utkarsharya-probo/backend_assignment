var chai = require('chai');
var chaiHttp = require('chai-http');
const app = require('../server.js');
chai.use(chaiHttp);
chai.should();
describe("Testing the get contract api",()=>{
describe("id is valid",()=>{
it("it should not show error",(done)=>{
chai.request(app).get('/1').end((err,res)=>{
    res.should.have.status(200);
    done();
})



})

})
describe("id is not valid",()=>{
    it("it should  show error",(done)=>{
    chai.request(app).get('/9').end((err,res)=>{
        res.should.have.status(404);
        done();
    })
    
    
    
    })
    
    })


});
