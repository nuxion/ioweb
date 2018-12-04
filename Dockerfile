from node:8-alpine
ENV http_proxy http://proxy.jus.gob.ar:8080
ENV https_proxy http://proxy.jus.gob.ar:8080
EXPOSE 3000
WORKDIR /usr/src/app
COPY . . 
RUN npm install
CMD ["npm", "start"]
