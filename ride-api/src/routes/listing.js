const router = require("express").Router();

module.exports = db => {
  router.get("/listing/make", (request, response) => {
    db.query(
      `
      SELECT DISTINCT make FROM listing
      `
    ).then(data => {
      response.json(data.rows);
    });
  });

  router.get("/listing/make/:id", (request, response) => {
    console.log("got here");
    db.query(
      `
      SELECT DISTINCT model FROM listing WHERE make = $1`,
      [request.params.id]
    ).then(data => {
      response.json(data.rows);
    });
  });

  router.get("/listing", (request, response) => {
    db.query(
      `
      SELECT * FROM listing
    `
    ).then(({ rows: listing }) => {
      response.json(listing);
    });
  });


  router.put("/listing/:id", (request, response) => {

    if (process.env.TEST_ERROR) {
      setTimeout(() => response.status(500).json({}), 1000);
      return;
    }

    // need to add other listing variables into the db query

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

      INSERT INTO listing (make, model, year, user_id, listing_image, is_sold, price, kms, city) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    `,
      [make, model, year, request.params.id, imageUrl, isSold, price, kms, city]
    );
  });

  router.get("/listing/:id", (request, response) => {
    db.query(
      `
      SELECT * FROM listing WHERE id = $1::integer
      `,
      [request.params.id]
    ).then(data => {
      response.json(data.rows);
    });
  });

  router.get("/listing/user/:id", (request, response) => {
    db.query(
      `
      SELECT * FROM listing WHERE user_id = $1
      `,
      [request.params.id]
    ).then(data => {
      response.json(data.rows);
    });
  });

  return router;
};
