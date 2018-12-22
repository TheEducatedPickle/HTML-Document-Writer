import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputList from './InputList'
import Output from './Output'
import AppBar from './MenuBar'
import { Paper } from '@material-ui/core';

const styles = theme => ({
    input: {
        position: 'fixed',
        right: theme.spacing.unit * 2,
        width: '45%',
        padding: theme.spacing.unit,
    },
    output: {
        position: 'fixed',
        left: theme.spacing.unit,
        width: '40%',
        padding: theme.spacing.unit * 3,
        marginTop: '3%',
        margin: '2%',
    }
})

function App(props) {
    const { classes } = props;
    return (
        <div className='container'>
            <AppBar />
            <div className={classes.input}>
                <InputList />
                <Output />
            </div>
            <Paper className={classes.output}>

            </Paper>
        </div>
    );
}


App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);