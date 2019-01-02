FROM node:9.3.0
LABEL author="Taylor Brooks (github @ SwiftEngineer)"
LABEL description="Container used for running tests against Todo app"

COPY . /app
WORKDIR /app

RUN npm install

CMD ["npm", "test"]