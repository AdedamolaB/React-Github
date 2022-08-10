# Project title

Github Users Search

# Project Description

This project is a React App that searches for registered users on github. This project is executed by consuming the github Api
and displaying specific information about the users such as Profile picture or Avatar image, Fullname, Github ID,number of Followers, Number of existing gitub users being followed, Total number of repositories, Repository name to include repository description.


## Available Scripts

In the project directory, you can run:

### `npm create-react-app`
Setups the development environment[Development environment setup](https://github.com/facebook/create-react-app).

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## `npm i react-router-dom`
This package contains bindings for using React Router in web applications.[routes package installation](https://www.npmjs.com/package/react-router-dom)


## `npm install react-icons`
Icon installation package[icon installation](https://react-icons.github.io/react-icons/)


## `npm install axios`
Icon installation package[handling http requests](https://www.npmjs.com/package/axios).


### `npm test`
Lunches the interactive test environment in the console.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

Wellaby.js can be installed to flag errors in realtime as code is written or edited during tests [running test in realtime](https://wallabyjs.com/docs/)


## Conclusion

Apart from seperating view from application functionality, the major part of this project is the http handling, and it was executed using Axios instead of native Fetch for the following reasons:

1. It supports older browsers
2. It has a way to abort a request
3. has a way to set a response timeout
4. has built-in CSRF protection
5. performs automatic JSON data transformation.

