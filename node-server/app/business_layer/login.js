const db = require('../data_layer')

const checkLogin = async function(req, res) {
    const account = await db.Employees.findOne({
        account : req.body.account,
        password : req.body.password
    }).exec();
    if (account) res.send("Accept")
    else res.send("Reject")
}

module.exports = {
    checkLogin
}