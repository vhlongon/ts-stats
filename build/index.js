"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var matches = fs_1.readFileSync('football.csv', { encoding: 'utf-8' })
    .split('\n')
    .map(function (row) {
    return row.split(',');
});
console.log(matches);
