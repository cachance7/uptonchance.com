#!/bin/bash

source .env

docker build . -t uptonchance.com
if [[ $APP_ENV == "prod" ]]; then
  docker run \
    -it \
    --rm \
    --name uptonchance.com \
    -p 8000:8000 \
    -v $(pwd)/src:/app/src \
    -v $(pwd)/data:/app/data \
    -v $(pwd)/gatsby-config.js:/app/gatsby-config.js \
    uptonchance.com
else
  docker run \
    -it \
    --rm \
    --name uptonchance.com \
    -p 8000:8000 \
    -v $(pwd)/src:/app/src \
    -v $(pwd)/data:/app/data \
    -v $(pwd)/gatsby-config.js:/app/gatsby-config.js \
    uptonchance.com \
    npm run develop
fi
