const path = require('path');
const gulp = require('gulp');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');

const projectDir = __dirname;
const tsconfigPath = path.join(projectDir, 'tools/gulp/tsconfig.json');

ts.createProject('tsconfig.json', { declaration: true, declarationFiles: true });

require('ts-node').register({
  project: tsconfigPath
});

require('./tools/gulp/gulpfile');
