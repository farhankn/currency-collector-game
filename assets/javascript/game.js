// create an object called game data
var gameData = {
    randomNumber: Math.floor(Math.random() * 120 + 19),
    money0: Math.floor(Math.random() * 12 + 1),
    money1: Math.floor(Math.random() * 12 + 1),
    money2: Math.floor(Math.random() * 12 + 1),
    money3: Math.floor(Math.random() * 12 + 1),
    userPick: 0,
    wins: 0,
    losses: 0,
    //Create a function in the object called didUserWin
    //Checks to see if the user won or lost and updates appropriate fields
    didUserWin: function(x) {
        if (x == this.randomNumber) {
            this.wins = this.wins +1;
            this.userPick = 0;
            this.randomNumber= Math.floor(Math.random() * 120 + 19);
            this.money0= Math.floor(Math.random() * 12 + 1);
            this.money1= Math.floor(Math.random() * 12 + 1);
            this.money2= Math.floor(Math.random() * 12 + 1);
            this.money3= Math.floor(Math.random() * 12 + 1);
            
        }
        if (x > this.randomNumber) {
            this.losses = this.losses+1;
            this.userPick = 0;
            this.randomNumber= Math.floor(Math.random() * 120 + 19);
            this.money0= Math.floor(Math.random() * 12 + 1);
            this.money1= Math.floor(Math.random() * 12 + 1);
            this.money2= Math.floor(Math.random() * 12 + 1);
            this.money3= Math.floor(Math.random() * 12 + 1);
        }
    },
};

$(document).ready(function() {

    //create vars that grab classes of images from the html, using jquery
    var img0 = $(".img0");
    var img1 = $(".img1");
    var img2 = $(".img2");
    var img3 = $(".img3");
    //create a var that grabs the class number
    var theRandomNumber = $(".number");
    //create vars that grabs classes of wins, losses, and scores
    var theWins = $(".wins");
    var theLosses = $(".losses");
    var theScore = $(".score");
    //update html text of wins and losses
    theWins.text("Wins: " +gameData.wins);
    theLosses.text("Losses: " +gameData.wins);

    //show the random number on the screen
    theRandomNumber.text("Random Number: " + gameData.randomNumber);

    //if the user clicks on image0,1,2,3
    //update the total score
    //check to see if the user wins
    //update the random number text, losses, and wins
    img0.on("click", function(){
        gameData.userPick = gameData.userPick + gameData.money0;
        theScore.text(gameData.userPick);
        gameData.didUserWin(gameData.userPick);
        theRandomNumber.text("Random Number: " + gameData.randomNumber);        theWins.text("Wins: " +gameData.wins);
        theLosses.text("Losses: " +gameData.losses);
        theScore.text(gameData.userPick);

    });

    img1.on("click", function(){
        gameData.userPick = gameData.userPick + gameData.money1;
        theScore.text(gameData.userPick);
        gameData.didUserWin(gameData.userPick);
        theRandomNumber.text("Random Number: " + gameData.randomNumber);
        theWins.text("Wins: " +gameData.wins);
        theLosses.text("Losses: " +gameData.losses);
        theScore.text(gameData.userPick);

    });

    img2.on("click", function(){
        gameData.userPick = gameData.userPick + gameData.money2;
        theScore.text(gameData.userPick);
        gameData.didUserWin(gameData.userPick);
        theRandomNumber.text("Random Number: " + gameData.randomNumber);
        theWins.text("Wins: " +gameData.wins);
        theLosses.text("Losses: " +gameData.losses);
        theScore.text(gameData.userPick);

    });

    img3.on("click", function(){
        gameData.userPick = gameData.userPick + gameData.money3;
        theScore.text(gameData.userPick);
        gameData.didUserWin(gameData.userPick);
        theRandomNumber.text("Random Number: " + gameData.randomNumber);
        theWins.text("Wins: " +gameData.wins);
        theLosses.text("Losses: " +gameData.losses);
        theScore.text(gameData.userPick);
    });
    

});







