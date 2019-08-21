const fs = require('fs');
const git = require('simple-git');
const path = './gitRespo';

var myJsdoc = 'https://github.com/ThiinhUET/Jsdoc_gen';

var files = fs.readdirSync(path);

for(let i = 0; i < files.length; i++){
    var dir = path + '/' + files[i];
    git(dir).clone(myJsdoc);
    console.log("Clone sub repo done !");
}
