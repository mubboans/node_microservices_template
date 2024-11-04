const moment = require("moment-timezone");

const getCurrentFormatedDate = () => {

    return moment(new Date())
        .tz(process.env.TIMEZONE)
        .format("YYYY-MM-DD HH:mm:ss")
        .toString();
    // return momentjsDate(new Date()).format('YYYY-MM-DD HH:mm:ss')
};

module.exports = getCurrentFormatedDate