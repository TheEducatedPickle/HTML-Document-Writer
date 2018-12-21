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
        width: '100%',
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
        this.handleChangeElement = this.handleChangeElement.bind(this);
    }

    /*
    handleClick = () => {
      this.setState(state => ({ open: !state.open }));
    };
    */
    
    //Adds an input element to the array
    handleAddElement() {
        //console.log(this.state.ElementArray);
        this.setState(prevState => ({
            ElementArray: prevState.ElementArray.concat(''),
        }))
    }

    //Removes an element at a given index from the list
    handleRemoveElement(index) {
        //console.log('Deleting element at index ' + index);
        this.setState(prevState => ({
            ElementArray: prevState.ElementArray.slice(0, index).concat(prevState.ElementArray.slice(index+1))
        }))
    }

    handleChangeElement(index, string) {
        console.log(index + " : " + string)
        this.setState(prevState => ({
            /*
            ElementArray: (index, string) => {
                let out = prevState.ElementArray.slice();
                out.ElementArray[index] = string;
                return out;
            },
            */
        }))
    }

    render() {
        const { classes } = this.props;

        return (
            <List component="list" className={classes.root}>
                {this.state.ElementArray.map((text, index) => (
                    <InputElement 
                        key={index} 
                        index={index} 
                        onDelete={this.handleRemoveElement}
                        onChange={this.handleChangeElement}    
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
