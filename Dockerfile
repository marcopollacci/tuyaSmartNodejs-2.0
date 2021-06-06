FROM node:16.3.0-stretch-slim

ENV TZ=Europe/Rome

RUN apt-get update && apt-get -y upgrade && apt-get -y dist-upgrade && apt-get install -y libaio1 && apt-get install -y procps && \
    apt-get -y autoremove && apt-get -y clean && \
    ldconfig
