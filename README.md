# Simple front-end boilerplate with Typescript, Angular and Webpack
"Chat" application presenting basic concepts of typescript, angular, webpack code transpilation and bundling. Ideal for educational purposes or very simple projects.
### Details
- a simple chat app
- on first open, chat asks for user's name and only after that user can proceed
- there is a .json file containing message author, date/time, user picture, message itself
- messages from the .json file are randomly posted to the chat 
- every new message is followed by sound
- user can also post to the chat
- on page reload the app does not ask for user’s name again as this information is be kept in cookies
- a very simple layout is provided
- there are tasks for linting, compilation and minification of Javascript using webpack

### Stack
Simple chat application is built with
- Typescript 2.9
- Angular 6
- Webpack 4
- Ts-lint

#### Concepts you can learn:
- basics of typescript
- basics of angular 6
- webpack configuration
  - transpiling typescript to javascript
  - combining multiple files into one bundle
  - packing typescript, css, sound, png and json files into production directory
  - code minification for production
- code linting

### Setup

```
npm install
npm start
```
The application will start automatically in your default browser.

### Other tasks


build production bundle

```
npm run build
```

lint code

```
npm run lint
```