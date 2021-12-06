const path = require("path");
const knex = require("../db/connection");
const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");


async function movieExists(req, res, next) {
    const { movieId } = req.params;
    const movie = await service.read(movieId);
    if (movie) {
        res.locals.movie = movie;
        return next();
    }
    return next({ status: 404, message: "Movie cannot be found" });
}

async function list(req, res) {
    const is_showing = req.query.is_showing;
    console.log(is_showing);
    if (is_showing == 'true') {
        res.json({ data: await service.listShowing() });
    }
    res.json({ data: await service.list() })
}

async function read(req, res) {
    res.json({ data: res.locals.movie })
}

function theaters(req, res) {

}

function reviews(req, res) {

}

module.exports = {
    list: [asyncErrorBoundary(list)],
    read: [asyncErrorBoundary(movieExists), asyncErrorBoundary(read)],
    theaters: [movieExists, asyncErrorBoundary(theaters)],
    reviews: [movieExists, asyncErrorBoundary(reviews)],
}