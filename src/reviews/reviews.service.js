const knex = require("../db/connection");

function read(reviewId) {
    return knex("reviews")
        .select("*")
        .where({"review_id": reviewId})
        .first()
}

function readReviewCritic(critic_id) {
    return knex("critics as c")
      .select("*")
      .where({ "c.critic_id": critic_id })
  }

function update(updatedReview) {
    return knex("reviews as r")
        .update(updatedReview, "*")
        .where({"r.review_id": updatedReview.review_id})
        .then(() => read(updatedReview.review_id))
}

function destroy(review_id) {
    return knex("reviews")
        .where({review_id})
        .del()
}

module.exports = {
    read,
    update,
    destroy,
    readReviewCritic,
}