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
  db("cohorts")
    .then(cohorts => {
      res.status(200).json(cohorts);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  db("cohorts")
    .where({ id: req.params.id })
    .then(cohorts => {
      res.status(200).json(cohorts);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  db("cohorts")
    .insert(req.body)
    .then(ids => {
      db("cohorts")
        .where({ id: ids[0] })
        .then(cohorts => {
          res.status(200).json(cohorts);
        });
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
