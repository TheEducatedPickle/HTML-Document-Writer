/*
TextToHTML.js encodes the input tree as HTML using the InputTreeToHTML.js utility
*/

import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import InputTreeToHTML from '../../util/InputTreeToHTML'
const styles = theme => ({
    userInput: {
        background: '#eeeeee'
    }
});

class TextToOutput extends React.Component {
    render() {
        const { classes } = this.props;
        let startTemplate = '<!doctype html>\n<html lang="en">\n<head>\n\t<meta charset="utf-8">\n\t<title>TextToHTML</title>\n\t<meta name="description" content="Description placeholder">\n\t<meta name="author" content="TextToHTML">\n\t<link rel="stylesheet" href="css/styles.css?v=1.0">\n</head>\n<body>'
        let endTemplate = '\t<script src="js/scripts.js"></script>\n</body>\n</html>'
        return (
            <div>
                {startTemplate}
                <div className={classes.userInput}>
                    {InputTreeToHTML(this.props.elementArray)}
                </div>
                {endTemplate}
            </div>
        );
    }
}

export default withStyles(styles)(TextToOutput);