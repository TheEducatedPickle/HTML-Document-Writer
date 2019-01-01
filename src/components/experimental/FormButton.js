import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    anchor: {
        textDecoration: 'none'
    },
    button: {
        marginBottom: 13,
    },
});

function ContainedButton(props) {
    const { classes } = props;
    return (
        <form method='get' action='output.html'>
            <Button
            type='submit'
                variant="contained"
                color="secondary"
                className={classes.button}
            >
                {props.label}
            </Button>
        </form>
    );
}

ContainedButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButton);
