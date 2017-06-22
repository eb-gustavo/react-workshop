import React from 'react';

import ActionsContainer from './containers/ActionsContainer';
import EmailDetailsContainer from './containers/EmailDetailsContainer';
import EmailsContainer from './containers/EmailsContainer';
import FilterContainer from './containers/FilterContainer';

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
