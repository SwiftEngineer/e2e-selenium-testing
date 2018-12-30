FROM node:9.3.0
LABEL author="Taylor Brooks (github @ SwiftEngineer)"
LABEL description="For use in building, testing, and deploying the elm application"

RUN npm install -g mocha

COPY . /app
WORKDIR /app

RUN npm install

CMD ["mocha", "runner.js"]