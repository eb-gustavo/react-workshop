import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {emails} from './constants';

ReactDOM.render(
    <App emails={emails} />,
    document.getElementById('root')
);
