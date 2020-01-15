const router = require("express").Router();

module.exports = db => {
  router.get("/listing", (request, response) => {
    console.log("/listing GET");
    db.query(
      `
      SELECT * FROM listing
    `
    ).then(({ rows: listing }) => {
      response.json(listing);
    });
  });

  router.put("/listing", (request, response) => {
    console.log("/listing PUT");
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
      city,
      description,
      exterior_colour
    } = request.body;

    // console.log(make, model, year, user_id, listing_image, price, kms, city);
    db.query(
      `
      INSERT INTO listing (make, model, year, user_id, listing_image, is_sold, price, kms, city, description, exterior_colour) VALUES ($1, $2, $3, $4, $5, FALSE, $6, $7, $8, $9, $10)
    `,
      [
        make,
        model,
        year,
        user_id,
        listing_image,
        price,
        kms,
        city,
        description,
        exterior_colour
      ]
    ).then(data => {
      response.json("Listing added.");
    });
  });

  // /make
  router.get("/listing/make", (request, response) => {
    console.log("/listing/make GET");
    db.query(
      `
      SELECT DISTINCT make FROM listing ORDER BY make ASC
      `
    ).then(data => {
      response.json(data.rows);
    });
  });

  router.put("/listing/modify", (request, response) => {
    const {
      make,
      model,
      year,
      listing_image,
      price,
      kms,
      city,
      description,
      exterior_colour,
      id
    } = request.body;

    db.query(
      `
      UPDATE listing SET make = $1, model = $2, year = $3, listing_image = $4, price = $5, kms = $6, city =$7, description = $8, exterior_colour = $9 WHERE id = $10
    `,
      [
        make,
        model,
        year,
        listing_image,
        price,
        kms,
        city,
        description,
        exterior_colour,
        id
      ]
    ).then(data => {
      response.json("Listing modified.");
    });
  });

  router.get("/listing/make/:id", (request, response) => {
    console.log("/listing/make/:id GET");
    // const make = (request.params.id === "all" ? :)
    // const queryStr = `SELECT * FROM listing WHERE make = $1`
    db.query(
      `
      SELECT * FROM listing WHERE make = $1
      `,
      [request.params.id]
    ).then(data => {
      response.json(data.rows);
    });
  });

  router.get("/listing/findModel/:id", (request, response) => {
    console.log("/listing/make/:id GET");
    db.query(
      `
      SELECT DISTINCT model FROM listing WHERE make = $1 ORDER BY model ASC`,
      [request.params.id]
    ).then(data => {
      response.json(data.rows);
    });
  });

  router.get("/listing/make/:id/model", (request, response) => {
    console.log("/listing/make/:id/model GET");
    db.query(
      `
      SELECT DISTINCT model FROM listing WHERE make = $1`,
      [request.params.id]
    ).then(data => {
      response.json(data.rows);
    });
  });

  router.get("/listing/make/:id1/model/:id2", (request, response) => {
    console.log("/listing/make/:id1/model/:id2 GET");
    db.query(
      `
      SELECT * FROM listing WHERE make = $1 AND model = $2 
      `,
      [request.params.id1, request.params.id2]
    ).then(data => {
      response.json(data.rows);
    });
  });

  router.get("/listing/make/:id1/location/:id2", (request, response) => {
    console.log("/listing/make/:id1/location/:id2 GET");
    db.query(
      `
      SELECT * FROM listing WHERE make = $1 AND city ILIKE $2 
      `,
      [request.params.id1, request.params.id2]
    ).then(data => {
      response.json(data.rows);
    });
  });

  router.get(
    "/listing/make/:id1/model/:id2/location/:id3",
    (request, response) => {
      console.log("/listing/make/:id1/model/:id2/location/:id3 GET");
      db.query(
        `
      SELECT * FROM listing WHERE make = $1 AND model = $2 AND city ILIKE $3 
      `,
        [request.params.id1, request.params.id2, request.params.id3]
      ).then(data => {
        response.json(data.rows);
      });
    }
  );

  router.get("/listing/make/:id/model/all", (request, response) => {
    console.log("/listing/make/:id/model/all GET");
    db.query(
      `
      SELECT * FROM listing WHERE make = $1
      `,
      [request.params.id]
    ).then(data => {
      response.json(data.rows);
    });
  });

  router.get("/listing/make/:id1/model/:id2", (request, response) => {
    console.log("/listing/make/:id1/model/:id2 GET");
    db.query(
      `
      SELECT * FROM listing WHERE make = $1 AND model = $2
      `,
      [request.params.id1, request.params.id2]
    ).then(data => {
      response.json(data.rows);
    });
  });

  // /model
  router.get("/listing/model/:id", (request, response) => {
    console.log("/listing/model/:id GET");
    db.query(
      `
      SELECT * FROM listing WHERE model = $1 
      `,
      [request.params.id]
    ).then(data => {
      response.json(data.rows);
    });
  });

  router.get("/listing/model/:id1/location/:id2", (request, response) => {
    console.log("/listing/model/:id1/location/:id2 GET");
    db.query(
      `
      SELECT * FROM listing WHERE model = $1 AND city ILIKE $2 
      `,
      [request.params.id1, request.params.id2]
    ).then(data => {
      response.json(data.rows);
    });
  });

  // /location
  router.get("/listing/location/:id", (request, response) => {
    const city = request.params.id + "%";
    console.log("city", city);
    db.query(
      `
      SELECT * FROM listing WHERE city ILIKE $1
      `,
      [city]
    ).then(data => {
      response.json(data.rows);
    });
  });

  router.get("/listing/input/location/:id", (request, response) => {
    console.log(`/listing/location/${request.params.id} GET`);
    const city = request.params.id + "%";
    console.log("city", city);
    db.query(
      `
      SELECT DISTINCT city FROM listing WHERE city ILIKE $1
      `,
      [city]
    ).then(data => {
      response.json(data.rows);
    });
  });

  //////////////////////////////////////////////////////////////////

  /////this one is for obtaining listing that belong to a specific user_id

  router.get("/listing/profile/:id", (request, response) => {
    console.log("/listing/profile/:id GET");
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
  router.get("/listing/user/:id", (request, response) => {
    console.log("/listing/user/:id GET");
    db.query(
      `
      SELECT * FROM listing WHERE user_id = $1
      `,
      [request.params.id]
    ).then(data => {
      response.json(data.rows);
    });
  });

  router.get("/listing/:id", (request, response) => {
    console.log("/listing/:id GET");
    db.query(
      `
      SELECT * FROM listing WHERE id = $1::integer
      `,
      [request.params.id]
    ).then(data => {
      response.json(data.rows);
    });
  });

  router.delete("/listing/:id", (request, response) => {
    console.log("/listing/:id DELETE");
    if (process.env.TEST_ERROR) {
      setTimeout(() => response.status(500).json({}), 1000);
      return;
    }

    console.log("Deleted listing : " + request.params.id);

    /* const { id } = request.body.id; */

    db.query(
      `
      UPDATE listing SET is_sold = true WHERE id = $1
      `,
      [Number(request.params.id)]
    )
      .then(res => res.rows)
      .catch(error => console.log(error));
  });

  return router;
};
