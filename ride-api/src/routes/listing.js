const router = require("express").Router();

module.exports = db => {
  router.get("/listing", (request, response) => {
    db.query(
      `
      SELECT * FROM listing
    `
    ).then(({ rows: listing }) => {
      response.json(listing);
    });
  });

  return router;
};