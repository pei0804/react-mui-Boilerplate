import React from 'react';
import {yellow500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

const muiTheme = getMuiTheme({
    palette: {
        textColor: yellow500,
    },
    appBar: {
        height: 80,
        color: "#333333",
        textColor: "#ffc511"
    },
});

class Main extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <AppBar title="OPENREC.tv Arena" />
            </MuiThemeProvider>
        );
    }
}

export default Main;
