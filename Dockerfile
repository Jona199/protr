FROM phusion/baseimage
MAINTAINER Maciej Krawczyk <m.krawczyk@easysend.pl>

CMD ["/sbin/my_init"]

RUN apt-get clean && apt-get update
RUN apt-get -y install python-software-properties software-properties-common make curl git build-essential
RUN apt-get remove debian-keyring debian-archive-keyring

RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash
ENV NODE_VERSION 5.1.0
ENV NVM_DIR /root/.nvm
RUN . ~/.nvm/nvm.sh && nvm install $NODE_VERSION

WORKDIR /home/easysend
