import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import InputElement from './InputElement'
import FloatingAddButton from './FloatingAddButton'

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 500,
        backgroundColor: 'transparent',
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
});

class InputList extends React.Component {
    state = {
        open: true,
        ElementArray: [],
    };

    /*
    handleClick = () => {
      this.setState(state => ({ open: !state.open }));
    };
    */

    addElement = () => {

    }

    render() {
        const { classes } = this.props;

        return (
            <List
                component="nav"
                className={classes.root}
            >
                <InputElement />

                <FloatingAddButton />
            </List>

        );
    }
}

InputList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputList);
