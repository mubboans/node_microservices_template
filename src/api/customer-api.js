const { fnPost } = require("../helper/dbComQueFn");
const ResponseHanlder = require("../helper/responseHandler");
const TryCatch = require("../helper/Trycatch");
const CustomerService = require("../service/customer-service")

function customer(app){
    const custService = new CustomerService;
    app.post('/customer/signup',TryCatch(async(req,res,next)=>{
        let body  = req.body;
        await fnPost(Customer,body);
        ResponseHanlder(res,201,'Successfully created customer',{
            
        })
    }))
    
    custService
}
module.exports = customer