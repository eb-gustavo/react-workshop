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
      <Welcome name='Pepe' />
      <Welcome name='Jose' />
      <Welcome name='Ramon' />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```
[live code](https://codepen.io/gingrassia/pen/Njdqpr?editors=0010)

#### Typechecking With PropTypes
```
{
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,

  // Anything that can be rendered: numbers, strings, elements or an array
  // (or fragment) containing these types.
  optionalNode: PropTypes.node,

  // A React element.
  optionalElement: PropTypes.element,

  // You can also declare that a prop is an instance of a class. This uses
  // JS's instanceof operator.
  optionalMessage: PropTypes.instanceOf(Message),

  // You can ensure that your prop is limited to specific values by treating
  // it as an enum.
  optionalEnum: PropTypes.oneOf(['News', 'Photos']),

  // An object that could be one of many types
  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message)
  ]),

  // An array of a certain type
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

  // An object with property values of a certain type
  optionalObjectOf: PropTypes.objectOf(PropTypes.number),

  // An object taking on a particular shape
  optionalObjectWithShape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  // You can chain any of the above with `isRequired` to make sure a warning
  // is shown if the prop isn't provided.
  requiredFunc: PropTypes.func.isRequired,

  // A value of any data type
  requiredAny: PropTypes.any.isRequired,

  // You can also specify a custom validator. It should return an Error
  // object if the validation fails. Don't `console.warn` or throw, as this
  // won't work inside `oneOfType`.
  customProp: function(props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  },

  // You can also supply a custom validator to `arrayOf` and `objectOf`.
  // It should return an Error object if the validation fails. The validator
  // will be called for each key in the array or object. The first two
  // arguments of the validator are the array or object itself, and the
  // current item's key.
  customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
    if (!/matchme/.test(propValue[key])) {
      return new Error(
        'Invalid prop `' + propFullName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  })
}
```

Usage:
```
class Greetings extends React.Component {
  render() {
    let {age, name} = this.props;

    return <span>Hi! I'm {name} and I am {age} years old</span>;
  }
}

Greetings.propTypes = {
  name: React.PropTypes.string.isRequired,
  age: React.PropTypes.number.isRequired
};

ReactDOM.render(
  <Greetings name='Pepe' age={30} />,
  document.getElementById('root')
);
```
[live code](https://codepen.io/gingrassia/pen/LyxxOp?editors=0010)

#### Default Prop Values
_You can define default values for your props by assigning to the special defaultProps property_

Usage:
```
class Greetings extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greetings.propTypes = {
  name: React.PropTypes.string
};

Greetings.defaultProps = {
  name: 'Stranger'
};

ReactDOM.render(
  <Greetings />,
  document.getElementById('root')
);
```
[live code](https://codepen.io/gingrassia/pen/VbPPKv?editors=0010)

#### Lists and Keys
This is wrong!
```
function NumberList(props) {
  let listItems = props.numbers.map((number) =>
    <li>{number}</li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```
[live code](https://codepen.io/gingrassia/pen/WjRpPN?editors=0010)

Solution:
##### Keys
_Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity_
```
function NumberList(props) {
  let listItems = props.numbers.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));

  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```
[live code](https://codepen.io/gingrassia/pen/oWBZVd?editors=0010)

##### It's exercise time!
[live code](https://codepen.io/gingrassia/pen/PmWbEq?editors=0010)

#### Component Lifecycle
[documentation](https://facebook.github.io/react/docs/react-component.html)

#### Component State
_The heart of every React component is its "state", an object that determines how that component renders & behaves. In other words, "state" is what allows you to create components that are dynamic and interactive_
```
class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hi, I'm a clock!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```
[live code](https://codepen.io/gingrassia/pen/YVNRgN?editors=0010)

#### Handling Events
_Handling events with React elements is very similar to handling events on DOM elements. There are some syntactic differences_

* _React events are named using camelCase, rather than lowercase._
* _With JSX you pass a function as the event handler, rather than a string._

```
class Toggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isToggleOn: true };
  }

  handleClick() {
    let {isToggleOn} = this.state;

    this.setState({
      isToggleOn: !isToggleOn
    });
  }

  handleClickV2() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    let {isToggleOn} = this.state;

    // This binding is necessary to make `this` work in the callback
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>
          Button 1 {isToggleOn ? "ON" : "OFF"}
        </button>
        <button onClick={this.handleClickV2.bind(this)}>
          Button 2 {isToggleOn ? "ON" : "OFF"}
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById("root")
);
```
[live code](https://codepen.io/gingrassia/pen/eWgbPz?editors=0010)

##### It's exercise time!
[live code](https://codepen.io/gingrassia/pen/OmWdLY?editors=0010)

#### Thinking in React

1. Break The UI Into A Component Hierarchy
2. Build A Static Version in React
3. Identify The Minimal (but complete) Representation Of UI State
  - Is it passed in from a parent via props? If so, it probably isn't state
  - Does it remain unchanged over time? If so, it probably isn't state
  - Can you compute it based on any other state or props in your component? If so, it isn't state
4. Identify Where Your State Should Live
  - Identify every component that renders something based on that state
  - Find a common owner component (a single component above all the components that need the state in the hierarchy)
  - Either the common owner or another component higher up in the hierarchy should own the state
  - If you can't find a component where it makes sense to own the state, create a new component simply for holding the state and add it somewhere in the hierarchy above the common owner component
5. Add Inverse Data Flow

##### It's exercise time!
[live code](https://codepen.io/gingrassia/pen/QvddBV?editors=0010) or [clone it](./01-email-app)

##### It's exercise time again! (final)
[live code](https://codepen.io/gingrassia/pen/dWVyyJ?editors=0010) or [clone it](./02-email-app)
