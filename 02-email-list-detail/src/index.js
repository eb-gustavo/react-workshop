import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {emails} from './constants';

ReactDOM.render(
    <App emails={emails} />,
    document.getElementById('root')
);

registerServiceWorker();
