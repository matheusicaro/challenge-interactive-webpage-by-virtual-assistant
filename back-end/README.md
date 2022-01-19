## SERVICE API - challenge-interactive-webpage-by-virtual-assistant

[![license](https://img.shields.io/github/license/DAVFoundation/captain-n3m0.svg?style=flat-square)](https://github.com/matheusicaro/challenge-interactive-webpage-by-virtual-assistant/blob/main/LICENSE)

## Summary:

- [Intro](#intro)
- [Project Screen Shot](#project-screen-shot)
- [Installation and Setup Instructions](#installation-and-setup-instructions)
  - [Choosing the database](#database)
  - [Environment variables](#environment-variables)
- [Folder Structure](#folder-structure)
- [Project Specifications](#project-specifications)
- [To Do List](#to-do-list)

## Database

## Environment variables

## Intro:

Interactive web application by a virtual assistant. **More details about the full web app**, [click here](https://github.com/matheusicaro/challenge-interactive-webpage-by-virtual-assistant).

This is the **back-end** service responsible for integrating with external services, as well as the NLP (Natural Language Processing) service, MongoDB database, and others...

---

## Project Screen Shot

### :white_check_mark: [ ONLINE ] - Access the application [online here](http://neo-service.matheusicaro.com/)

<br>

![back-end](https://github.com/matheusicaro/challenge-interactive-webpage-by-virtual-assistant/blob/main/data/images/back-end-screen-shot.png)

## Installation and Setup Instructions

> You will need `node` and `npm` installed globally on your machine.

1. clone the repository: `git clone https://github.com/matheusicaro/challenge-interactive-webpage-by-virtual-assistant`
2. Access the **back-end** folder by the terminal: `cd back-end`
3. Installation: `npm install`
4. Configure the application's environment variables. Just use this available file as an example:
   <br>4.1 rename the file from `.env-example to `.env`
   <br>4.2 change the example values available in the [file itself](https://github.com/matheusicaro/challenge-interactive-webpage-by-virtual-assistant/blob/main/back-end/.env-example)

5. Decide what your database instance will be - [choose-the-database](#database)
6. To Start Server: `npm start`
7. To Documentation API: `http://localhost:4000/`

## Database

It is recommended to use a MongoDB instance as the application database.<br>
However, _if not available_, you can use application cache memory for data storage as an alternative to MongoDB.

#### Choosing the CACHE MEMORY DATABASE

The cache memory database is nothing more than using a defined part of the application's memory.<br>
Therefore, the limit space is defined by environment variables, as well as the activation of the database.

```
DATABASE_IN_MEMORY_CACHE_ACTIVE=true    // activating the cached database.
DATABASE_SIZE_OF_MEMORY_CACHE_IN_MB=100  // setting 100 megabytes of memory for the cached database.
```

Once activated, there is no need to inform the environment variables for the MongoDB database.

#### Choosing the MongoDB DATABASE

You only need to inform the following environment variables:

```
// database name
DATABASE_NAME='chatbot_neo'

// full url of the database containing the username, password and database name
DATABASE_URI='mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority'
```

Database connection driver implementation reference: https://docs.mongodb.com/drivers/node/current/quick-start/

## Environment variables

| variable name                       | example                                                                                               | note                                          | reference                                                                                                   |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| NODE_ENV                            | `NODE_ENV=dev`                                                                                        | environment profile for application execution | -                                                                                                           |
| PORT                                | `PORT=4000`                                                                                           | local port to receive connections             | -                                                                                                           |
| DATABASE_NAME                       | `DATABASE_NAME='chatbot_neo'`                                                                         | database name                                 | -                                                                                                           |
| DATABASE_URI                        | `DATABASE_URI='mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority'` | database connection url                       | [Database connection driver](https://docs.mongodb.com/drivers/node/current/quick-start/)                    |
| DATABASE_IN_MEMORY_CACHE_ACTIVE     | `DATABASE_IN_MEMORY_CACHE_ACTIVE=true`                                                                | activate in-memory database                   | -                                                                                                           |
| DATABASE_SIZE_OF_MEMORY_CACHE_IN_MB | `DATABASE_SIZE_OF_MEMORY_CACHE_IN_MB=20`                                                              | database size limit in **megabytes**          | -                                                                                                           |
| WATSON_API_KEY                      | `WATSON_API_KEY='{apikey}'`                                                                           | watson api key                                | [Waston config](https://cloud.ibm.com/apidocs/assistant/assistant-v2?code=node#endpoint-cloud)              |
| WATSON_API_VERSION_DATE             | `WATSON_API_VERSION_DATE='2021-06-14'`                                                                | watson api version                            | [Waston config](https://cloud.ibm.com/apidocs/assistant/assistant-v2?code=node#endpoint-cloud)              |
| WATSON_SERVICE_FULL_URL             | `WATSON_SERVICE_FULL_URL='{url}'`                                                                     | url of the watson service instance            | [Waston config](https://cloud.ibm.com/apidocs/assistant/assistant-v2?code=node#endpoint-cloud)              |
| WATSON_ASSISTANT_ID                 | `WATSON_ASSISTANT_ID='{assistant_id}'`                                                                | watson assistant id                           | [Create a session ID](https://cloud.ibm.com/apidocs/assistant/assistant-v2?code=node#createsession-request) |

## Folder Structure

```
-- src/config ___________________________: layer for configurations of essential services such as logger, environment, database, etc.
-- src/api ______________________________: API business layer
-- src/api/grapgql ______________________: layer for GraphQL configurations
-- src/api/grapgql/schema _______________: layer for resovers and typedefs by domain context
-- src/api/integration __________________: layer for business rules for search abstractions in integrations with external services (external services api, database, etc.)
-- src/api/services _____________________: layer for business rules that responds to requests.
-- src/tests ____________________________: application unit tests
```

## Project Specifications

- Used [Node.js](https://nodejs.org/en/) with:
  - [TypeScript](https://www.typescriptlang.org/)
  - [GraphQL](https://graphql.org/)
  - [Apollo-server](https://www.apollographql.com/docs/apollo-server/)
- User [IBM Watson Assistant](https://www.ibm.com/products/watson-assistant) as integration to provide the use of artificial intelligence for understanding natural language.
- Used [Jest](https://jestjs.io/) for unit testing
- Used [Winston](https://typicode.github.io/husky/#/) for the storage of the logs.
- Used [Axios](https://axios-http.com/) for promises based HTTP client
- Used [Husky](https://typicode.github.io/husky/#/) for analyzing lint tests and configurations before committing to the repository
- Used [Prettier lint](https://prettier.io/docs/en/integrating-with-linters.html) for lint style

## To Do List:

Due to the availability of time to develop the application in my free time, some tasks were not carried out, but they are essential for the delivery of the solution, and are pending below as a suggestion for future improvements:

1. Completion of unit tests
