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
        this.props.onChange(string, this.state.index);
    }

    handleDelete = () => {
        this.props.onDelete(this.state.index);
    }

    handleSetType = (value) => {
        this.props.onTypeSelect(value, this.state.index);
    }

    render() {
        return (
            <ListItem style={{padding: 2}} disableGutters>
                <InputTypeSelector 
                    type={this.props.type} 
                    onChange={this.handleSetType}
                    label={'Block Type'}
                    options={[
                    {
                        label: 'Header',
                        value: 'h1',
                    },
                    {
                        label: 'Paragraph',
                        value: 'p'
                    },          
                    {
                        label: 'Div',
                        value: 'div',
                    },              
                    ]}
                />
                <InputField text={this.props.text} onChange={this.handleTextChange}/>
                <InputDeleteButton onClick={this.handleDelete}/>
            </ListItem>
        );
    }
}

export default InputElement;