#!/bin/bash

docker build . -t uptonchance.com
docker run \
  -it \
  --rm \
  --name uptonchance.com \
  --net host \
  uptonchance.com
