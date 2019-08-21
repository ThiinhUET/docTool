#!/bin/bash
npm install
node gitClone.js
node jsDoc.js
for folder in gitRespo/*
do
    echo $folder
    chmod 777 $folder
    cd $folder
    cd Jsdoc_gen
    ./docs.sh
done