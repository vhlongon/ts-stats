import { DataType, MatchDataType, MatchResultType } from './types';
import { dateStringToDate } from './utils';

const readMatch = (data: DataType): MatchDataType[] =>
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

export default readMatch;
