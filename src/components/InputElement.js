import React from 'react';
import InputField from './InputField';
import InputDeleteButton from './InputDeleteButton';
import ListItem from '@material-ui/core/ListItem';

class InputElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <ListItem disableGutters>
                <InputField />
                <InputDeleteButton />
            </ListItem>
        );
    }
}

export default InputElement;