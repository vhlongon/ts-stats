import { readFileSync } from 'fs';
import { DataType } from './types';

const readFile = (fileName: string): DataType =>
  readFileSync(fileName, { encoding: 'utf-8' })
    .split('\n')
    .map((row: string): string[] => row.split(','));

export default readFile;
