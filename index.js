const express = require("express");
const myrouter = require("./routers/router");
const bodyParser = require("body-parser");
const path = require("path");
const expressHandlerbars = require("express-handlebars");
const app = express();

app.set("views", path.join(__dirname, "/views/"));

app.engine(
  "hbs",
  expressHandlerbars({
    extname: "hbs",
    defaultLayout: "mainlayout",
    layoutsDir: __dirname + "/views/layouts",
  })
);

app.set("view engine", "hbs");

app.use(bodyParser.json());
app.use(myrouter);

const port = 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
