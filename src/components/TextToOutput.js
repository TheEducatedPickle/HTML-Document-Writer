import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import InputArrayToHTML from '../util/InputArrayToHTML'
const styles = theme => ({
    userInput: {
        background: '#eeeeee'
    }
});

class TextToOutput extends React.Component {
    render() {
        const { classes } = this.props;
        return (<div className={classes.userInput}>
            {InputArrayToHTML(this.props.elementArray)}
        </div>);
    }
}

export default withStyles(styles)(TextToOutput);