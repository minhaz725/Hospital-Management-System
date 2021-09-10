# base image
FROM node:14.16-alpine
# set working directory
#RUN mkdir /usr/src/app 
 
WORKDIR /usr/src/app
RUN npm install -g @angular/cli
COPY . .
EXPOSE 4200
CMD ng serve --host 0.0.0.0

