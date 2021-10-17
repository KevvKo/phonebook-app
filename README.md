# phonebook-app
## Table of contents
- [phonebook-app](#phonebook-app)
  - [Table of contents](#table-of-contents)
  - [Tech Stack](#tech-stack)
  - [Getting started](#getting-started)
  - [Alternative Setup](#alternative-setup)
    - [From the Root of the Project](#from-the-root-of-the-project)
    - [Inside the sub-projects](#inside-the-sub-projects)
  - [Docker](#docker)
  - [Available scripts](#available-scripts)
    - [`npm start`](#npm-start)
    - [`npm install`](#npm-install)
    - [`npm serve`](#npm-serve)
    - [`npm build`](#npm-build)
    - [`npm client:start`](#npm-clientstart)
    - [`npm api:start`](#npm-apistart)
  - [Github](#github)
## Tech Stack
- React
- Apollo-Server
- GraphQL
- Docker
- Jest
## Getting started
To run this app at the first time

**Install Dependencys**
```
npm install
```
**Run the docker container**
```
npm start
```
Visit the [ Userinterface ](http://localhost:3000/)
To play with the GraphQL schema, visit [Playground](http://localhost:4000)
## Alternative Setup
If you are have some trouble with docker or something else, you can run the App alternatively:
### From the Root of the Project
**Client:**
```
npm run client:start
```
**API:**
```
npm run api:start
```

### Inside the sub-projects
Go into **/client** and run 
```
yarn start
```
go also into **/api** and run 
```
npm start
```

**Hint:** Do not forget to install the dependencys is the respective directory

After this structures, you can use the phonebook-app:

- [Userinterface](http://localhost:3000/)
- [Playground](http://localhost:4000)

## Docker
Like above described, to run the app, you can use docker.
Sometimes it is necessary to run the docker commands as root.

Starts docker-compose with a new build `docker-compose up --build`

Building the docker image: `docker-compose build` or run


Startsthe docker container `docker-compose up` or run

## Available scripts
### `npm start`
Starts to build the app with docker-compose and starting the container
### `npm install`
Installs all dependencsys in **/client** and **/api**
### `npm serve`
Start the docker container
### `npm build`
Build the docker image
### `npm client:start`
Runs the client without docker on [Localhost:3000](http://localhost:3000/)
### `npm api:start`
Runs the server without docker on [Localhost:4000](http://localhost:4000/)
## Github
Visit the [Repository phonebook-app](https://github.com/KevvKo/phonebook-app) on Github.