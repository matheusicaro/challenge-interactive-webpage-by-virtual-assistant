## FRONT-END - challenge-interactive-webpage-by-virtual-assistant

[![license](https://img.shields.io/github/license/DAVFoundation/captain-n3m0.svg?style=flat-square)](https://github.com/matheusicaro/challenge-interactive-webpage-by-virtual-assistant/blob/main/LICENSE)

- [Intro](#intro)
- [> Project Screen Shot](#project-screen-shot)
- [Installation and Setup Instructions](#installation-and-setup-instructions))
- [Folder Structure](#folder-structure)
- [Project Specifications](#project-specifications)
- [To Do List](#to-do-list)

## Intro:

Interactive web application by a virtual assistant. **More details about the full web app**, [click here](https://github.com/matheusicaro/challenge-interactive-webpage-by-virtual-assistant).

This is the **front-end** to the web application.

## Project Screen Shot

### :white_check_mark: [ ONLINE ] - Access the application at: [www.neo-together-with.matheusicaro.com](https://neo-together-with.matheusicaro.com/)

![front-end](https://github.com/matheusicaro/challenge-interactive-webpage-by-virtual-assistant/blob/main/data/front-end.gif)

## Installation and Setup Instructions

> You will need `node` and `npm` installed globally on your machine.

1. clone the repository: `git clone https://github.com/matheusicaro/challenge-interactive-webpage-by-virtual-assistant`
2. Access the **front-end** folder by the terminal: `cd front-end`
3. Installation: `npm install`
4. To Start Server: `npm start`
5. To Visit App: `http://localhost:3000/`

## Folder Structure

```
-- src/app/assets _________________: static project files like image, json, etc.
-- src/app/components _____________: generic components for global use in the project
-- src/app/pages __________________: paging components like home, page_1, page_2, etc.
-- src/app/routes _________________: application routes to pages
-- src/app/store __________________: store for application status control
-- src/app/store/{domain} _________: actions and types defined by each domain.
-- src/app/styles _________________: configuration and definition of global styles
```

## Project Specifications

- Used [React](https://www.typescriptlang.org/pt/docs/handbook/react.html) with:
  - [TypeScript](https://www.typescriptlang.org/)
  - [GraphQL](https://graphql.org/)
  - [Apollo-client](https://www.apollographql.com/docs/react/)
- Used [Material-UI](https://mui.com/getting-started/usage/) V5 for lib for view components
- Used [Styled Components](https://styled-components.com/) lib for styling
- Used [Redux Context API](https://reactjs.org/docs/context.html) for store management
- Used [Reack Hooks](https://reactjs.org/docs/hooks-intro.html) with stateful and stateless components.
- Used [Husky](https://typicode.github.io/husky/#/) for analyzing lint tests and configurations before committing to the repository
- Used [Prettier lint](https://prettier.io/docs/en/integrating-with-linters.html) for lint style

## To Do List:

Due to the availability of time to develop the application in my free time, some tasks were not carried out, but they are essential for the delivery of the solution, and are pending below as a suggestion for future improvements:

1. Completion of unit tests
2. Development of an own Chat component as a Widget to replace an external component used, reported bellow.

#### External component bugs

A lib was used for a Chat component called: [react-chat-widget](https://github.com/Wolox/react-chat-widget). <br>
However, in development we found several bugs that possibly come between versions of React in the use of state control by contexts in this external lib.

> **Bugs were fixed with in-place DOM manipulation and control of inconveniently displayed elements in Chat, basically [disabling the uncontrollable elements](https://github.com/matheusicaro/challenge-interactive-webpage-by-virtual-assistant/blob/2de931bba8c92a217cb36888a9333bcc6a1bff17/front-end/src/app/components/chat/Chat.tsx#L102) and activating them when needed by [auxiliary functions](https://github.com/matheusicaro/challenge-interactive-webpage-by-virtual-assistant/blob/2de931bba8c92a217cb36888a9333bcc6a1bff17/front-end/src/app/components/chat/helpers.ts).**

The bugs found so far were:

BUG_1) **Message Duplication:** During the exchange of messages in Chat, for each response from the bot user, his message is duplicated 2 or more times. To send a response from the bot to the external component, is necessary only to use the `addResponseMessage` function according to the [lib documentation](https://github.com/Wolox/react-chat-widget#widget-behavior).

BUG_2) **Typing Loader Uncontrollable:** As an internal component, according to the [lib documentation](https://github.com/Wolox/react-chat-widget#widget-behavior), to active or disable the typing loader it is only necessary to call the `toggleMsgLoader` function. However, during chat messages, the loader appears unexpectedly, or is not deactivated when requested.

![front-end](https://github.com/matheusicaro/challenge-interactive-webpage-by-virtual-assistant/blob/main/data/images/front-end-bug-chat-widget.gif)
