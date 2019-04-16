#!/bin/bash

docker build . -t uptonchance.com
docker run \
  -it \
  --rm \
  --name uptonchance.com \
  -p 8000:8000 \
  -v $(pwd)/src:/app/src \
  -v $(pwd)/data:/app/data \
  uptonchance.com yarn run develop
