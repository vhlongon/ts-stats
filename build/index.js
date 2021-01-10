"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var matches = fs_1.readFileSync('football.csv', { encoding: 'utf-8' })
    .split('\n')
    .map(function (row) { return row.split(','); });
// enum - enumaration - used for closely related values
// when we have a small fixed set of values known at compile time
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
var winsForManUnited = matches.reduce(function (acc, val) {
    var homeTeam = val[1], awayTeam = val[2], winner = val[5];
    var winnerHome = homeTeam === 'Man United' && winner === MatchResult.HomeWin;
    var winnerAway = awayTeam === 'Man United' && winner === MatchResult.AwayWin;
    return winnerHome || winnerAway ? acc + 1 : acc;
}, 0);
console.log("Man United won " + winsForManUnited + " games");
