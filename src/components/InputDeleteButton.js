//InputDeleteButton is the delete button displayed in inputElement

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
    icon: {
        
    },
});

function ButtonSizes(props) {
    const { classes } = props;
    return (
        <div>
            <IconButton aria-label="Delete" className={classes.icon} onClick={props.onClick}>
                <DeleteIcon fontSize="default" />
            </IconButton>
        </div>
    );
}

ButtonSizes.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonSizes);
