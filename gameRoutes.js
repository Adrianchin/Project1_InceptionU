
const { createGame } = require(`./gameDB`);

let userName;
let score = 0;
let princessRoute="First I need both the Key of power and the Stone of specialness!";
const urlCurl = "curl http://localhost:3000/";
const url = "http://localhost:3000/";

const locations = {
    field: `You see a field with only one tree in it. Man... this place is not poplar...`,
    bridge: `A giant bridge appears. It reminds you of a documentry you watched about engineering. It was riveting`,
    bog: `You got worried about being bogged down, so you light a fire. You feel at ease as you bring out the sticks to marsh-mellow!`,
    monster: `One look at the monster and you could see he was like a fish out of water. However, you tell him a joke to lighten the mood and ya got'em Kraken up!`,
    key: `The last time you lost my key was with your laptop. you were so upset you lost ctrl`,
    forest: `Hmmmm.... you should be very careful around this forest. If you make the wrong move, you may be tried for treeson!`,
    river: `A deep river, how cliche. Sigh, you could swim across... thank god this section of the Hipster River is not the main stream.`,
    graveyard: `The ancient blueberry graveyard... its seems... berry scary!`,
    ghost: `Ahhhh a ghost!!! A spoooky comedian who once had everyone in stitches. You heard he was dead funny.`,
    magicrock: `Look, the magic rock! While picking it up, you spoke to a cute geologist and she brushed you off. Talk about hitting rock bottom!`,
    tower: `A friend told me "I once tripped while climbing a tower in Paris. I fell."`,
    dragon: `You suddenly remember this bedtime story about a crazy dragon protecting a princess in a tower. It just kept dragon-on and on and on and on.`,
    princess: `Woo! You made it through that punny experience! I am sure those Dad jokes will swoon the princess... right?.... princess?... guys... guys?`,
    complete: `Amazing! I hope you had a few laughs!!!`
}

const directions = {
    startGame: url+`startGame?`,
    castle: url+`castle?score=`,
    field: url+`field`,
    bridge: url+`bridge?score=`,
    bog: url+`bog?score=`,
    monster: url+`monster?score=`,
    key: url+`key?name=${userName}&score=`,
    forest: url+`forest`,
    river: url+`river?score=`,
    graveyard: url+`graveyard?score=`,
    ghost: url+`ghost?score=`,
    magicrock: url+`magicrock?name=${userName}&score=`,
    tower: url+`tower?score=`,
    dragon: url+`dragon?score=`,
    princess: url+`princess?score=`,
    complete: url+`complete?score=`
}

const scoring = {
    scored: "<p>How cool was this Dad joke?</p> <p>(-) for bad and (+) for Dad! Any number, although it is suggested between -10 and 10!</p>",
    unscored: "I betchya love dad jokes!"
}

const finalDadScore={
    score0lower: "Super lame!!!",
    score0to10: "Somewhat okay",
    score10to20: "Young dad",
    score20to30: "Old dad",
    score30to40: "Master dad",
    score40up: "God!!!"
}

const startGame = () => {
    let message = (
    `<p>Good-day young adventurer! What is your name? <p>
    <p>Please start here! Name -->

    <input id="name" />
    <a id="link"><button>To the Castle!</button></a>
    <script>
    let nameInput = document.getElementById('name')
    console.log(nameInput)
        nameInput.addEventListener('keyup',(e)=>{
        let link = document.getElementById('link')
        link.setAttribute('href','http://localhost:3000/castle?name='+e.target.value)

        })
    </script></p>`
    )
    return message;
}

;
const castle = async (name, key, rock) => {
    // let newGameState = await createGame({ name: name, score: 0 });
    // let newGameId = newGameState._id;
    // let game = await findGameById(newGameId);
    // gameState = game;
    userName=name;
    if(key===true && rock===true){
        princessRoute=`<a href=`+directions.tower+`>You now have the key and rock! Onward!!</a>`;
    } else if(key===true && rock===false){
        princessRoute=`You have the Key! You still require the Rock of power!`;
    } else if(key===false && rock===true){
        princessRoute=`You have the Rock! You still require the Key of power!`;
    } 
    let message = (
    `<p>Greetings ${userName}! Your quest is to save the princess!<p>
    <p>To the <a href=${directions.field}> field to find the Key</a>!</p>
    <p>To the <a href=${directions.forest}> forest to find the Rock!</a>!</p>
    <p>Can I save the princess? ${princessRoute}</p>`);
    return message;
  };

const locationUpdate = async (currentLocation, nextLocation, scoringQuestion, totalScore) => {
    let message = (
        `<p>Wow! Dad joke time: ${locations[currentLocation]}</p>
        <p>Onto the next location! <a href=${directions[nextLocation]}> The ${nextLocation}</a></p>
        <p>${scoring[scoringQuestion]}</p>

        <p>Please enter score here! Score -->

        <input id="score" />
        <a id="scoreButton"><button>Cool or Lame?</button></a>
        <script>
        let scoreInput = document.getElementById('score')
        console.log(scoreInput)
            scoreInput.addEventListener('keyup',(e)=>{
            let scoreButton = document.getElementById('scoreButton')
            scoreButton.setAttribute('href','${directions[nextLocation]}'+e.target.value)

            })
        </script></p>

        <p>Your current cool dad score is: ${totalScore}</p>`
        );
    return message;
}

const complete = async (nextLocation, totalScore) => {
    let finalDadScoreOutput;
    if(totalScore <= 0){
        finalDadScoreOutput=finalDadScore.score0lower;
    }else if(1 <= totalScore && totalScore <= 9){
        finalDadScoreOutput=finalDadScore.score0to10;
    }else if(10 <= totalScore && totalScore <= 19){
        finalDadScoreOutput=finalDadScore.score10to20;
    }else if(20 <= totalScore && totalScore <= 29){
        finalDadScoreOutput=finalDadScore.score20to30;
    }else if(30 <= totalScore && totalScore <= 39){
        finalDadScoreOutput=finalDadScore.score30to40;
    }else if(40 <= totalScore){
        finalDadScoreOutput=finalDadScore.score40up;
    }
    let message = (
        `<p>Congratulations ${userName}, you saved the princess like a true hero!</p>
        <p>This is your dad score!!! ${totalScore}</p>
        <p>The Dad gods have rated your humor as: ${finalDadScoreOutput}</p>
        <p>To play again, click here! <a href=${directions[nextLocation]}> Restart </a></p>`
        );
    return message;
}

  module.exports = {
      castle,
      locationUpdate,
      complete,
      startGame,
  }