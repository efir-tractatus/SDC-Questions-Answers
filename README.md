# Questions & Answers Service API

> A simple GraphQL API to serve data to a Q&A component of a front-end retail portal

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Performance](#performance)
- [Status](#status)
- [Created by](#created-by)

## General info

## Technologies

- Node.js - version 14.5.2
- Apollo-Server-Express - version 2.19.1
- GraphQL - version 15.4
- Mongoose - version 5.11.8
- MongoDB - version 4.4.2
- Docker - version 20.10.1
- Docker-Compose - version 1.27.4

## Setup

Create _.env_ file in the root directory with the following variables:

- PORT: The port through which our API will listen to calls
- URL: The database URL in the following form
  - `mongodb://localhost:27017/DB_NAME` - If running with '**npm start**' command
  - `mongodb://DB_USER:DB_PASSWORD@mongo_qa:27017/DB_NAME` - If running with '**docker-compose up -d**' command
- DB_USER: Defines root database user on first run
- DB_PASSWORD: Defines root database password on first run

After creating the _.env_ file, execute the following commands from the console:

- **npm install** to install project dependencies
- **npm start** to instantiate the service locally  
  _or_
- **docker-copose up -d** to instantiate docker containers for server and database

## Performance

## Status

Project is: _finished_

## Created by

[Denis Sanches](https://github.com/efir-tractatus) - feel free to get in touch!
