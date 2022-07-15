const router = require("express").Router();

router.get("/home", (req, res, next) => {
    res.render("html/index", {
        titleOne: "Sobre mi",
        urlOne: "/about",
        titleTwo: "Proyectos",
        urlTwo: "/projects",
        titleThree: "Contactame",
        urlThree: "/contact"
    });
});

router.get("/about", (req, res, next) => {
    res.render("html/about", {
        titleOne: "Home",
        urlOne: "/home",
        titleTwo: "Proyectos",
        urlTwo: "/projects",
        titleThree: "Contactame",
        urlThree: "/contact"
    });
});

router.get("/projects", (req, res, next) => {
    res.render("html/projects", {
        titleOne: "Home",
        urlOne: "/home",
        titleTwo: "Sobre mi",
        urlTwo: "/about",
        titleThree: "Contactame",
        urlThree: "/contact"
    });
});

router.get("/contact", (req, res, next) => {
    res.render("html/contact", {
        titleOne: "Home",
        urlOne: "/home",
        titleTwo: "Sobre mi",
        urlTwo: "/about",
        titleThree: "Proyectos",
        urlThree: "/projects"
    });
});

module.exports = router;