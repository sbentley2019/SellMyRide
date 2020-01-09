const router = require("express").Router();

module.exports = db => {
  router.get("/messages", (request, response) => {
    db.query(
      `
      SELECT * FROM messages
    `
    ).then(({ rows: messages }) => {
      response.json(messages);
    });
  });

  router.get("/message/:id", (request, response) => {
    db.query(
      `
      SELECT DISTINCT messages.seller_id, users.name FROM messages JOIN users ON seller_id = users.id WHERE user_id = $1
      `,
      [request.params.id]
    ).then(data => {
      response.json(data.rows);
    });
  });

  router.get("/messages/:id1/:id2", (request, response) => {
    db.query(
      `
      SELECT * FROM messages WHERE user_id IN ($1, $2) AND seller_id IN ($1, $2) ORDER BY timestamp
      `,
      [request.params.id1, request.params.id2]
    ).then(data => {
      response.json(data.rows);
    });
  });

  router.put("/messages/:id1/:id2", (request, response) => {
    const { message } = request.body;
    db.query(
      `
      INSERT INTO messages (user_id, seller_id, message) VALUES ( $1::integer, $2::integer, $3 )
      `,
      [request.params.id1, request.params.id2, message]
    ).then(() => {
      response.json("Added message.");
    });
  });

  return router;
};
