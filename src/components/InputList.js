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

    //Adds an input element to the array
    handleAddElement = (depth, childData) => {
        if (childData !== undefined) {
            this.props.elementArray[childData.index].addChild(new HTMLElement(depth + 1));
        
        }
        console.log(depth);
        this.props.handleAddElement(depth);
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
                <List component="list" className={classes.list} style={{maxHeight: '100%', overflow:'auto'}}>
                    {this.props.elementArray.map((text, index) => (
                        <InputElement
                            key={index}
                            index={index}
                            element={this.props.elementArray[index]}
                            onAdd={this.handleAddElement}
                            onDelete={this.handleRemoveElement}
                            onChange={this.handleChangeElement}
                            onTypeSelect={this.handleSetType}
                        />
                    ))}
                    <FloatingAddButton onClick={this.handleAddElement} />
                </List>
            </div>
        );
    }
}

InputList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputList);
