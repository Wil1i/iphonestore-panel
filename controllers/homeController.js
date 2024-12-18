const config = require("../config.json")

const get = async (req, res) => {
    res.render("home", {config})
}

module.exports = {
    get
}