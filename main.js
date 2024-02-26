const fs = require('fs');
const nodeCMD = require('node-cmd');
const keywords = require('./settings.json');

fs.readFile('./convert/code.pjs', 'utf-8', function read(err, content) {
    if (err) {
        throw err;
    }

    Object.keys(keywords).forEach((key) => {
        const regex = new RegExp(`(?<!["'\`])\\b(${key})\\b(?!["'\`])`, 'g');
        content = content.replace(regex, keywords[key].replace);
    });

    fs.writeFileSync('./build/main.js', content);

    nodeCMD.run('node ./build/main.js', function(err, data) {
        if (err) {
            console.log(err);
            return
        }
        console.log(data);
    });
});
