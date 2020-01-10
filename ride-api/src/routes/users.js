const router = require("express").Router();

module.exports = db => {
  router.get("/users", (request, response) => {
    db.query(
      `
      SELECT * FROM users
    `
    ).then(({ rows: users }) => {
      response.json(users);
    });
  });

  router.put("/users", (request, response) => {
    if (process.env.TEST_ERROR) {
      setTimeout(() => response.status(500).json({}), 1000);
      return;
    }

    const { username, email, password, location, phone } = request.body;

    console.log(request.body);
    console.log(username);
    console.log(email);
    console.log(password);
    console.log(location);
    console.log(phone);

    db.query(
      `
      INSERT INTO users (name, email, password, location, phone) VALUES ( $1 , $2, $3, $4, $5)
    `,
      [username, email, password, location, phone]
    )
      .then(data => {
        response.json("User added.");
      })
      .catch(error => console.log(error));
  });

  router.put("/users/:id", (request, response) => {
    if (process.env.TEST_ERROR) {
      setTimeout(() => response.status(500).json({}), 1000);
      return;
    }

    const { username, email, password, location, phone } = request.body;

    db.query(
      `
      INSERT INTO users ( id, name, email, password, location, phone) VALUES ( $1 , $2, $3, $4, $5, $6)
      ON CONFLICT (id) DO
      UPDATE SET name = $2, email = $3, password = $4, location = $5, phone = $6
    `,
      [Number(request.params.id), username, email, password, location, phone]
    )
      .then(res => res.rows)
      .catch(error => console.log(error));
  });

  router.delete("/users/:id", (request, response) => {
    if (process.env.TEST_ERROR) {
      setTimeout(() => response.status(500).json({}), 1000);
      return;
    }

    console.log(request.params.id);

    /* const { id } = request.body.id; */

    db.query(`DELETE FROM users WHERE id = $1`, [Number(request.params.id)])
      .then(res => res.rows)
      .catch(error => console.log(error));
  });

  return router;
};
