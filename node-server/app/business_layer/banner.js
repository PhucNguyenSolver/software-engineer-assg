const db = require('../data_layer')

const getBanner = async function(req, res) {
    // try {
    //     const banner = await db.Banner.findById("6194a67d1a3858f6f08fa3e7").exec();
    //     console.log(banner)
    //     res.status(200).send(banner);
    // }
    // catch(err) {
    //     res.status(500).send({msg: 'Server Error !!'})
    // }
    const banner = await db.Banner.findById("6194a67d1a3858f6f08fa3e7").exec();
    res.status(200).send(banner);
}

module.exports = {
    getBanner
}