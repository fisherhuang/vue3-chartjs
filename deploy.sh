#!/usr/bin/env sh

set -env

yarn run build:sample

cd docs

git init 
git checkout -b main
git add -add
git commit -m "deploy"
git push -f https://github.com/fisherhuang/vue3-chartjs.git main:gh-pages

cd --