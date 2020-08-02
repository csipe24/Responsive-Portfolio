//Require Dependencies/Models
const router = require("express").Router();
const db = require("../models/index");

// Routes --------------------------------

// GET Route
router.get("/", (req, res) => {
  console.log("Read Items");
  db.Post.findAll({}).then(results => {
    res.render("index", { posts: JSON.parse(JSON.stringify(results)) });
  });
});

// GET All Posts
router.get("/api/posts/", (req, res) => {
  console.log("Getting All Posts");
  db.Post.findAll({}).then(dbPost => {
    res.json(dbPost);
  });
});

// GET Single Post
router.get("/api/posts/:id", (req, res) => {
  console.log("Getting One Posts");
  db.Post.findOne({
    where: { id: req.params.id }
  }).then(dbPost => {
    res.json(dbPost);
  });
});

// POST route for saving a new post
router.post("/api/posts", (req, res) => {
  console.log(req.body);
  db.Post.create({
    title: req.body.title,
    body: req.body.body,
    category: req.body.category
  }).then(dbPost => {
    res.json(dbPost);
  });
});

// DELETE route for deleting posts
router.delete("/api/posts/:id", (req, res) => {
  console.log("Deleting Post");
  db.Post.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.end();
  });
});

// PUT route for updating posts
router.put("/api/posts", (req, res) => {
  db.Post.update(req.body, {
    where: {
      id: req.body.id
    }
  }).then(dbPost => {
    res.json(dbPost);
  });
});

// PUT route to edit a specific item
router.put("/api/items/:id", (req, res) => {
  db.Item.update(
    {
      item: req.body.item,
      quantity: req.body.quantity,
      cost: req.body.cost,
      CategoryId: req.body.CategoryId
    },
    {
      where: {
        id: req.params.id
      }
    }
  ).then(result => {
    if (result[0] === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
