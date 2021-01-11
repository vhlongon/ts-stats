import { AnalyserType, MatchDataType, MatchResultType } from './types';

export const getWinsForTeam: AnalyserType = (
  teamName: string,
  data: MatchDataType[]
): string => {
  const wins = data.reduce((acc: number, val: MatchDataType): number => {
    const [, homeTeam, awayTeam, , , winner] = val;
    const winnerHome =
      homeTeam === teamName && winner === MatchResultType.HomeWin;
    const winnerAway =
      awayTeam === teamName && winner === MatchResultType.AwayWin;
    return winnerHome || winnerAway ? acc + 1 : acc;
  }, 0);

  return `${teamName} won ${wins} games`;
};

export const getLossesForTeam: AnalyserType = (
  teamName: string,
  data: MatchDataType[]
): string => {
  const losses = data.reduce((acc: number, val: MatchDataType): number => {
    const [, homeTeam, awayTeam, , , winner] = val;
    const loserHome =
      homeTeam === teamName && winner === MatchResultType.AwayWin;
    const loserAway =
      awayTeam === teamName && winner === MatchResultType.HomeWin;
    return loserHome || loserAway ? acc + 1 : acc;
  }, 0);

  return `${teamName} lost ${losses} games`;
};

export const getDrawsForTeam: AnalyserType = (
  teamName: string,
  data: MatchDataType[]
): string => {
  const draws = data.reduce((acc: number, val: MatchDataType): number => {
    const [, homeTeam, awayTeam, , , winner] = val;
    const draw =
      homeTeam === teamName || awayTeam === teamName && winner === MatchResultType.Draw;
    
    return draw ? acc + 1 : acc;
  }, 0);

  return `${teamName} had ${draws} draw games`;
};
