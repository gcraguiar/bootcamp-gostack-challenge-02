<h1 align="center">
  <img alt="Gympoint" title="Gympoint" src=".github/logo.png" width="200px" />
</h1>

<h3 align="center">
  Challenge 2: Gympoint, the beginning
</h3>

<blockquote align="center">“The best way to predict the future is to invent it.” - Alan Kay</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/gcraguiar/bootcamp-gostack-challenge-02?color=%2304D361">

  <a href="https://gostack.dev">
    <img alt="Made by gcraguiar" src="https://img.shields.io/badge/made%20by-gcraguiar-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/gcraguiar/bootcamp-gostack-challenge-02/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/gcraguiar/bootcamp-gostack-challenge-02?style=social">
  </a>
</p>

<p align="center">
  <a href="#rocket-about-the-project">About the Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#hammer-and-wrench-resources-and-libraries">Resources and Libraries</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-developed-features">Developed Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#scroll-installation">Installation</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#book-documentation">Documentation</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## :rocket: About the Project

The goal of this challenge is to develop the first part of a gym management system, Gympoint.
In the first step of this project was developed the API, with it can include, search and update information such as name, email,
age, weight and height of students enrolled in the academy. In addition to performing session control and validating user access in the application.

The application framework follows the MVC (Model, View, and Controller) and JWT (JSON Web Token) standards for creating JSON-based access tokens.
The data contained therein can be validated at any time because the token is digitally signed and consists of three sections: Header, Payload and Signature.
This structure allows the implementation of an authentication system via HTTP, and can be sent in different request methods, such as:
POST, GET, PUT, DELETE thus making access to application data more secure.

The use of JWT in conjunction with Schema Validation (YUP) is critical to more consistently structure access to information in the database, so
the use of these features is essential for the proper functioning of the application.

## :hammer_and_wrench: Resources and Libraries

This project was developed with the following technologies:

**Libraries:**

- [Express][express]
- [Node.JS][nodejs]
- [Sequelize][sequelize]

**Tools:**

- [Nodemon][nodemon]
- [NVM][nvm]
- [Yarn][yarn]
- [Sucrase][sucrase]
- [JSON Web Tokens][jwt]
- [bcryptjs][bcryptjs]
- [Yup][yup]
- [VS Code][vc] with [EditorConfig][vceditconfig], [Prettier][vceditconfig] and [ESLint][vceslint]

**Services:**

- [Docker][docker]
- [Postbird][postbird]

## :computer: Developed Features

* User authentication and session control using the JWT library.
* Implementation of seeds in sequelize, automatically populating administrator information in the user table.
* Input data validation using Yup.
* Student Management with CRUD Operations

---

### :scroll: Installation

To clone and run this application, you'll need [Git](https://git-scm.com), [Docker](https://www.docker.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.19][yarn] or higher installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/gcraguiar/bootcamp-gostack-challenge-02.git gympoint-api

# Go into the repository
$ cd bootcamp-gostack-challenge-02

# Install dependencies
$ yarn install

# Run Postgres
$ docker run --name database -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -d postgres:11

# Create a new database named "gympoint" in postbird and run the following commands:
# Run Migrations and Seeds
$ yarn sequelize db:migrate
$ yarn sequelize db:seed:all

# Run the Server
$ yarn dev
```

---

### :book: Documentation

> [Click here](http://www.google.com.br) for download documentation using [Insomnia][insomnia] for Unix.

> [Click here](http://www.google.com.br) for download documentation using [Postman][postman] for Windows.


&nbsp;

* Do you want to view the running project? [Click here][youtube-challenge-02]

&nbsp;

---


## 📅 Conclusion

Challenge completed in 2019/11/11 - [Click here][rocketseat-challenge-02] to access the challenge.

## :memo: License

This project is under the MIT license. See the [LICENSE](./LICENSE) for more information.

---

Made with ♥ by Gabriel Aguiar for Rocketseat :tm: [Come meet me!][linkedin]

[challenge02]: https://github.com/gcraguiar/bootcamp-gostack-challenge-02

[linkedin]: https://www.linkedin.com/in/gabriel-aguiar-740002197/

[express]: https://expressjs.com
[nodejs]: https://nodejs.org/
[sequelize]: https://sequelize.org

[nodemon]: https://github.com/remy/nodemon
[nvm]: https://github.com/nvm-sh/nvm
[yarn]: https://yarnpkg.com/
[sucrase]: https://github.com/alangpierce/sucrase
[jwt]: https://jwt.io/
[bcryptjs]: https://github.com/dcodeIO/bcrypt.js/
[yup]: https://github.com/jquense/yup

[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[insomnia]: https://insomnia.rest/download/
[postman]: https://www.getpostman.com/downloads/
[docker]: https://github.com/docker
[postbird]: https://electronjs.org/apps/postbird

[youtube-challenge-02]: https://youtu.be/dpUGqtzQszM
[rocketseat-challenge-02]: https://github.com/Rocketseat/bootcamp-gostack-desafio-02/blob/master/README.md#desafio-02-iniciando-aplica%C3%A7%C3%A3o

