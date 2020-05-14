## Contents of this README file:

- Introduction
- Features Overview
- Installation

# Introduction

This repository is the serve of the Memory Game app.
This project uses Express server and Sequelize ORM.

## Features Overview

With this RESTful API, a user can:

- Retrieve a list of created games and the last created game
- Create a new game
- Check whether the player won or lost (with their answer)

## Installation

1. Start a Postgres database in a docker container with the following command:

   ```
   $ docker run --rm -e POSTGRES_PASSWORD=lepaya -p 5432:5432 postgres
   ```

To connect to the Database on a Mac you can use [Postico](https://eggerapps.at/postico/), on Linux - [DBeaver](https://dbeaver.io/)

2. Install the server and run it

   ```
   $ git clone
   $ cd ./memory-game-server
   $ npm install
   $ node . or nodemon .
   ```

3. Set up the front-end.

The repo including instructions can be found [here](https://github.com/dung-phan/memory-game-front).
