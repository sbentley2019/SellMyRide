const router = require("express").Router();

module.exports = db => {
  router.get("/car_images", (request, response) => {
    db.query(
      `
      SELECT * FROM car_images
    `
    ).then(({ rows: car_images }) => {
      response.json(car_images);
    });
  });

  return router;
};