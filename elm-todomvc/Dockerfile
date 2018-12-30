FROM node:9.3.0
LABEL author="Taylor Brooks (github @ SwiftEngineer)"
LABEL description="For use in building, testing, and deploying the elm application"

RUN yarn global add elm@0.19.0-bugfix2 \
 && yarn global add elm-test@latest

COPY . /app
WORKDIR /app

RUN elm make src/Main.elm --output=elm.js

CMD ["elm", "reactor"]