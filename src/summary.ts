import { OutputTargetType } from './types';

const getSummary = (input: string, outputTo: OutputTargetType) => {
  outputTo(input);
};

export default getSummary;
