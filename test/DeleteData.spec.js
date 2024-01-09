var chai = require('chai');
var chaiHttp = require('chai-http');
const app = require('../server.js');
chai.use(chaiHttp);
chai.should();
describe("Testing the delete api",()=>{
describe("id is valid and record can be deleted",()=>{
it("it should show not show error",(done)=>{
    chai.request(app).delete('/2').end((err,res)=>{
        res.should.have.status(200);
        done();
})

})

})
describe("id is not valid and record cannot be deleted",()=>{
    it("it should show error",(done)=>{
        chai.request(app).delete('/2').end((err,res)=>{
            res.should.have.status(404);
            done();
    })
    
    })
    
    })
});