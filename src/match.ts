import { DataType, MatchDataType, MatchResultType } from './types';
import { dateStringToDate } from './utils';

export const readMatch = (data: DataType): MatchDataType[] =>
  data.map(
    (row: string[]): MatchDataType => {
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
        matchResult as MatchResultType,
        referee,
      ];
    }
  );

export const winsForTeam = (teamName: string, data: MatchDataType[]): number =>
  data.reduce((acc: number, val: MatchDataType): number => {
    const [, homeTeam, awayTeam, , , winner] = val;
    const winnerHome =
      homeTeam === teamName && winner === MatchResultType.HomeWin;
    const winnerAway =
      awayTeam === teamName && winner === MatchResultType.AwayWin;
    return winnerHome || winnerAway ? acc + 1 : acc;
  }, 0);
