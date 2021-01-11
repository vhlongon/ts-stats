// enum - enumaration - used for closely related values
// when we have a small fixed set of values known at compile time
export enum MatchResultType {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

// here we use a tuple to annotate the structure of a row in the data set
// the corresponds to the information of a specific match
export type MatchDataType = [
  Date,
  string,
  string,
  number,
  number,
  MatchResultType,
  string
];

export type DataType = string[][];

export type AnalyserType = (teamName: string, data: MatchDataType[]) => string;

export type OutputTargetType = (report: string) => void;

export type AnalyserReducerType = (acc: number, val: MatchDataType) => number;
