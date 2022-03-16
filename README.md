# Neo Interactive Webpage by Virtual Assistant

[![license](https://img.shields.io/github/license/DAVFoundation/captain-n3m0.svg?style=flat-square)](https://github.com/matheusicaro/challenge-interactive-webpage-by-virtual-assistant/blob/main/LICENSE)

<br>

- [Intro](#intro)
- [Challenge](#challenge)
- **[Project Screen Shot](#project-screen-shot)**
- [New features created](#new-features-created)
  - [Interactive web page (controlled by a chatbot)](#interactive-web-page-controlled-by-a-chatbot)
  - [Virtual assistant (multilingual in English and French)](#virtual-assistant-multilingual-in-english-and-french)
  - [Style dark mode](#style-dark-mode)
  - [Single page application (English and French)](#single-page-application-english-and-french)
- [Inspiration and motivation](#inspiration-and-motivation)
- [How it was developed](#how-it-was-developed)
  - [Architecture](#architecture)
  - [Technologies used (stack)](#technologies-used)

## Intro:

Neo Interactive Webpage by Virtual Assistant - is a Web application that was developed in honor of **[Neo Financial](https://www.neofinancial.com/)**. <br>
Some sections of **[Neo's official website](https://www.neofinancial.com/)** were recreated with the insertion of new innovation features, which the main functionality is a virtual assistant (chatbot).

The Virtual Assistant is able to interact with the user and control the web application interactively, being able to direct the user to specific sections of the site.

> _got lost on the site?_ <br> > _don't know where to find information?_ <br> > _...ask Neo's virtual assistant that it will take you to the desired session._ 😉🖤

## Challenge

The aim of this project is to recreate sections of Neo Financial's official website with improvement on existing features and development of new features with a focus on innovation.

All images and content are property of **[Neo Financial](https://www.neofinancial.com/)** and were taken from the **[official website](https://www.neofinancial.com/)** for the period December 25, 2021 to date.

## Project Screen Shot

### :white_check_mark: [ ONLINE ] - Access the application at: [www.neo-together-with.matheusicaro.com](https://neo-together-with.matheusicaro.com/)

![web-screen](https://github.com/matheusicaro/challenge-interactive-webpage-by-virtual-assistant/blob/main/data/images/interactive-web-screen-shot.gif)

<br>
<br>

---

## New features created

### Interactive web page controlled by a chatbot

Interactive or controlled website is a trend that has emerged after a popularization of virtual assistants in recent years. Basically it's having a virtual assistant (Chatbot) available on the site and that has the ability to perform actions independently without customer action, just based on the understanding of the user's questions and answers.

An interactive webpage was developed through the virtual assistant. Basically, there are two scenarios in which were considered as a **_simple conversation_** and an **_advanced conversation_**.

**Simple Conversation**: the simple conversion represents interactions in which the chatbot responds to the user with only texts, as shown in the image below:
![simple-conversation](https://github.com/matheusicaro/challenge-interactive-webpage-by-virtual-assistant/blob/main/data/images/feature-interactive-webpage-simple-conversation.png)

---

**Advanced conversation**: the advanced conversion when a virtual assistant identifies that it will be necessary to perform a command in the web application to meet the user's request, as shown in the image below:
![advanced-conversation](https://github.com/matheusicaro/challenge-interactive-webpage-by-virtual-assistant/blob/main/data/images/feature-interactive-webpage-advanced-conversation.png)

<br>
<br>

### Virtual assistant (multilingual in English and French)

The virtual assistant was built using IBM's Watson Assistant as a natural language processing engine. All knowledge, training and conversation flow developed in Watson Assistant is available at **[this link](https://github.com/matheusicaro/challenge-interactive-webpage-by-virtual-assistant/tree/main/data/watson-assistant)**.

![chatbot](https://github.com/matheusicaro/challenge-interactive-webpage-by-virtual-assistant/blob/main/data/images/feature-interactive-webpage-chatbot.gif)

<br>
<br>

### Style dark mode

![dark-mode](https://github.com/matheusicaro/challenge-interactive-webpage-by-virtual-assistant/blob/main/data/images/interactive-web-screen-dark-mode.gif)

<br>
<br>

### Single page application (English and French)

![single-page](https://github.com/matheusicaro/challenge-interactive-webpage-by-virtual-assistant/blob/main/data/images/feature-interactive-webpage-single-page.gif)

<br>
<br>

## Inspiration and motivation

The motivation of this project was to apply this concept of interactive web application inspired by an award received in 2021 in the first internal Hackathon from Inter Bank.

Bore details about this project: **[www.matheusicaro.com/in/projects/talking-to-babi](https://www.matheusicaro.com/in/projects/talking-to-babi)**

This trend of virtual assistants that interact with a simple web view, can be extended to other types of interfaces such as mobile applications, _mainly in marketplace applications or super apps that contain several other products and segments in a single app._

In that **[project](https://www.matheusicaro.com/in/projects/talking-to-babi)**, which was awarded in the hackaton in 2nd place on the IOS platform, it demonstrates an interaction for viewing products not found in the search fields **with the potential to be extended to assist in possible sales or purchases of services with an attendant when visiting a store a mall for example.**

## How it was developed

The project is composed of a front-end and a back-end that integrates with IBM's Watson Assistant services
<br>
<br>

- **FRONT-END**: developed in React with GraphQL (Apollo Client) . **[Documentation available at this link](https://github.com/matheusicaro/challenge-interactive-webpage-by-virtual-assistant/tree/main/front-end)**.
- **BACK-END**: developed in Node.js with GraphQL (Apollo Server) . **[Documentation available at this link](https://github.com/matheusicaro/challenge-interactive-webpage-by-virtual-assistant/tree/main/back-end)**.
- **CHATBOT**: have been trained to have knowledge relevant to the information coming from the web page. **[Documentation available at this link](https://github.com/matheusicaro/challenge-interactive-webpage-by-virtual-assistant/tree/main/data/watson-assistant)**.
  <br>
  <br>

### Architecture

![architecture](https://github.com/matheusicaro/challenge-interactive-webpage-by-virtual-assistant/blob/main/data/images/architecture.png)

<br>
<br>

### Technologies used

#### FRONT-END

- Used **[React](https://reactjs.org/)** with:
  - **[TypeScript](https://www.typescriptlang.org/)**
  - **[GraphQL](https://graphql.org/)**
  - **[Apollo-client](https://www.apollographql.com/docs/react/)**
- Used **[Material-UI](https://mui.com/getting-started/usage/)** V5 for lib for view components
- Used **[Styled Components](https://styled-components.com/)** lib for styling
- Used **[Redux Context API](https://reactjs.org/docs/context.html)** for store management
- Used **[Reack Hooks](https://reactjs.org/docs/hooks-intro.html)** with stateful and stateless components.
- Used **[Husky](https://typicode.github.io/husky/#/)** for analyzing lint tests and configurations before committing to the repository
- Used **[Prettier lint](https://prettier.io/docs/en/integrating-with-linters.html)** for lint style

#### BACK-END

- Used **[Node.js](https://nodejs.org/en/)** with:
  - **[TypeScript](https://www.typescriptlang.org/)**
  - **[GraphQL](https://graphql.org/)**
  - **[Apollo-server](https://www.apollographql.com/docs/apollo-server/)**
- User **[IBM Watson Assistant](https://www.ibm.com/products/watson-assistant)** as integration to provide the use of artificial intelligence for understanding natural language.
- Used **[Jest](https://jestjs.io/)** for unit testing
- Used **[Winston](https://typicode.github.io/husky/#/)** for the storage of the logs.
- Used **[Axios](https://axios-http.com/)** for promises based HTTP client
- Used **[Husky](https://typicode.github.io/husky/#/)** for analyzing lint tests and configurations before committing to the repository
- Used **[Prettier lint](https://prettier.io/docs/en/integrating-with-linters.html)** for lint style

#### CLOUD

- Used **[IBM Watson Assistant](https://www.ibm.com/products/watson-assistant)** as an NLP engine (Natural Language Processing) and construction of conversational flows.
- Used **[AWS Route 53](https://aws.amazon.com/route53/)** as a highly available, scalable domain name system service.
- Used **[AWS CloudFront](https://aws.amazon.com/cloudfront/)** as a highly scalable content delivery network services.
- Used **[AWS S3 Bucket](https://aws.amazon.com/s3/)** as a cloud object storage to static web files.
- Used **[AWS BeanStalk](https://aws.amazon.com/elasticbeanstalk/)** as an orchestration service for deploying cloud applications.
- Used **[AWS EC2](https://aws.amazon.com/ec2/)** as cloud instances for application availability.
- Used **[AWS CodeDeploy](https://aws.amazon.com/codedeploy/)** as a fully managed deployment service that automates application deployments.
- Used **[AWS CodePipeline](https://aws.amazon.com/codepipeline/)** as a continuous delivery service for the application build, test and deployment phases
- Used **[AWS CodeCommit](https://aws.amazon.com/codecommit/)** as source control service.

#### DATABASE

- Used **[MongoDB](https://www.mongodb.com/)**.
