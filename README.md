# Github API
The GitHub User Search application is a tool that allows users to search for GitHub usernames and retrieve information about their repositories. By leveraging the power of the GitHub API, this application provides a seamless and efficient way to explore users and their public repositories.
This project is an experiment in applying clean architecture with React.

## Features
- User Search
Users can enter a username in the search bar, and the application will fetch information about the user from the GitHub API
- Repository
Once a user is selected from the search results, the application displays a list of their repositories. Users can browse through the repositories and view essential details such as the repository name, description, stars;

## Architecture
![alt text](https://www.happycoders.eu/wp-content/uploads/2023/01/hexagonal-architecture-with-control-flow.v4-800x474.png)
Hexagonal Architecture, also known as Ports and Adapters architecture or the Onion Architecture, is a software architectural pattern that emphasizes loose coupling, modularity, and testability. It was introduced by Alistair Cockburn and promotes the separation of concerns in a system.
The main idea behind Hexagonal Architecture is to decouple the core business logic of an application from external dependencies such as databases, user interfaces, or external services. This decoupling is achieved by dividing the system into several concentric layers or hexagons, each responsible for specific functionality.
(https://en.wikipedia.org/wiki/Hexagonal_architecture_(software))

## Models 
- Users
- UserRepo
## Repositories
- githubRepositories
## DataSources
- githubAPIDatasource
- githubDataSource
## UseCases
- useFetchGithubRepo
- useFetchGithubUsers
## Services 
- http

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
