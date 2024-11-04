const CustomError = require("../error/CustomError")

function TryCatch(fn){
    return (req,res,next)=>{
        Promise.resolve(fn(req,res,next)).catch((e)=>{return CustomError(e?.message ? e?.message:'Something wen wrong',e?.code)})
    }
}

module.exports = TryCatch