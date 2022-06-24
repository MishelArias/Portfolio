const router = require("express").Router();

router.get("/home", (req, res,) => {
    res.render("html/index.html");
});

module.exports = router;