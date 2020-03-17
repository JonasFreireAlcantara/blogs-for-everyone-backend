# Blogs for Everyone

Blogs for Everyone aims to be Content Management System for personal blogs

## About this project

When i was developing my first blog from scratch using React, Express, Node, Mongoose technologies i had decided to create this CMS to help someone which desires to create and maintaing your own blog in an easy way.

This project was designed to adapt the content for your needs but you will have to setup some configurations before.

## Backend

This repository refers to the backend part of the project which in this case is a Rest API built with [Express](https://expressjs.com/), to you setup the frontend see the readme file of [frontend](https://github.com/JonasFreireAlcantara/blogs-for-everyone-frontend) part of this project.

## Configuration of project resources

The resources which this project utilize is:

- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account to store the posts;
- A [Cloudinary](https://cloudinary.com/) account to save the images of posts.

### Credentials configurations

After you had created the accounts in both cloud services you must inform the project the conections credentials, for this you will create a file called <i>.env</i> and inside it you will inform your credentials:

```
DATABASE_MONGO_ATLAS_USERNAME=<your_mongo_atlas_username>
DATABASE_MONGO_ATLAS_PASSWORD=<your_mongo_atlas_password>

DATABASE_CLOUDINARY_CLOUD_NAME=<your_cloudinary_name>
DATABASE_CLOUDINARY_API_KEY=<your_cloudinary_api_key>
DATABASE_CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
```

## Execution

You must install all project dependencies before you run for the first time the backend, go to the project root directory and enter the follow command:

`npm install`

After that to execute this project in development mode you can run:

`npm run development`

And for production you can run:

`npm run production`

You can now test the backend going to the [http://localhost:3333](http://localhost:3333).
