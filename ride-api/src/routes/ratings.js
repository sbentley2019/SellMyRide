const router = require("express").Router();

module.exports = db => {
  router.get("/ratings", (request, response) => {
    db.query(
      `
      SELECT * FROM ratings
    `
    ).then(({ rows: ratings }) => {
      response.json(ratings);
    });
  });

  return router;
};