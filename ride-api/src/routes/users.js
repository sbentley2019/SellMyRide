const router = require("express").Router();
const bcrypt = require("bcrypt");

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

  router.get("/users/profile/:id", (req, res) => {
    db.query(
      `
    SELECT * FROM users WHERE id = $1 LIMIT 1`,
      [req.params.id]
    ).then(data => {
      res.json(data.rows);
    });
  });
  router.post("/users/register", (req, res) => {
    if (
      !req.body.name ||
      !req.body.email ||
      !req.body.password ||
      !req.body.location ||
      !req.body.location ||
      !req.body.phone
    ) {
      res.statusCode = 403;
      res.send("Status Code: 403");
    } else {
      const { name, email, password, location, phone } = req.body;

      db.query(`SELECT * FROM users WHERE email = $1`, [email]).then(data => {
        if (data.rows.length !== 0) {
          res.json(-1);
        } else {
          const hashedPassword = bcrypt.hashSync(password, 10);

          db.query(
            `
            INSERT INTO users (name, email, password, location, phone) VALUES ( $1 , $2, $3, $4, $5)
          `,
            [name, email, hashedPassword, location, phone]
          );

          db.query(
            `SELECT id, name FROM users where email = $1
            `,
            [email]
          )
            .then(data => {
              res.json(data.rows[0]);
            })
            .catch(error => console.log(error));
        }
      });
    }
  });

  router.post("/users/login", (req, res) => {
    const { email, password } = req.body;
    db.query(
      `
      SELECT * FROM users WHERE email = $1 LIMIT 1
      `,
      [email]
    ).then(data => {
      const user = data.rows[0];
      if (user && bcrypt.compareSync(password, user.password)) {
        res.json({ id: data.rows[0].id, name: data.rows[0].name });
      } else {
        res.json(-1);
      }
    });
  });

  router.get("/users/:id", (request, response) => {
    db.query(
      `
      SELECT * FROM users WHERE email = $1 LIMIT 1
      `,
      [request.params.id]
    ).then(data => {
      response.json(data.rows);
    });
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
