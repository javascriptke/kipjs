const assert = require('assert').strict;
const core = require('..');

assert.strictEqual(core(), 'Hello from core');
console.info('core tests passed');
