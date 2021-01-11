import readFile from './readFile';
import { readMatch, winsForTeam } from './match';

const data = readFile('football.csv');
const matches = readMatch(data);

const winsForManUnited = winsForTeam('Man United', matches);

console.log(`Man United won ${winsForManUnited} games`);
