//InputDeleteButton is the delete button displayed in inputElement

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Dialog } from '@material-ui/core';


const styles = theme => ({

});

function InputDialog(props) {
    const { classes } = props;
    return (
        <Dialog>
            
        </Dialog>
    );
}

InputDialog.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputDialog);
