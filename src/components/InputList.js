import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import InputElement from './InputElement'
import FloatingAddButton from './FloatingAddButton';
const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 400,
        backgroundColor: 'transparent',
    },
});

class InputList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            ElementArray: [""],
        };
        this.handleAddElement = this.handleAddElement.bind(this);
        this.handleRemoveElement = this.handleRemoveElement.bind(this);
    }

    /*
    handleClick = () => {
      this.setState(state => ({ open: !state.open }));
    };
    */

    handleAddElement() {
        console.log(this.state.ElementArray);
        this.setState(state => ({
            ElementArray: state.ElementArray.concat(''),
        }))
    }

    handleRemoveElement(index) {
        console.log('Removing element at index ' + index);
    }

    render() {
        const { classes } = this.props;

        return (
            <List component="list" className={classes.root}>
                {this.state.ElementArray.map((text, index) => (
                    <InputElement key={index} index={index} onDelete={this.handleRemoveElement}/>
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
