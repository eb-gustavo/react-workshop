import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {Dispatcher} from 'flux';
import {Container, ReduceStore} from 'flux/utils';

// Dispatcher
let AppDispatcher = new Dispatcher();

// ActionTypes (Counter)
const ADD = 'add';
const SUBTRACT = 'subtract';

// Actions (Counter)
const add = () => {
    AppDispatcher.dispatch({
        type: ADD
    });
}

const subtract = () => {
    AppDispatcher.dispatch({
        type: SUBTRACT
    });
}

// Store (Counter)
class CounterStore extends ReduceStore {
    constructor() {
        super(AppDispatcher);
    }

    getInitialState() {
        return {
            value: 0
        };
    }

    reduce(state, action) {
        switch (action.type) {
            case ADD:
                return {...state, value: state.value + 1};

            case SUBTRACT:
                return {...state, value: state.value - 1};

            default:
                return state;
        }
    }
}

let ReducedCounterStore = new CounterStore();

// View (Counter)
class Counter extends React.Component {
    static propTypes = {
        onAdd: PropTypes.func.isRequired,
        onSubtract: PropTypes.func.isRequired,
        value: PropTypes.number.isRequired
    }

    _handleAdd() {
        let {onAdd} = this.props;

        onAdd();
    }

    _handleSubstract() {
        let {onSubtract} = this.props;

        onSubtract();
    }

    render() {
        let {value} = this.props;

        return (
            <div>
                <button onClick={this._handleSubstract.bind(this)}>-</button>
                <span>{value}</span>
                <button onClick={this._handleAdd.bind(this)}>+</button>
            </div>
        );
    }
}

// Container (Counter)
class CounterContainer extends React.Component {
    static getStores() {
        return [ReducedCounterStore];
    }

    static calculateState() {
        return {
            ...ReducedCounterStore.getState(),

            onAdd: add,
            onSubtract: subtract
        };
    }

    render() {
        return <Counter {...this.state} />;
    }
}

let FluxCounterContainer = Container.create(CounterContainer);

// App
class App extends React.Component {

    render() {
        return (
            <div>
                <FluxCounterContainer />
            </div>
        );
    }
}

// render
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
