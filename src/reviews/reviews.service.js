const knex = require("../db/connection");

function update(reviewId) {
    return knex("reviews")
        .update("*")
        .where({"review_id": reviewId})
}

function destroy(reviewId) {

}

module.exports = {
    update,
    destroy,
}