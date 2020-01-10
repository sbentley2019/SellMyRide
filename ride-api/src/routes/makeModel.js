const router = require("express").Router();

module.exports = db => {
  router.get("/listing", (request, response) => {
    db.query(
      `
      SELECT * FROM makes
    `
    ).then(({ rows: cars }) => {
      response.json(cars);
    });
  });

  return router;
};