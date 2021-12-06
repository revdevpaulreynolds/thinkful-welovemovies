const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

function update(req, res) {

}

function destroy(req, res, next) {

}

module.exports = {
    update,
    delete: asyncErrorBoundary(destroy)
}