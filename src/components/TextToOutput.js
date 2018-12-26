import React from 'react'
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
    userInput: {
        background: '#eeeeee'
    }
});

class TextToOutput extends React.Component{
    formatOutput(string) {
        return string.split('\n').join('\n\t');
    }
    render() {
        const { classes } = this.props;
        return (<div className={classes.userInput}>{
            this.props.elementArray.map((text, index) => (
                '\t<' + this.props.elementArray[index].type + '>'
                + this.formatOutput(this.props.elementArray[index].text)
                + '</' + this.props.elementArray[index].type + '>' + '\n'
            ))}
        </div>);
    }
}

export default withStyles(styles)(TextToOutput);