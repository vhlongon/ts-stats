import { readFileSync } from 'fs';

const matches = readFileSync('football.csv', { encoding: 'utf-8' })
  .split('\n')
  .map((row: string): string[] => row.split(','));

// enum - enumaration - used for closely related values
// when we have a small fixed set of values known at compile time
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

const winsForManUnited = matches.reduce(
  (acc: number, val: string[]): number => {
    const [, homeTeam, awayTeam, , , winner] = val;
    const winnerHome =
      homeTeam === 'Man United' && winner === MatchResult.HomeWin;
    const winnerAway =
      awayTeam === 'Man United' && winner === MatchResult.AwayWin;
    return winnerHome || winnerAway ? acc + 1 : acc;
  },
  0
);

console.log(`Man United won ${winsForManUnited} games`);
