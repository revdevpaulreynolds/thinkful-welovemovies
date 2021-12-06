const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

function list(req, res) {

}

module.exports = {
    list: asyncErrorBoundary(list)
}