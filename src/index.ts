import readFile from './readFile';
import { MatchResult, MatchData } from './types';

const matches = readFile('football.csv');

const winsForTeam = (teamName: string, data: MatchData[]): number =>
  data.reduce((acc: number, val: MatchData): number => {
    const [, homeTeam, awayTeam, , , winner] = val;
    const winnerHome = homeTeam === teamName && winner === MatchResult.HomeWin;
    const winnerAway = awayTeam === teamName && winner === MatchResult.AwayWin;
    return winnerHome || winnerAway ? acc + 1 : acc;
  }, 0);

const winsForManUnited = winsForTeam('Man United', matches);

console.log(`Man United won ${winsForManUnited} games`);
