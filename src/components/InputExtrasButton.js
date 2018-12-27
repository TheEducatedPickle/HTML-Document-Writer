//InputDeleteButton is the delete button displayed in inputElement

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const styles = theme => ({
    icon: {
        
    },
});

function InputExtrasButton(props) {
    const { classes } = props;
    return (
        <div>
            <IconButton aria-label="More" className={classes.icon} onClick={props.onAdd}>
                <MoreVertIcon />
            </IconButton>
        </div>
    );
}

InputExtrasButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputExtrasButton);
