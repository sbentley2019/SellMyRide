const router = require("express").Router();

module.exports = db => {
  router.get("/makeModel/make", (request, response) => {
    db.query(
      `
      SELECT make FROM makes
    `
    ).then(data => {
      response.json(data.rows);
    });
  });

  router.get("/makeModel/make/:id", (request, response) => {
    console.log("got here");
    db.query(
      `
      SELECT model FROM models 
      JOIN makes ON makes.id = make_id
      WHERE make = $1`,
      [request.params.id]
    ).then(data => {
      response.json(data.rows);
    });
  });

  return router;
};