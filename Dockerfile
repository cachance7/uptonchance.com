FROM node:10

WORKDIR /app
RUN yarn global add gatsby-cli

RUN mkdir ~/.ssh && echo "Host github.com\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config
ADD package.json .
RUN yarn install

RUN yarn global add http-server
ADD . .
RUN yarn build
RUN cd public
CMD http-server -p 8000
