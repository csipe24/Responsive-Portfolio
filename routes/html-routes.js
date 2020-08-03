// Dependencies
const router = require("express").Router();

// Routes user is sent to
router.get("/", (req, res) => {
  res.render("index.handlebars");
});

router.get("/portfolio", (req, res) => {
  res.render("portfolio.handlebars");
});

module.exports = router;

// Routes
// // index route loads view.html
// app.get("/", function(req, res) {
// res.sendFile(path.join(__dirname, "../public/blog.html"));
//   });

// app.get("/cms", function(req, res) {
// res.sendFile(path.join(__dirname, "../public/cms.html"));
//   });

//   // blog route loads blog.html
// app.get("/blog", function(req, res) {
// res.sendFile(path.join(__dirname, "../public/blog.html"));
//   });

