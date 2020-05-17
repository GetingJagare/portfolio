#!/usr/bin/env bash

git fetch
git merge origin/master

npm install --only-prod

pm2 stop index.js
pm2 start index.js --watch