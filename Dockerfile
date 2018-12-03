from node:8
ENV http_proxy http://proxy.jus.gob.ar:8080
ENV https_proxy http://proxy.jus.gob.ar:8080
WORKDIR /usr/src/app
COPY . . 
RUN npm install
CMD ['npm', 'start']
