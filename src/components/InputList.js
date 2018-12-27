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
    list: {
        backgroundColor: 'transparent',
    },
});

class InputList extends React.Component {

    //Adds an input element to the array
    handleAddElement = (depth) => {
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
                            depth={this.props.elementArray[index].getDepth()}
                            type={this.props.elementArray[index].getType()}
                            onAdd={this.handleAddElement}
                            onDelete={this.handleRemoveElement}
                            onChange={this.handleChangeElement}
                            onTypeSelect={this.handleSetType}
                            text={this.props.elementArray[index].getContent()}
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
