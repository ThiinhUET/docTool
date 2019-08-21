const git = require('simple-git');
const Promise = require('promise');
const config = require('config');
var gitRespo = config.get('gitRepo');

const path = './gitRespo';

function cloneSubGit(str) {

    let tmp = path + "/" + str;
    git(tmp).clone(jsDoc_gen);
}

function cloneMainRepo(repo, cb) {
    git(path).clone(repo);
    cb();
}



function cloneGit(repo) {
    return new Promise(function (resolve, reject) {
        setTimeout(cloneMainRepo(repo, () => {
            let str = repo.slice(29);
            cloneSubGit(str);
        }), 120000);

    })
}


for (let i = 0; i < gitRespo.length; i++) {
    console.log("checking out " + gitRespo[i]);
    cloneGit(gitRespo[i]);
} 