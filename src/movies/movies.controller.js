const path = require("path");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");


function movieExists(req, res, next) {

}

function list(req, res) {

}

function read(req, res) {

}

function theaters(req, res) {

}

function reviews(req, res) {

}

module.exports = {
    list: [asyncErrorBoundary(list)],
    read: [movieExists, asyncErrorBoundary(read)],
    theaters: [movieExists, asyncErrorBoundary(theaters)],
    reviews: [movieExists, asyncErrorBoundary(reviews)],
}