import { printToConsole, printToHtml } from './reportTargets';
import readFile from './readFile';
import readMatch from './matchReader';
import { getWinsForTeam, getLossesForTeam, getDrawsForTeam } from './analysers';
import getSummary from './summary';

const data = readFile('football.csv');
const matches = readMatch(data);
const winsForTeam = getWinsForTeam('Man United', matches);
const lossesForTeam = getLossesForTeam('Man United', matches);
const drawsForTeam = getDrawsForTeam('Man United', matches);

// print a team wins to console
getSummary(winsForTeam, printToConsole);

// print a team losses to console
getSummary(lossesForTeam, printToConsole);

// print a team draws to console
getSummary(drawsForTeam, printToConsole);

// generate html file for team wins
getSummary(winsForTeam, printToHtml);
