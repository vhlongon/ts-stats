import { readFileSync } from 'fs';

const matches = readFileSync('football.csv', { encoding: 'utf-8' })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });

console.log(matches);
