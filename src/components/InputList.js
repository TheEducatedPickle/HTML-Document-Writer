/*
Inputlist is a dynamic list of inputElements.
It also acts as an intermediate step for populating InputElement event functions 
with additional arguments before passing to App.js
*/
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import InputElement from './InputElement'
import FloatingAddButton from './FloatingAddButton';

const styles = theme => ({
    list: {
        backgroundColor: 'transparent',
    },
});

class InputList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            elementArray: this.props.elementArray,
        }
    }

    //Adds an input element to the array
    handleAddElement = (depth, childData) => {
        //console.log(depth);
        this.props.handleAddElement(depth, childData);
    }

    //Removes an element at a given index from the list
    handleRemoveElement = (index, childData) => {
        //console.log('Deleting element at index ' + index);
        this.props.handleRemoveElement(index, childData);
    }

    handleChangeElement = (string, index, childData) => {
        this.props.handleChangeElement(string, index, childData);
    }

    handleSetType = (value, index, childData) => {
        this.props.handleSetType(value, index, childData);
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <List component="list" className={classes.list} style={{ maxHeight: '100%', overflow: 'auto' }}>
                    {this.renderTree(this.props.elementArray)}
                    <FloatingAddButton onClick={this.handleAddElement} />
                </List>
            </div>
        );
    }

    renderTree(currentElements) {
        //console.log(currentElements);
        return (
            currentElements.map((text, index) => {
                return (
                    <div>
                        <InputElement
                            key={index}
                            index={index}
                            element={currentElements[index]}
                            onAdd={this.handleAddElement}
                            onDelete={this.handleRemoveElement}
                            onChange={this.handleChangeElement}
                            onTypeSelect={this.handleSetType}
                        />
                        {this.renderTree(currentElements[index].getChildren())}
                    </div>
                )
            })
        )
    }
}

InputList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputList);
