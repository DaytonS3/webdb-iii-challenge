const router = require("express").Router();

const knex = require("knex");

const knexConfig = {
  client: "sqlite3",
  connection: {
    filename: "./Data/lambda.db3"
  },
  useNullAsDefault: true
};

const db = knex(knexConfig);

router.get("/", (req, res) => {
  db("students")
    .then(students => {
      res.status(200).json(students);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  db("students")
    .where({ id: req.params.id })
    .then(students => {
      res.status(200).json(students);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  db("students")
    .insert(req.body)
    .then(ids => {
      db("students")
        .where({ id: ids[0] })
        .then(students => {
          res.status(200).json(students);
        });
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
