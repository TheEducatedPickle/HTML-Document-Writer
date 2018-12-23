/*
Inputlist is a dynamic list of inputElements
*/
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import InputElement from './InputElement'
import FloatingAddButton from './FloatingAddButton';
const styles = theme => ({
    root: {
        backgroundColor: 'transparent',
    },
});

class InputList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            elementArray: [{
                text: '',
                type: 'paragraph',
            }],
        };
        this.handleAddElement = this.handleAddElement.bind(this);
        this.handleRemoveElement = this.handleRemoveElement.bind(this);
        this.handleChangeElement = this.handleChangeElement.bind(this);
        this.handleSetType = this.handleSetType.bind(this);
    }

    //Adds an input element to the array
    handleAddElement() {
        //console.log(this.state.elementArray);
        this.setState(prevState => ({
            elementArray: prevState.elementArray.concat(''),
        }))
    }

    //Removes an element at a given index from the list
    handleRemoveElement(index) {
        //console.log('Deleting element at index ' + index);
        this.setState(prevState => ({
            elementArray: prevState.elementArray.slice(0, index).concat(prevState.elementArray.slice(index + 1))
        }))
    }

    handleChangeElement(string, index) {
        let stateCopy = Object.assign({}, this.state);
        stateCopy.elementArray = stateCopy.elementArray.slice();
        stateCopy.elementArray[index] = Object.assign({}, stateCopy.elementArray[index]);
        stateCopy.elementArray[index].text = string;
        this.setState(stateCopy);
    }

    handleSetType(value, index) {
        let stateCopy = Object.assign({}, this.state);
        stateCopy.elementArray = stateCopy.elementArray.slice();
        stateCopy.elementArray[index] = Object.assign({}, stateCopy.elementArray[index]);
        stateCopy.elementArray[index].type = value;
        console.log(index + " : " + stateCopy.elementArray[index].type);
        this.setState(stateCopy);
    }

    render() {
        const { classes } = this.props;

        return (
            <List component="list" className={classes.root}>
                {this.state.elementArray.map((text, index) => (
                    <InputElement
                        key={index}
                        index={index}
                        type={this.state.elementArray[index].type}
                        onDelete={this.handleRemoveElement}
                        onChange={this.handleChangeElement}
                        onTypeSelect={this.handleSetType}
                        text={this.state.elementArray[index].text}
                    />
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
