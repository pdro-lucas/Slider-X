# SliderX &middot; ![Repo Size](https://img.shields.io/github/repo-size/pdro-lucas/SliderX) ![version](https://img.shields.io/github/package-json/v/pdro-lucas/sliderx) ![License](https://img.shields.io/github/license/pdro-lucas/sliderx)

<p align="center">
  <img src="./public/logo.svg" width="500">
</p>

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Installation](#installation)
- [Architecture](#architecture)

## General info

This project is simple image slider generator.

## Technologies

Project is created with:

- [ExpressJS](https://expressjs.com/): 4.17.3
- [Express session](https://github.com/expressjs/session): 1.17.2
- [Express-mysql-session](https://github.com/chill117/express-mysql-session): 2.1.7
- [Node mysql](https://github.com/mysqljs/mysql): 2.18.1
- [EJS](https://ejs.co/): 3.1.6
- [Multer](https://github.com/expressjs/multer): 1.4.4
- [Multer-s3](https://github.com/anacronw/multer-s3): 2.10.0
- [Amazon sdk](https://github.com/aws/aws-sdk-js): 2.1112.0

## Installation

To run this project, clone this github repo:

```
$ git clone https://github.com/pdro-lucas/SliderX.git
```

Then install all dependencies

```sh
$ cd SliderX
$ npm install
# or using yarn
$ yarn
```

## Architecture

```sh
.
├── app.js # The main file of the project (server)
├── lib/ # All backend source code (server)
│   ├── controllers/ # All controllers that handle requests
│   ├── database/ # Database connection and setup
│   ├── middleware/ # All middleware that handle requests
│   ├── pages/ # All pages that are rendered (client side)
│   ├── routes/ # Api and Pages routes
│   └── utils/ # All utils that are used in the project
├── public/ # All static files (client side)
├── views/ # All views that are rendered (client side)
│   ├── components/ # All components that are used in the project
│   ├── partials/ # All partials that are used in the project
```
