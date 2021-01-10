// enum - enumaration - used for closely related values
// when we have a small fixed set of values known at compile time
export enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

// here we use a tuple to annotate the structure of a row in the data set
// the corresponds to the information of a specific match
export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];
