var election = function(name, partyColour)
{
var politician = {};
politician.name = name;
politician.partyColour = partyColour;
politician.electionResults = null;
politician.totalVotes = 0;
politician.tallyTotalVotes = function (){
  this.totalVotes = 0;
  for (var i = 0; i < this.electionResults.length; i++){
  this.totalVotes += this.electionResults[i];
  }
};
  return politician;
};

var mario = election("Mario", [254, 19, 15]);
var luigi = election("Luigi", [19, 147, 52]);

console.log("mario's party colour is " + mario.partyColour);
console.log("luigi's party colour is " + luigi.partyColour);

mario.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];
luigi.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

mario.electionResults[9]=1;
mario.electionResults[4]=17;
mario.electionResults[43]=11;

luigi.electionResults[9]=28;
luigi.electionResults[4]=38;
luigi.electionResults[43]=27;


mario.tallyTotalVotes();
luigi.tallyTotalVotes();
console.log(mario.name + " has " + mario.totalVotes + " total votes.");
console.log(luigi.name + " has " + luigi.totalVotes + " total votes.");


var setStateResults = function(state){
  theStates[state].winner = null;

if (mario.electionResults[state] > luigi.electionResults[state]){
   theStates[state].winner = mario;

}else if (luigi.electionResults[state] > mario.electionResults[state]){
    theStates[state].winner = luigi;
}stateName.innerText = theStates[state].nameFull;
abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";

candidate1Name.innerText = mario.name;
candidate2Name.innerText = luigi.name;

candidate1Results.innerText = mario.electionResults[state];
candidate2Results.innerText = luigi.electionResults[state];

if (theStates[state].winner === null){
winnersName.innerText = "DRAW";
} else {
winnersName.innerText = theStates[state].winner.name;
}
  var stateWinner = theStates[state].winner;

  if (stateWinner !== null){
  theStates[state].rgbColor = stateWinner.partyColour;
  }else (theStates[state].rgbColor = [11, 32, 57]);

};

var winner = "Race";

if (mario.totalVotes > luigi.totalVotes){
  winner = mario.name;
} else if (luigi.totalVotes > mario.totalVotes){
    winner = luigi.name;
}else{
  winner = "The race has ended in a draw!"

  }

console.log("Our new president is..." + winner + "!!!");

var table = document.getElementById('countryResults');

var row = table.children[0].children[0];

row.children[0].innerText = mario.name;
row.children[1].innerText = mario.totalVotes;
row.children[2].innerText = luigi.name;
row.children[3].innerText = luigi.totalVotes;
row.children[4].innerText = "Winner:";
row.children[5].innerText = winner;


var stateInfoTable = document.getElementById('stateResults');

var header = stateInfoTable.children[0];
var body = stateInfoTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var candidate1Name = body.children[0].children[0];
var candidate2Name = body.children[1].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Results = body.children[1].children[1];
var winnersName = body.children[2].children[1];
