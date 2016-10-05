import React from 'react'
import ReactDOM from 'react-dom'
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Form from './Form'

class TestBox extends React.Component {
    constructor(props) {
        super(props);
    }

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }

    render() {
        return(
            <div>
                <Form/>
            </div>
        );
    }
}

TestBox.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

ReactDOM.render(
    <TestBox />,
    document.getElementById('app')
);