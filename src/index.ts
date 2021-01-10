import { readFileSync } from 'fs';

const readFile = (fileName: string): string[][] =>
  readFileSync(fileName, { encoding: 'utf-8' })
    .split('\n')
    .map((row: string): string[] => row.split(','));

const matches = readFile('football.csv');

// enum - enumaration - used for closely related values
// when we have a small fixed set of values known at compile time
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

const winsForTeam = (teamName: string, data: string[][]): number =>
  data.reduce((acc: number, val: string[]): number => {
    const [, homeTeam, awayTeam, , , winner] = val;
    const winnerHome = homeTeam === teamName && winner === MatchResult.HomeWin;
    const winnerAway = awayTeam === teamName && winner === MatchResult.AwayWin;
    return winnerHome || winnerAway ? acc + 1 : acc;
  }, 0);

const winsForManUnited = winsForTeam('Man United', matches);

console.log(`Man United won ${winsForManUnited} games`);
