# e2e-selenium-testing

Example case of using Docker Compose to test an application.

## Usage

**Step 1:**
Make sure you have Docker installed!

**Step 2:**
Use Docker Compose to spin up all 4 containers and have them run the tests. Check out the `docker-compose.yml` file to see what these containers are. You can do this with the following command:

```
docker-compose up
```

**Step 3:**
Watch the tests run! After they have finished, you can view the results via the `testing` container's port 1337. If you are running `Docker Desktop` it is likely your docker machine can be accessed via `localhost`, so you can go to http://localhost:1337/mochawesome-report/mochawesome.html to view the results.
