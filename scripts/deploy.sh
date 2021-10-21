#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m "deploy" &&
git branch -m master main &&
git remote add origin git@github.com:Afish-2020/dayToAccount-website.git &&
git push -u origin main -f
cd -