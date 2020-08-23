// Dependencies
const router = require("express").Router();

// Routes user is sent to
router.get("/", (req, res) => {
  res.render("index.handlebars");
});

router.get("/portfolio", (req, res) => {
  res.render("portfolio.handlebars");
});

router.get("/blog", (req, res) => {
  res.render("blog.handlebars");
});

module.exports = router;
