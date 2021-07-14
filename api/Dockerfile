FROM node:14.17.3
# ENV NODE_ENV=develop
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
# EXPOSE 3000
CMD ["npm", "start" ]
