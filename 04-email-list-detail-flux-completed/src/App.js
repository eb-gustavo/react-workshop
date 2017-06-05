import React from 'react';

import ActionsContainer from './ActionsContainer';
import EmailDetailsContainer from './EmailDetailsContainer';
import EmailsContainer from './EmailsContainer';
import FilterContainer from './FilterContainer';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <FilterContainer />
                <ActionsContainer />
                <EmailsContainer />
                <EmailDetailsContainer />
            </div>
        );
    }
}
