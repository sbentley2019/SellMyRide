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

  /////this one is for obtaining listing that belong to a specific user_id

  router.get("/listing/profile/:id", (request, response) => {
    db.query(
      `
      SELECT * FROM listing WHERE user_id = $1
      `,
      [request.params.id]
    ).then(data => {
      console.log(data.rows);
      response.json(data.rows);
    });
  });

  //////////////

  router.get("/listing", (request, response) => {
    db.query(
      `
      SELECT * FROM listing LIMIT 5
    `
    ).then(({ rows: listing }) => {
      response.json(listing);
    });
  });

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
    db.query(
      `
      SELECT DISTINCT model FROM listing WHERE make = $1`,
      [request.params.id]
    ).then(data => {
      response.json(data.rows);
    });
  });

  router.get("/listing/make/:id1/model/:id2", (request, response) => {
    db.query(
      `
      SELECT * FROM listing WHERE make = $1 AND model = $2
      `,
      [request.params.id1, request.params.id2]
    ).then(data => {
      response.json(data.rows);
    });
  });

  router.put("/listing", (request, response) => {
    if (process.env.TEST_ERROR) {
      setTimeout(() => response.status(500).json({}), 1000);
      return;
    }
    console.log(request.body);
    // need to add other listing variables into the db query
    const {
      make,
      model,
      year,
      user_id,
      listing_image,
      price,
      kms,
      city
    } = request.body;

    console.log(make, model, year, user_id, listing_image, price, kms, city);
    db.query(
      `
      INSERT INTO listing (make, model, year, user_id, listing_image, is_sold, price, kms, city) VALUES ($1, $2, $3, $4, $5, FALSE, $6, $7, $8)
    `,
      [make, model, year, user_id, listing_image, price, kms, city]
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

  router.delete("/listing/:id", (request, response) => {
    if (process.env.TEST_ERROR) {
      setTimeout(() => response.status(500).json({}), 1000);
      return;
    }

    console.log("Deleted listing : " + request.params.id);

    /* const { id } = request.body.id; */

    db.query(`DELETE FROM listing WHERE id = $1`, [Number(request.params.id)])
      .then(res => res.rows)
      .catch(error => console.log(error));
  });

  return router;
};
