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

  router.get("/car_images/:id", (request, response) => {
    db.query(
      `
      SELECT * FROM car_images WHERE id = $1
      `,
      [request.params.id]
    ).then(data => {
      response.json(data.rows);
    });
  });

  router.get("/car_images/listing/:id", (request, response) => {

    db.query(
      `
      SELECT * FROM car_images WHERE listing_id = $1
      `,
      [Number(request.params.id)]
    ).then(data => {

      response.json(data.rows);
    });
  });

  router.put("/car_images/:id", (request, response) => {
    const { imageUrl } = request.body;
    db.query(
      `
      INSERT INTO car_images (listing_id, image) VALUES ( $1::integer, $2)
      `,
      [request.params.id, imageUrl]
    ).then(() => {
      response.json("Image added.");
    });
  });

  router.delete("/car_images/:id", (request, response) => {
    // use a different variable instead of car_images(id) to delete
    db.query(
      `
      DELETE FROM car_images WHERE id = $1::integer
      `,
      [request.params.id]
    ).then(() => {
      response.json("Removed image.");
    });
  });

  return router;
};
