import React from 'react';
import InputField from './InputField';
import InputDeleteButton from './InputDeleteButton';
import { Grid } from '@material-ui/core';

class InputElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <Grid>
                <InputField />
                <InputDeleteButton />
            </Grid>
        );
    }
}

export default InputElement;