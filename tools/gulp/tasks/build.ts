import { task, dest, src } from 'gulp';
import ts from 'gulp-typescript';
import alias from 'gulp-ts-alias';
import sourcemaps from 'gulp-sourcemaps';
import merge from 'merge2';

const tscProject = ts.createProject('tsconfig.json');

const build = () => {
  const srcFolders = src(['packages/**/*.ts', '!packages/**/*.spec.ts', '!packages/**/*test.ts'])

  const compiled = srcFolders
    .pipe(alias(tscProject.config.compilerOptions))
    .pipe(sourcemaps.init())
    .pipe(tscProject());

    const dtsFiles =  compiled.dts.pipe(dest('dist'));

  const compiledJs = compiled.js
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist'));
  

  return merge([compiledJs, dtsFiles]);
};

task('build', build);
