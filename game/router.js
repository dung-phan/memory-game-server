const { Router } = require("express");

const router = new Router();

const Game = require("./model");

//get all games (to check the history)

router.get("/games", (req, res, next) => {
  Game.findAll({
    order: [["createdAt", "DESC"]],
  })
    .then((games) => res.send(games))
    .catch(next);
});

//get the latest game

router.get("/game/", (req, res, next) => {
  Game.findOne({
    order: [["id", "DESC"]],
  })
    .then((entry) => res.send(entry))
    .catch(next);
});

// start the game

router.post("/start", (req, res, next) => {
  const cardNumb = Number(req.body.gameType);

  //generate an array of random unique numbers

  let numbArray = [];
  while (numbArray.length < cardNumb) {
    let i = Math.floor(Math.random() * 99) + 1;
    if (numbArray.indexOf(i) === -1) numbArray.push(i);
  }
  Game.create({
    ...req.body,
    status: "playing",
    randomNumbs: numbArray,
  })
    .then((game) => res.json(game))
    .catch(next);
});

//end the game: check the answer to see if the play wins
router.put("/end/:id", async (req, res) => {
  const game = await Game.findByPk(req.params.id);
  const correctAns = game.randomNumbs.sort((a, b) => a - b);

  //first update the player's answer
  if (game) {
    game.update({
      ...req.body,
      status: "done",
    });
  }
  //check if the answer is right
  if (
    Object.keys(game.userAnswer).length === correctAns.length &&
    game.userAnswer.every((value, index) => value === correctAns[index])
  ) {
    game
      .update({
        ...req.body,
        winCheck: true,
      })
      .then((game) => {
        res.write(JSON.stringify(game));
        res.end();
      });
  } else {
    game
      .update({
        ...req.body,
        winCheck: false,
      })
      .then((game) => {
        res.write(JSON.stringify(game));
        res.end();
      });
  }
});

module.exports = router;
