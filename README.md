# e2e-selenium-testing

Example case of using Docker Compose to test a dockerized application. In this case, I am using the [Elm-based Todo MVC app](https://github.com/evancz/elm-todomvc) by evancz. 

## Usage

#### Step 1

Make sure you have Docker installed!

#### Step 2

Use Docker Compose to spin up all 4 containers and have them run the tests. Check out the `docker-compose.yml` file to see what these containers are. You can do this with the following command:

```
docker-compose up
```

At this point, you can also access the hosted instance of the app, hosted on port `8000` of your docker machine. In most cases this is just http://localhost:8000/index.html, but if that doesn't work it's likely your docker-machine is hosted elsewhere.

#### Step 3

Watch the tests run! After they have finished, you can view the results via the `testing` container's port 1337. If you are running `Docker Desktop` it is likely your docker machine can be accessed via `localhost`, so you can go to http://localhost:1337/mochawesome-report/mochawesome.html to view the results.
