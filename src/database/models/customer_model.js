const getCurrentFormatedDate = require("../../helper/datehandler");
const Customer=(sequelize,DataType)=>{
    const Customer = sequelize.define("Users", {
        name: {
            type: DataType.STRING,
            allowNull: true
        },
        email: {
            type: DataType.STRING,
            allowNull: true
        },
        contact:{
            type: DataType.STRING,
            allowNull: true
        },
        createdOn:{
            type: Sequelize.STRING,
            defaultValue: getCurrentFormatedDate()
        }
    },
)
return Customer;
}
module.exports = Customer

 