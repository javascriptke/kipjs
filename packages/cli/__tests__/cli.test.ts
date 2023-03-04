const assert = require('assert').strict;
const cli = require('..');

assert.strictEqual(cli(), 'Hello from cli');
console.info('cli tests passed');
