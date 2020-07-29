FROM node:12
RUN groupadd -g 999 appuser && useradd --create-home -r -u 999 -g appuser appuser
RUN apt-get update && apt-get install python g++ make
WORKDIR /home/appuser/app
RUN chown appuser:appuser -R .
EXPOSE 8080
USER appuser
COPY package.json ./
RUN npm install
COPY src ./src
ENTRYPOINT ["npm", "start"]
