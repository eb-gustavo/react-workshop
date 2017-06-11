import React from 'react';

import {loadEmails} from './EmailsActions';

import ActionsContainer from './ActionsContainer';
import EmailDetailsContainer from './EmailDetailsContainer';
import EmailsContainer from './EmailsContainer';
import FilterContainer from './FilterContainer';
import LoadingContainer from './LoadingContainer';

export default class App extends React.Component {

    componentDidMount() {
        loadEmails();
    }

    render() {
        return (
            <div>
                <LoadingContainer />
                <FilterContainer />
                <ActionsContainer />
                <EmailsContainer />
                <EmailDetailsContainer />
            </div>
        );
    }
}
