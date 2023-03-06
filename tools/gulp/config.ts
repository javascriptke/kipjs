import { getDirs } from './helper';

const source = 'packages';

export const sourcePaths = getDirs(source);
export const rootPaths = getDirs('.');
