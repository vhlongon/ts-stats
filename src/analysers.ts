import { AnalyserType, MatchResultType, AnalyserReducerType } from './types';

export const getWinsForTeam: AnalyserType = (teamName, data) => {
  const getWins: AnalyserReducerType = (acc, val) => {
    const [, homeTeam, awayTeam, , , winner] = val;
    const winnerHome =
      homeTeam === teamName && winner === MatchResultType.HomeWin;
    const winnerAway =
      awayTeam === teamName && winner === MatchResultType.AwayWin;

    return winnerHome || winnerAway ? acc + 1 : acc;
  };

  const wins = data.reduce(getWins, 0);

  return `${teamName} won ${wins} games`;
};

export const getLossesForTeam: AnalyserType = (teamName, data) => {
  const getLosses: AnalyserReducerType = (acc, val) => {
    const [, homeTeam, awayTeam, , , winner] = val;
    const loserHome =
      homeTeam === teamName && winner === MatchResultType.AwayWin;
    const loserAway =
      awayTeam === teamName && winner === MatchResultType.HomeWin;

    return loserHome || loserAway ? acc + 1 : acc;
  };

  const losses = data.reduce(getLosses, 0);

  return `${teamName} lost ${losses} games`;
};

export const getDrawsForTeam: AnalyserType = (teamName, data) => {
  const getDraws: AnalyserReducerType = (acc, val) => {
    const [, homeTeam, awayTeam, , , winner] = val;
    const drawHome = homeTeam === teamName && winner === MatchResultType.Draw;
    const drawAway = awayTeam === teamName && winner === MatchResultType.Draw;

    return drawHome || drawAway ? acc + 1 : acc;
  };

  const draws = data.reduce(getDraws, 0);

  return `${teamName} had ${draws} draw games`;
};
