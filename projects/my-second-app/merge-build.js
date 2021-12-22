const concat = require('concat');
const files = [
    './dist/my-second-app/runtime.js',
    './dist/my-second-app/polyfills.js',
    './dist/my-second-app/main.js'
];

concat(files, './dist/my-second-app/second-elements.js');