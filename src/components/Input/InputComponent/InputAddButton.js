//InputDeleteButton is the delete button displayed in inputElement

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    icon: {
        
    },
});

function InputAddButton(props) {
    const { classes } = props;
    return (
        <div>
            <IconButton aria-label="Add" className={classes.icon} onClick={props.onAdd}>
                <AddIcon fontSize="default" />
            </IconButton>
        </div>
    );
}

InputAddButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputAddButton);
