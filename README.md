This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) v1.0.10.

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

special thanks to [Luigi Poole](https://github.com/luigiplr) for his guide on code splitting. His [blog](https://medium.com/@luigiplr/react-redux-react-router-4-code-splitting-w-rxjs-webpack-32eabedf0e9)

>Note: ***Please go through the above guide***

## Table of Contents

- [Description](#description)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)
  
## Description

This project gives an idea on how to lazy load components and reducers. ***Dont forget to include all the reducers that a particular component needs.***  


## Folder Structure

After creation, your project should look like this:

```
my-app/
  config/        -> webpack, jest, etc cofigs
  node_modules/
  public/
    index.html
    favicon.ico
  scripts/       -> webpack scripts
  src/           -> developement directory
    actions/     -> redux action creators
    components/  -> react components
    containers/  -> components intedrated with redux
    reducers/    -> redux reducers
    store/       -> redux store setup
    App.css
    App.js
    App.test.js
    index.css
    index.js     -> landing js
    logo.svg
    package.json -> project dependencies
    README.md
```
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
