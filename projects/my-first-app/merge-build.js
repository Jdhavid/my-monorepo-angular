const concat = require('concat');
const files = [
    './dist/my-first-app/runtime.js',
    './dist/my-first-app/polyfills.js',
    './dist/my-first-app/main.js'
];

concat(files, './dist/my-first-app/first-elements.js');