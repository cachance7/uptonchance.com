#!/bin/bash

docker build . -t uptonchance.com
docker run \
  -it \
  --rm \
  --name uptonchance.com \
  -p 8000:8000 \
  -v $(pwd)/src:/app/src \
  uptonchance.com yarn run develop
