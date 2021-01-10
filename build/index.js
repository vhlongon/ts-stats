"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var readFile = function (fileName) {
    return fs_1.readFileSync(fileName, { encoding: 'utf-8' })
        .split('\n')
        .map(function (row) { return row.split(','); });
};
var matches = readFile('football.csv');
// enum - enumaration - used for closely related values
// when we have a small fixed set of values known at compile time
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
var winsForTeam = function (teamName, data) {
    return data.reduce(function (acc, val) {
        var homeTeam = val[1], awayTeam = val[2], winner = val[5];
        var winnerHome = homeTeam === teamName && winner === MatchResult.HomeWin;
        var winnerAway = awayTeam === teamName && winner === MatchResult.AwayWin;
        return winnerHome || winnerAway ? acc + 1 : acc;
    }, 0);
};
var winsForManUnited = winsForTeam('Man United', matches);
console.log("Man United won " + winsForManUnited + " games");
