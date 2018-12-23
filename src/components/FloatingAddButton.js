import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    fab: {
        position: 'fixed',
        right: theme.spacing.unit * 2,
        bottom: theme.spacing.unit * 2,
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});

function FloatingActionButtons(props) {
    const { classes } = props;

    return (
        <Fab color="primary" aria-label="Add" className={classes.fab} onClick={props.onClick}>
            <AddIcon />
        </Fab>
    );
}

FloatingActionButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);
