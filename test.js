const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const js = fs.readFileSync('script.js', 'utf8');

if (!html.includes('id="testBtn"')) throw new Error('Button missing');
if (!html.includes('style.css')) throw new Error('CSS not linked');
if (!js.includes('addEventListener')) throw new Error('Click handler missing');
console.log('Test Passed');