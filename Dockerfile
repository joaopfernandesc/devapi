FROM node:14-alpine
RUN mkdir  /code
WORKDIR /code
ADD . /code

COPY package.json yarn.lock ./
RUN npm install -g yarn --force && \
    yarn

CMD [ "sh", "dockerEntrypoint.sh" ]
EXPOSE 3000
