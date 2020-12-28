# Questions & Answers Service API

> A simple GraphQL API to serve data to a Q&A component of a front-end retail portal

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Features](#features)
- [Status](#status)
- [Contact](#contact)

## General info

## Technologies

- Node.js - version 14.5.2
- Apollo-Server-Express - version 2.18.2
- GraphQL - version 15.3
- Mongoose - version 5.10.9
- MongoDB - version 4.4.2

## Setup

Create _.env_ file in the root directory with the following variables:

- PORT: The port through which our API will listen to calls
- URL: The database URL in the following form
  - `mongodb://localhost:27017/DB_NAME` - If running with '**npm start**' command
  - `mongodb://DB_USER:DB_PASSWORD@mongo_qa:27017/_DB_NAME_` - If running with '**docker-compose up -d**' command
- DB_USER: Defines root database user on first run
- DB_PASSWORD: Defines root database password on first run

## Features

List of features ready and TODOs for future development

- Awesome feature 1
- Awesome feature 2
- Awesome feature 3

## Status

Project is: _finished_

## Contact

Created by [Denis Sanches](https://github.com/efir-tractatus) - feel free to contact me!
