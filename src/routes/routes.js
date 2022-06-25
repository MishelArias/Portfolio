const router = require("express").Router();

router.get("/home", (req, res,) => {
    res.render("html/index", {
        urlOne: "/about",
        urlTwo: "/projects",
        urlThree: "/contact"
    });
});

module.exports = router;