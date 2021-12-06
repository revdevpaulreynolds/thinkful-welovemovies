const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const controller = require("./movies.controller");

router.route("/")
    .get(controller.list)
    .all(methodNotAllowed)

router.route("/:movieId")
    .get(controller.read)
    .all(methodNotAllowed)

router.route("/:movieId/theaters")
    .get(controller.theaters)
    .all(methodNotAllowed)

router.route("/:movieId/reviews")
    .get(controller.reviews)
    .all(methodNotAllowed)

module.exports = router;