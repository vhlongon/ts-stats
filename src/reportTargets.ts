import { writeFileSync } from 'fs';
import { OutputTargetType } from './types';

export const printToConsole: OutputTargetType = (report) => {
  console.log(report);
};

export const printToHtml: OutputTargetType = (report) => {
  const html = `
  <div>
  <h1>Analysis Output</h1>
  <div>${report}</div>
  </div>`;

  writeFileSync('report.html', html);
};
