
const { createGame } = require(`./gameDB`);

let score = 0;
let princessRoute="First I need both the Key of power and the Stone of specialness!";

const locations = {
    field: `You see a field with only one tree in it. Man... this place is not poplar...`,
    bridge: `A giant bridge appears. It reminds you of a documentry you watched about engineering. It was riveting`,
    bog: `You got worried about being bogged down, so you light a fire. You feel at ease as you bring out the sticks to marsh-mellow!`,
    monster: `One look at the monster and you could see he was like a fish out of water. However, you tell him a joke to lighten the mood and ya got'em Kraken up!`,
    key: `The last time I lost my key was with my laptop. I was so upset I lost ctrl`,
    forest: `Hmmmm.... I would be very careful around this forest. If you make the wrong move, you may be tried for treeson!`,
    river: `A deep river, how cliche. Sigh, I guess you can swim it... thank god this section of the Hipster River is not the main stream.`,
    graveyard: `The ancient blueberry graveyard... its seems... berry scary!`,
    ghost: `Ahhhh a ghost!!! A spoooky comedian who once had everyone in stitches. I hear he was dead funny.`,
    magicrock: `I spoke to a cute geologist and she brushed me off. Talk about hitting rock bottom!`,
    tower: `I once tripped while climbing a tower in Paris. I fell.`,
    dragon: `I remember this boring bedtime story my Dad kept repeating. It just kept dragon-on and on and on and on.`,
    princess: `Woo! You made it through that punny experience! I am sure those Dad jokes will swoon the princess... right?.... princess?... guys... guys?`,
    complete: `Amazing! I hope you had a few laughs!!!`
}

const directions = {
    castle: `curl http://localhost:3000/castle?score={score}`,
    field: `curl http://localhost:3000/field`,
    bridge: `curl http://localhost:3000/bridge?score={score}`,
    bog: `curl http://localhost:3000/bog?score={score}`,
    monster: `curl http://localhost:3000/monster?score={score}`,
    key: `curl http://localhost:3000/key?score={score}`,
    forest: `curl http://localhost:3000/forest`,
    river: `curl http://localhost:3000/river?score={score}`,
    graveyard: `curl http://localhost:3000/graveyard?score={score}`,
    ghost: `curl http://localhost:3000/ghost?score={score}`,
    magicrock: `curl http://localhost:3000/magicrock?score={score}`,
    tower: `curl http://localhost:3000/tower?score={score}`,
    dragon: `curl http://localhost:3000/dragon?score={score}`,
    princess: `curl http://localhost:3000/princess?score={score}`,
    complete: `curl http://localhost:3000/complete`
}

const scoring = {
    scored: "How cool was this Dad joke? - for bad,+ for Dad! Sky's the limit (so is the floor)",
    unscored: "I betchya love dad jokes!"
}

const castle = async (name, key, rock) => {
    // let newGameState = await createGame({ name: name, score: 0 });
    // let newGameId = newGameState._id;
    // let game = await findGameById(newGameId);
    // gameState = game;
    if(key===true || rock===true){
        princessRoute=directions.tower;
    }
    let message = (
    `Greetings ${name}! Your quest is to save the princess!
    To the field! ${directions.field}
    To the forest! ${directions.forest}
    Can I save the princess? ${princessRoute}`);

  // `your gameId to continue later is: ${game._id}`;
    return message;
  };

const locationUpdate = async (currentLocation, nextLocation, scoringQuestion, totalScore) => {
    let message = (
        `Wow! Dad joke time: ${locations[currentLocation]}
        Onto the next location! ${directions[nextLocation]}
        ${scoring[scoringQuestion]}
        Your current cool dad score is: ${totalScore}`
        );
    return message;
}

  module.exports = {
      castle,
      locationUpdate,
  }