# React, Eventbrite y yo

This workshop is about how to build a React App using Eventbrite stack and not die trying...

### Most relevant libs included in our stack
| Lib | Version | Docs |
| --- | ------- | ---- |
| [react](https://www.npmjs.com/package/react) | 15.4.2 | https://facebook.github.io/react/docs/hello-world.html |
| [react-dom](https://www.npmjs.com/package/react-dom) | 15.4.2 | https://facebook.github.io/react/docs/react-dom.html |
| [redux](https://www.npmjs.com/package/redux) | 3.5.2 | http://redux.js.org/ |
| [react-redux](https://www.npmjs.com/package/react-redux) | 4.4.5 | https://github.com/reactjs/react-redux/tree/v4.4.5/docs |
| [redux-form](https://www.npmjs.com/package/redux-form) | 6.2.0 | http://redux-form.com/6.2.0/docs/GettingStarted.md/ |
| [redux-thunk](https://www.npmjs.com/package/redux-thunk) | 2.2.0 | https://github.com/gaearon/redux-thunk/blob/v2.2.0/README.md |
| [react-router](https://www.npmjs.com/package/react-router) | 3.0.2 | https://github.com/ReactTraining/react-router/tree/v3.0.2/docs |
| [react-router-redux](https://www.npmjs.com/package/react-router-redux) | 4.0.4 | https://github.com/reactjs/react-router-redux/blob/v4.0.4/README.md |
| [eventbrite_design_system](https://github.com/eventbrite/eventbrite_design_system) | latest | https://github.com/eventbrite/eventbrite_design_system/blob/master/README.md |
| [es6-promise](https://www.npmjs.com/package/es6-promise) | 3.1.2 | http://people.mozilla.org/~jorendorff/es6-draft.html#sec-promise-constructor |
| [whatwg-fetch](https://www.npmjs.com/package/whatwg-fetch) | 0.11.0 | https://github.com/github/fetch/blob/master/README.md |

---

## ReactDOM
```
ReactDOM.render(
  element,
  container
);
```

## React
*A javascript library for building user interfaces*

```
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```
[live code](https://codepen.io/gingrassia/pen/PmWqNY?editors=0010)

### JSX
*Syntax extension to JavaScript. It's recommend to it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript*

### Elements
*Elements are the smallest building blocks of React apps.
An element describes what you want to see on the screen:*

```
const element = <h1>Hello, world</h1>;
```

```
const element = <h1>Hello, world</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```
[live code](https://codepen.io/gingrassia/pen/wdgazK?editors=0010)

```
const userName = 'Pepe';
const element = <h1>Greetings, {userName}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```
[live code](https://codepen.io/gingrassia/pen/oWBXzQ?editors=0010)

### Components
*Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.*

*Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called "props") and return React elements describing what should appear on the screen*

```
function HelloWorld() {
  return <h1>Hello, world</h1>;
}

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('root')
);
```
[live code](https://codepen.io/gingrassia/pen/ybgNVb?editors=0010)

```
function Greetings(props) {
  return <h1>Hello, {props.name}</h1>;
}

ReactDOM.render(
  <Greetings name='Pepe' />,
  document.getElementById('root')
);
```
[live code](https://codepen.io/gingrassia/pen/oWBXYJ?editors=0010)

```
function Greetings(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Greetings name='Pepe' />;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```
[live code](https://codepen.io/gingrassia/pen/PmWqWw?editors=0010)

#### React Components

```
class HelloWorld extends React.Component {
  render() {
    return <h1>Hello, world</h1>;
  }
}

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('root')
);
```
[live code](https://codepen.io/gingrassia/pen/eWgNge?editors=0010)

```
class Greetings extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

ReactDOM.render(
  <Greetings name='Pepe' />,
  document.getElementById('root')
);
```
[live code](https://codepen.io/gingrassia/pen/JNEdEa?editors=0010)

```
class Greetings extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

const element = <Greetings name='Pepe' />;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```
[live code](https://codepen.io/gingrassia/pen/gWgpmO?editors=0010)

#### Composing Components

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name='Sara' />
      <Welcome name='Cahal' />
      <Welcome name='Edite' />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```
<a href='https://codepen.io/gingrassia/pen/Njdqpr?editors=0010' target='_blank'>live code</a>
