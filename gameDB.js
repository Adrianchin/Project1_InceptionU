const mongoose = require("./mongoose.js");

const gameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  score: {
    type: Number 
  },
  createdAt: { type: Date, default: new Date() },
});
const Game = mongoose.model("Game", gameSchema);

const createGame = async (newGameData) => {
    let result = await Game.create(newGameData);
    // let newGame = new Game(newGameData)
    // newGame.save()
    return result;
};

module.exports = {
    createGame,
};