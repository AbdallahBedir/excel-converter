# Dockerfile

# Use this command to build fe docker image
# docker build -f build/Dockerfile -t e3:fe .

# Use this command to run fe docker container in foreground
# docker run --name e3_fe -p 4000:4000 e3:fe

# Use this command to run fe docker container in background
# docker run --name e3_fe -d e3:fe

# Use this command to connect to the running fe docker container
# docker exec -it e3_fe /bin/sh

# Use this command to install curl on your running fe docker container (after connecting to it)
# apk add curl

# base image
FROM node:14.15.1-alpine3.11

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# copy source files
COPY . /usr/src

# install dependencies
RUN yarn install

# build app
RUN yarn build

# start app
CMD yarn start