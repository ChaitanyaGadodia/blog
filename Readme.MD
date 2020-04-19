# Portfolio Website

## Setup

```
git clone https://github.com/ChaitanyaGadodia/blog.git
cd blog
yarn
yarn build; yarn start

go to http://localhost:3000/
```

## Deploy to github pages

```
yarn; yarn build; yarn export;
cd out
git init
touch .nojekyll
git add .
git commit -m "deploy"
git remote add origin https://github.com/ChaitanyaGadodia/chaitanyagadodia.github.io.git
git push -u origin master
```
