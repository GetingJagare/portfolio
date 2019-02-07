#!/usr/bin/env bash

npm install --only-prod

git fetch
git merge origin/master

pm2 stop index.js
pm2 start index.js