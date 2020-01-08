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

    const { username , email, password, location, phone } = request.body;

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
      .then(res => res.rows)
      .catch(error => console.log(error));
  });


  return router;
};