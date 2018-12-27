import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    selectInput: {
        width: 30,
        padding: 10,
    }
});

class InputTypeSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type,
        }
    }

    handleChange = event => {
        this.props.onChange(event.target.value);
      };

    render() {
        return (
            <form className='selectInput'>
                <InputLabel style={{fontSize: 12}}>{this.props.label}</InputLabel>
                <Select
                    value={this.props.type}
                    onChange={this.handleChange}
                >
                    {this.props.options.map((text, index) => (
                        <MenuItem value={this.props.options[index].value}>
                            {this.props.options[index].label}
                        </MenuItem>
                    ))}
                </Select>
            </form>
        );
    }
}

InputTypeSelector.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputTypeSelector);
