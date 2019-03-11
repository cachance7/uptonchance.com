FROM node:10

WORKDIR /app
RUN yarn global add gatsby-cli

ADD package.json .
RUN yarn install

RUN yarn global add http-server
ADD . .
RUN yarn build
RUN cd public
CMD http-server -p 8000
