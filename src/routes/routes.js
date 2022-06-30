const router = require("express").Router();

router.get("/home", (req, res,) => {
    res.render("html/index", {
        titleOne: "Sobre mi",
        urlOne: "/about",
        titleTwo: "Proyectos",
        urlTwo: "/projects",
        titleThree: "Contactame",
        urlThree: "/contact"
    });
});

router.get("/about", (req, res) => {
    res.render("html/about", {
        titleOne: "Home",
        urlOne: "/home",
        titleTwo: "Proyectos",
        urlTwo: "/projects",
        titleThree: "Contactame",
        urlThree: "/contact"
    });
});

module.exports = router;