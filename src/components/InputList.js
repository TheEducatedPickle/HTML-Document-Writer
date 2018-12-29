/*
Inputlist is a dynamic list of inputElements
*/
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import InputElement from './InputElement'
import FloatingAddButton from './FloatingAddButton';
import HTMLElement from '../models/HTMLElement';

const styles = theme => ({
    list: {
        backgroundColor: 'transparent',
    },
});

class InputList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            yelementArray: this.props.elementArray,
        }
    }

    //Adds an input element to the array
    handleAddElement = (depth, parent) => {
        //console.log(depth);
        this.props.handleAddElement(depth, parent);
    }

    //Removes an element at a given index from the list
    handleRemoveElement = (index) => {
        //console.log('Deleting element at index ' + index);
        this.props.handleRemoveElement(index);
    }

    handleChangeElement = (string, index) => {
        this.props.handleChangeElement(string, index);
    }

    handleSetType = (value, index) => {
        this.props.handleSetType(value, index);
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
        console.log(currentElements);
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
