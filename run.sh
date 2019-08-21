#!/bin/bash
npm install
mkdir gitRespo
node gitClone.js
node jsDoc.js
for folder in gitRespo/*
do
    cd $folder
    cd Jsdoc_gen
    chmod 777 docs.sh
    ./docs.sh
done
