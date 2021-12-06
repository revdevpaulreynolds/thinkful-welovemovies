const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

function update(req, res) {

}

function destroy(req, res, next) {

}

module.exports = {
    update: asyncErrorBoundary(update),
    delete: asyncErrorBoundary(destroy)
}