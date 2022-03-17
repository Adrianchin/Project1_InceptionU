const express = require('express');
const app = express();
const {castle, locationUpdate} = require("./gameRoutes");



app.listen(3000, ()=> {
    console.log('app is running on port 3000')
})
//test
app.post('/hello', (req, resp) => {
    resp.send('Hello');
})

let currentLocation;
let currentScore = 0;
let totalScore=0;
let key=false;
let rock = false;

//Start

app.get("/startGame", (req, res) => {
    res.send(
      `Good-day young adventurer! What is your name? 
      Please start here! :curl http://localhost:3000/castle?name={name}`
    );
});
    

//Castle
app.get("/castle", async (req, res) => {
    let name = req.query.name;
    let responseMessage = await castle(name, rock, key);
    console.log(responseMessage)
    res.send(responseMessage);
});

//if(key===true || rock===true){http://localhost:3000/tower} else {res.send("You need a key and the magic rock first!")};


//route 1
//field
app.get("/field", async (req, res) => {
    let currentLocation = "field";
    let nextLocation="bridge";
    let scoringQuestion="scored";
    let responseMessage = await locationUpdate(currentLocation, nextLocation, scoringQuestion, totalScore);
    console.log(responseMessage);
    res.send(responseMessage);
});
//bridge
app.get("/bridge", async (req, res) => {
    currentScore=Number(req.query.score);
    totalScore=totalScore+currentScore;
    let currentLocation = "bridge";
    let nextLocation="bog";
    let scoringQuestion="scored";
    let responseMessage = await locationUpdate(currentLocation, nextLocation, scoringQuestion, totalScore);
    console.log(responseMessage);
    res.send(responseMessage);
});
//bog
app.get("/bog", async (req, res) => {
    currentScore=Number(req.query.score);
    totalScore=totalScore+currentScore;
    let currentLocation = "bog";
    let nextLocation="monster";
    let scoringQuestion="scored";
    let responseMessage = await locationUpdate(currentLocation, nextLocation, scoringQuestion, totalScore);
    console.log(responseMessage);
    res.send(responseMessage);
});
//monster
app.get("/monster", async (req, res) => {
    currentScore=Number(req.query.score);
    totalScore=totalScore+currentScore;
    let currentLocation = "monster";
    let nextLocation="key";
    let scoringQuestion="scored";
    let responseMessage = await locationUpdate(currentLocation, nextLocation, scoringQuestion, totalScore);
    console.log(responseMessage);
    res.send(responseMessage);
});
//key
app.get("/key", async (req, res) => {
    currentScore=Number(req.query.score);
    totalScore=totalScore+currentScore;
    let currentLocation = "key";
    let nextLocation="castle";
    let scoringQuestion="scored";
    key=true;
    let responseMessage = await locationUpdate(currentLocation, nextLocation, scoringQuestion, totalScore);
    console.log(responseMessage);
    res.send(responseMessage);
});

//route 2
//forest
app.get("/forest", async (req, res) => {
    currentScore=Number(req.query.score);
    totalScore=totalScore+currentScore;
    let currentLocation = "forest";
    let nextLocation="river";
    let scoringQuestion="scored";
    let responseMessage = await locationUpdate(currentLocation, nextLocation, scoringQuestion, totalScore);
    console.log(responseMessage);
    res.send(responseMessage);
});
//river
app.get("/river", async (req, res) => {
    currentScore=Number(req.query.score);
    totalScore=totalScore+currentScore;
    let currentLocation = "river";
    let nextLocation="graveyard";
    let scoringQuestion="scored";
    let responseMessage = await locationUpdate(currentLocation, nextLocation, scoringQuestion, totalScore);
    console.log(responseMessage);
    res.send(responseMessage);
});
//graveyard
app.get("/graveyard", async (req, res) => {
    currentScore=Number(req.query.score);
    totalScore=totalScore+currentScore;
    let currentLocation = "graveyard";
    let nextLocation="ghost";
    let scoringQuestion="scored";
    let responseMessage = await locationUpdate(currentLocation, nextLocation, scoringQuestion, totalScore);
    console.log(responseMessage);
    res.send(responseMessage);
});
//ghost
app.get("/ghost", async (req, res) => {
    currentScore=Number(req.query.score);
    totalScore=totalScore+currentScore;
    let currentLocation = "ghost";
    let nextLocation="magicrock";
    let scoringQuestion="scored";
    let responseMessage = await locationUpdate(currentLocation, nextLocation, scoringQuestion, totalScore);
    console.log(responseMessage);
    res.send(responseMessage);
});
//rock
app.get("/magicrock", async (req, res) => {
    currentScore=Number(req.query.score);
    totalScore=totalScore+currentScore;
    let currentLocation = "rock";
    let nextLocation="castle";
    let scoringQuestion="scored";
    rock=true;
    let responseMessage = await locationUpdate(currentLocation, nextLocation, scoringQuestion, totalScore);
    console.log(responseMessage);
    res.send(responseMessage);
});

//last route
//tower
app.get("/tower", async (req, res) => {
    currentScore=Number(req.query.score);
    totalScore=totalScore+currentScore;
    let currentLocation = "tower";
    let nextLocation="dragon";
    let scoringQuestion="scored";
    let responseMessage = await locationUpdate(currentLocation, nextLocation, scoringQuestion, totalScore);
    console.log(responseMessage);
    res.send(responseMessage);
});
//dragon
app.get("/dragon", async (req, res) => {
    currentScore=Number(req.query.score);
    totalScore=totalScore+currentScore;
    let currentLocation = "dragon";
    let nextLocation="princess";
    let scoringQuestion="scored";
    let responseMessage = await locationUpdate(currentLocation, nextLocation, scoringQuestion, totalScore);
    console.log(responseMessage);
    res.send(responseMessage);
});
//princess
app.get("/princess", async (req, res) => {
    currentScore=Number(req.query.score);
    totalScore=totalScore+currentScore;
    let currentLocation = "princess";
    let nextLocation="complete";
    let scoringQuestion="scored";
    let responseMessage = await locationUpdate(currentLocation, nextLocation, scoringQuestion, totalScore);
    console.log(responseMessage);
    res.send(responseMessage);
});

app.get("/complete", async (req, res) => {
    totalScore=totalScore+currentScore;
    let currentLocation = "complete";
    let scoringQuestion="unscored";
    let responseMessage = await locationUpdate(currentLocation, nextLocation, scoringQuestion, totalScore);
    console.log(responseMessage);
    res.send(responseMessage);
});