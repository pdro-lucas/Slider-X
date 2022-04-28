<p align="center">
  <img src="./Frame.svg" width="300" />
</p>

# &middot; SliderX &middot; 
![Repo Size](https://img.shields.io/github/repo-size/pdro-lucas/SliderX) ![version](https://img.shields.io/github/package-json/v/pdro-lucas/sliderx) ![License](https://img.shields.io/github/license/pdro-lucas/sliderx)


### Table of contents

- [General info](#general-info)
- [Developing](#developing)
  - [Created with](#project-is-created-with)
- [Setting up](#setting-up)
  - [Set credentials](#set-credentials)
  - [Storage type](#storage-type)
- [Style guide](#style-guide)
- [Api Reference](#api-reference)
- [Database](#database)
- [Contribute](#how-to-contribute)


### General info

This project is simple API to send images and save them in a MYSQL database.
SliderX has an integration with AWS S3 to save the images.

> Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance.
> Customers of all sizes and industries can use Amazon S3 to store and protect any amount of data for a range of use cases, such as data lakes, websites, mobile applications, backup and restore, archive, enterprise applications, IoT devices, and big data analytics.

SliderX has an interface to interact with the data in the database but you can use the API on your own.


### Developing

#### Project is created with:

- [ExpressJS](https://expressjs.com/): 4.17.3
- [Express session](https://github.com/expressjs/session): 1.17.2
- [Express-mysql-session](https://github.com/chill117/express-mysql-session): 2.1.7
- [Node mysql](https://github.com/mysqljs/mysql): 2.18.1
- [EJS](https://ejs.co/): 3.1.6
- [Multer](https://github.com/expressjs/multer): 1.4.4
- [Multer-s3](https://github.com/anacronw/multer-s3): 2.10.0
- [Amazon sdk](https://github.com/aws/aws-sdk-js): 2.1112.0


#### Prerequisites

- [NodeJS](https://nodejs.org/en/) version 16.x
- [AWS account](https://aws.amazon.com/) ( Optional )


### Style guide

This is the basic structure of the project

```sh
.
├── app.js
├── lib/
│   ├── controllers/
│   ├── database/
│   │   ├── connect.js
│   │   └── createTables.sql
│   ├── middleware/
│   ├── pages/
│   ├── routes/
│   └── utils/
├── public/
├── views/
│   ├── components/
│   ├── partials/
└── yarn.lock
```

The **_app.js_** file is the main file of project. This defines all ExpressJs settings.

The **_lib/controllers/**_ folder contains all api actions.

In **_lib/database/**_ folder you can find the database connection and the create tables script.

The **_lib/middleware/_** folder contains all middleware functions.

The **_lib/pages/_** folder contains all functions to render pages.

The **_lib/routes/_** folder contains all routes. The routes are separated in two ways: API routes and page routes. Page routes are the routes that are used to render pages. API routes are the routes that are used to handle api requests.

In the **_views/_** folder you can find all the views. The views use components to separate the html code. The components are located in **_views/components/_** folder.

### Setting up

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


#### Set credentials

The most important file is the `.env`. It saves all credentials and important settings for SliderX.
To set the required credentials, rename the `.env.example` file to `.env` and replace the values

#### Storage type

There are two ways to save the image, in Amazon s3 bucket or locally. To define which one you want use, inform storage type in `.env` file


### Api Reference
If the api is external, link to api documentation. If not describe your api including authentication methods as well as explaining all the endpoints with their required parameters.


### Database
Explaining what database (and version) has been used. Provide download links. Documents your database design and schemas, relations etc...


### How to contribute?
This is a completely free project that accepts contributions via pull requests on GitHub.

#### First steps

1. Fork this repository
2. Submit your commits to the repository
3. Open a pull request
4. Enter a short description of your changes


<br/>
<br/>

<p align="center">MIT License - Copyright (c) 2022 <a href="https://github.com/pdro-lucas">Pedro Lucas</a></p>
