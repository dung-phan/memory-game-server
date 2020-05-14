const Sequelize = require("sequelize");
const db = require("../db");

const Game = db.define("game", {
  gameType: {
    type: Sequelize.ENUM("4", "8", "12"),
  },
  userAnswer: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
  },
  randomNumbs: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
  },
  winCheck: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  status: {
    type: Sequelize.ENUM("empty", "playing", "done"),
    defaultValue: "empty",
  },
});

module.exports = Game;
