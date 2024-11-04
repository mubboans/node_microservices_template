function ResponseHanlder(res,code,message,data={}){
    return res.status(code).send({
        message,data,status:'Success',success:true
    })
}
module.exports = ResponseHanlder