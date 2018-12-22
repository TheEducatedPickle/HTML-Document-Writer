import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    selectField: {
        width: 75
    }
});

class InputTypeSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'paragraph',
        }
    }

    handleChange = event => {
        this.setState({ type: event.target.value });
      };

    render() {
        const { classes } = this.props;
        return (
            <form>
                <InputLabel>Block Type</InputLabel>
                <Select
                    value={this.state.type}
                    onChange={this.handleChange}
                >
                    <MenuItem value={'paragraph'}>Paragraph</MenuItem>
                    <MenuItem value={'div'}>Div</MenuItem>
                </Select>
            </form>
        );
    }
}

InputTypeSelector.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputTypeSelector);
