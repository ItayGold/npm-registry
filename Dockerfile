FROM ubuntu:16.04

# Install dependencies
RUN apt-get update

#Get the latest docker verdaccio
RUN docker pull verdaccio/verdaccio

#Run docker & provide npm registry service
RUN docker run -it --rm --name verdaccio -p 4873:4873 verdaccio/verdaccio