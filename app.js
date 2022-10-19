require("dotenv/config");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

const middleware = function(req, res, next) {
    console.log("Middleware start..");
    next();
};
const postMiddleware = function(req, res, next) {
    console.log("Post Middleware start..");
    next();
};
app.use(middleware);

app.get("/hello", middleware, function(req, res) {
    console.log("Merhaba Get isteği attınız");
    res.json("Nodejs Restapi Basic Example");
});

app.post("/hello", middleware, postMiddleware, function(req, res) {
    console.log("Merhaba Post isteği attınız start...");
    res.json("Nodejs Restapi Basic Example");
});
app.put("/hello", middleware, postMiddleware, function(req, res) {
    console.log("Merhaba Put isteği attınız");
    res.json("Nodejs Restapi Basic Example");
});
app.delete("/hello", middleware, postMiddleware, function(req, res) {
    console.log("Merhaba Delete isteği attınız");
    res.json("Nodejs Restapi Basic Example");
});
app.listen(PORT, () => {
    console.log("Ready on http://localhost:" + PORT);
});