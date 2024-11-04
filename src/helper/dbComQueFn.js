const CustomError = require("../error/CustomError");

const fnGet=async (model,query,include=[])=>{
    try {
        query = {
            where: query,
            order: [["id", "DESC"]],
            include: inlcude.length > 0 ? inlcude : '',
        }
        try {
            let returnRecord = await model.findAll(query);
            return returnRecord;
        } catch (error) {
            throw new CustomError(error?.message, 500)
        }
    } catch (error) {
        throw new CustomError(error?.message,503);
    }
}

const fnPost=async(model,obj,)=>{
    try {
        let createData = await model.create(obj);
        return createData;
    } catch (error) {
        throw new CustomError(error?.message, 400)
    }
}
const fnUpdate=async(model,obj,condition)=>{
    try {
        const updateCheck = await model.update(obj, { where: condition });
        if (updateCheck[0] !== 0) {
            return true
        }
        else {
            throw new CustomError('No Record Found To Update', 404)
        }
    } catch (error) {
        throw new CustomError(error?.message, 500)
    }
}
const fnDelete=async(model,condition)=>{
    try {
        const deleteCheck = await model.destroy({ where: condition });
        if (deleteCheck == 1 || deleteCheck > 1) {
            return true
        }
        else {
            throw new CustomError('No Record Found To Delete', 404)
        }
    } catch (error) {
        throw new CustomError(error?.message, 400)
    }
}
module.exports ={
    fnGet,fnPost,fnUpdate,fnDelete
}