const router = require("express").Router();

module.exports = db => {
  router.get("/cars", (request, response) => {
    db.query(
      `
      SELECT * FROM cars
    `
    ).then(({ rows: cars }) => {
      response.json(cars);
    });
  });

  return router;
};