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

  router.put("/listing", (request, response) => {
    if (process.env.TEST_ERROR) {
      setTimeout(() => response.status(500).json({}), 1000);
      return;
    }
    // need to add user_id and other listing variables into the db query
    const {
      make,
      model,
      year,
      imageUrl,
      isSold,
      price,
      kms,
      city
    } = request.body;

    console.log(make, model, year, imageUrl, isSold, price, kms, city);
    db.query(
      `
      INSERT INTO listing (make, model, year, listing_image, is_sold, price, kms, city) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    `,
      [make, model, year, imageUrl, isSold, price, kms, city]
    );
  });

  return router;
};
