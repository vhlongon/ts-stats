import { MatchData, MatchResult } from './types';
import { readFileSync } from 'fs';
import { dateStringToDate } from './utils';

const readFile = (fileName: string): MatchData[] =>
  readFileSync(fileName, { encoding: 'utf-8' })
    .split('\n')
    .map((row: string): string[] => row.split(','))
    .map(
      (row: string[]): MatchData => {
        const [
          matchDate,
          homeTeam,
          awayTeam,
          homeGoals,
          awayGoals,
          matchResult,
          referee,
        ] = row;

        return [
          dateStringToDate(matchDate),
          homeTeam,
          awayTeam,
          parseInt(homeGoals),
          parseInt(awayGoals),
          // this is a type assertion, i.e.
          // it tells ts that the result HAS to be one of the options defined in the enum instead of any string
          matchResult as MatchResult,
          referee,
        ];
      }
    );

export default readFile;
