<p align="center">
  <img src="./Frame.svg" width="300" />
</p>

# &middot; SliderX &middot; 
![Repo Size](https://img.shields.io/github/repo-size/pdro-lucas/SliderX) ![version](https://img.shields.io/github/package-json/v/pdro-lucas/sliderx) ![License](https://img.shields.io/github/license/pdro-lucas/sliderx)


### Table of contents

- [General info](#general-info)
  - [Created with](#project-created-with)
- [Setting up](#setting-up)
  - [Set credentials](#set-credentials)
  - [Storage type](#storage-type)
- [Style guide](#style-guide)
- [Api Reference](#api-reference)
- [Database](#database)
- [Contribute](#how-to-contribute)
- [To-do](#to-do)

### To-do
- [ ] Adicionar - Barra para indicar o tempo restante até que a imagem mude para a outra
- [x] Adicionar - Opção para o usuário escolher o tempo de transição das imagens
- [x] Adicionar - Uma opção para o usuário escolher se a descrição da imagem deve ou não aparecer
- [x] Adicionar - Modal para visualizar a imagem
- [x] Adicionar - SWR para recarregar os dados da página quando uma nova imagem for enviada
- [x] Adicionar - Sistema de prioridade. As imagens devem ter um sistema de prioridade para indicar qual é a posição da imagem no slide
- [x] Adicionar - Botões de navegação nas páginas que necessitam
- [x] Alterar - Os  campos de label devem ser adicionados novamente e incluir um asterisco para informar que o campo é obrigatório
- [x] Alterar - As imagens devem estar ativas por padrão
- [x] Alterar - Traduzir os elementos da página para o pt-BR

### General info

This project is simple API to send images and save them in a MYSQL database.
SliderX has an integration with AWS S3 to save the images.

> Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance.
> Customers of all sizes and industries can use Amazon S3 to store and protect any amount of data for a range of use cases, such as data lakes, websites, mobile applications, backup and restore, archive, enterprise applications, IoT devices, and big data analytics.

SliderX has an interface to interact with the data in the database but you can use only API on your own.

#### Project created with
| Package                                                                    | NPM                                                                                                                              |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| [ExpressJS](https://github.com/expressjs/express)                          | ![Version](https://img.shields.io/npm/v/express) ![Downloads](https://img.shields.io/npm/dm/express)                             |
| [Express session](https://github.com/expressjs/session)                    | ![Version](https://img.shields.io/npm/v/express-session) ![Downloads](https://img.shields.io/npm/dm/express-session)             |
| [Express-mysql-session](https://github.com/chill117/express-mysql-session) | ![Version](https://img.shields.io/npm/v/express-mysql-session) ![Downloads](https://img.shields.io/npm/dm/express-mysql-session) |
| [Node mysql](https://github.com/mysqljs/mysql)                             | ![Version](https://img.shields.io/npm/v/mysql) ![Downloads](https://img.shields.io/npm/dm/mysql)                                 |
| [EJS](https://ejs.co/)                                                     | ![Version](https://img.shields.io/npm/v/ejs) ![Downloads](https://img.shields.io/npm/dm/ejs)                                     |
| [Multer](https://github.com/expressjs/multer)                              | ![Version](https://img.shields.io/npm/v/multer) ![Downloads](https://img.shields.io/npm/dm/multer)                               |
| [Multer-s3](https://github.com/anacronw/multer-s3)                         | ![Version](https://img.shields.io/npm/v/multer-s3) ![Downloads](https://img.shields.io/npm/dm/multer-s3)                         |
| [Amazon sdk](https://github.com/aws/aws-sdk-js)                            | ![Version](https://img.shields.io/npm/v/aws-sdk) ![Downloads](https://img.shields.io/npm/dm/aws-sdk)                             |


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

1. The **app.js** file is the main file of project. This defines all ExpressJs settings.
2. The **lib/controllers/** folder contains all api routes actions.
3. In **lib/database/** folder you can find the database connection and the create tables script.
4. The **lib/middleware/** folder contains all middleware functions.
5. The **lib/pages/** folder contains all functions to render pages.
6. The **lib/routes/** folder contains all routes. The routes are separated in two ways: API routes and page routes. Page routes are the routes that are used to render pages. API routes are the routes that are used to handle api requests.
7. In the **views/** folder you can find all the views. The views use components to separate the html code. The components are located in **views/components/** folder.

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
> GET: To retrieve a representation of a resource.

> POST: To create new resources and sub-resources.

> PUT: To update existing resources.

> PATCH: To update existing resources. It only updates the fields that were supplied, leaving the others alone.

> DELETE: To delete existing resources.

```sh
# CRUD
GET /api/images/ - 200 OK RETURN ALL IMAGES FROM DATABASE
POST /api/upload/ - 200 OK UPLOAD NEW IMAGE TO DATABASE
PUT /api/update/:id/ - 200 OK UPDATE IMAGE OR IMAGE INFO
DELETE /api/delete/:id/ - 200 DELETE IMAGE FROM DATABASE

# LOGIN
GET /api/login/ - 200 OK ADMIN LOGIN
POST /api/signout/ -200 OK ADMIN SIGNOUT
```


### Database
To connect in database fill all credentials in `.env` file.


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
