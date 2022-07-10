# Corelab API

## Using

- Express.js 4.18.1

- TypeScript 4.7.4

- Dotenv

- ODM: Mongoose 6.4.3 to MongoDB (Atlas - GCP/Amazon/Azure)

- CORS

- Prettier

- Eslint

## How to execute

### Clone

`git clone https://github.com/leandrocunha526/corelab-api`

### Install dependencies

`npm install`

### Execute

To execute use `npm run dev` and set your MONGODB_URI in .env.

Do you can host your database in [Atlas](https://www.mongodb.com/cloud/atlas) and make it ready to deploy.

### Deployment

If you want to enjoy the application in production, you can use the [Docker](https://www.docker.com/).

For this, the project has the Dockerfile configuration file, so that it can generate the project image.

```
docker build --name corelab-api .
```

```
docker run -d -p 8080:8080 corelab-api
```

### Completed resources

- [x] Create server and add support to CORS.
- [x] CRUD.
- [x] Set item favorite.

### Additions

- [x] Prettier.
- [x] Docker.
- [x] Eslint.
- [x] GitHub Actions

### Pending features

- [ ] Filters (in development).

- [ ] Tests

### Documentation

- [Docker to Nodejs](https://hub.docker.com/_/node)

- [Typescript](https://www.typescriptlang.org/)

- [Express](https://expressjs.com/pt-br/)

- [Mongoose ODM](https://mongoosejs.com/)
