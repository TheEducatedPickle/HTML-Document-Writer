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
        <a className={classes.anchor} href="output.html" target="_blank">
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
            >
                {props.label}
            </Button>
        </a>
    );
}

ContainedButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButton);
