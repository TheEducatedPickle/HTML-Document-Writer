import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import InputField from './InputField';
import InputDeleteButton from './InputDeleteButton';
import ListItem from '@material-ui/core/ListItem';
import FloatingAddButton from './FloatingAddButton';
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
        ElementArray: [""],
    };

    /*
    handleClick = () => {
      this.setState(state => ({ open: !state.open }));
    };
    */

    handleAddElement = () => {
        this.setState(state => ({
            ElementArray: [state.ElementArray, ""],
        }))
    }

    render() {
        const { classes } = this.props;

        return (
            <List component="list" className={classes.root}>
                {this.state.ElementArray.map((text, index) => (
                    <ListItem disableGutters>
                        <InputField />
                        <InputDeleteButton />
                    </ListItem>
                ))}
                <FloatingAddButton onClick={this.handleAddElement} />
            </List>
        );
    }
}

InputList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputList);
