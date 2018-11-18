#!/bin/bash
sudo apt-get update
sudo apt-get install xsel
npm i -g now
now login federicomoyamartin@gmail.com
cd api
now --public --token=$NOW_TOKEN
API_DEPLOY_URL=`xsel -ob` && export API_DEPLOY_URL
now alias $API_DEPLOY_URL go-barter-api
cd ..
cd web
now --public --token=$NOW_TOKEN
WEB_DEPLOY_URL=`xsel -ob` && export WEB_DEPLOY_URL
now alias $WEB_DEPLOY_URL go-barter