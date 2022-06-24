const express = require("express");
const path = require("path");

const app = express();

//settings
app.set("port", process.env.PORT || 3000);
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//static files
app.use("/css", express.static(__dirname + "/views/css"));
app.use("/html", express.static(__dirname + "/views/html"));
app.use("/js", express.static(__dirname + "/views/js"))
app.use("/img", express.static(__dirname + "/views/img"));

//Routes
app.use(require("./routes/routes"));

//Running Server
app.listen(app.get("port"), () => {
    console.log(`Server Running on port: ${app.get("port")}`);
});