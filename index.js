const express = require("express");

const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const cors = require("cors");
require("./db");
const middleware = cors();
const app = express();
const port = process.env.PORT || 4000;

const db = require("./db");

const gameRouter = require("./game/router");

db.sync({ force: true })
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => console.error);
app
  .use(middleware)
  .use(jsonParser)
  .use(gameRouter)
  .listen(port, () => console.log("Server runing on port: ", port));
