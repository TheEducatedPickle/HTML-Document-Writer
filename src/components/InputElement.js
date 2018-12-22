/*
Input element contains a single list item that takes user input via a text field
*/

import React from 'react';
import InputField from './InputTextField';
import InputDeleteButton from './InputDeleteButton';
import ListItem from '@material-ui/core/ListItem';
import InputTypeSelector from './InputTypeSelector';

class InputElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: this.props.index,
        }
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(string) {
        this.props.onChange(this.state.index, string);
    }

    handleDelete = () => {
        this.props.onDelete(this.state.index);
    }

    render() {
        return (
            <ListItem disableGutters>
                <InputTypeSelector />
                <InputField onChange={this.handleTextChange}/>
                <InputDeleteButton onClick={this.handleDelete}/>
            </ListItem>
        );
    }
}

export default InputElement;