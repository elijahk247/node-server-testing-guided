# Node Server Testing Guided Project

Guided project for **Node Server Testing** Module.

## Project Setup

- [ ] fork and clone this repository.
- [ ] **CD into the folder** where you cloned **your fork**.
- [ ] type `npm i` to download dependencies.
- [ ] type `npm run server` to start the API.

Please follow along as the instructor adds automated tests to the API.


## Testing an API
- run the server on a port
- make a request to the endpoint (may or may not include data)
- inspect the results to see if its what i expected 

- Jest will default to running the code in an envrionment similar to a web browser
- for testing node servers, we need to change that option

## Configuring Jest
- "jest": {
    "testEnvironment": "node"
  }