import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import TextToOutput from './TextToOutput';
import { Paper } from '@material-ui/core';
/*
import ContainedButton from './ContainedButton';
import FormButton from './FormButton';
*/
const styles = theme => ({

    output: {
        padding: '5%',
        paddingTop: '1.5%'
    },
    header: {
        marginBottom: 4,
    },
    hr: {
        marginBottom: 12,
    },
    code: {
        color: '#333333',
        fontSize: 14,
        lineHeight: 1.2,
        tabSize: 4,
    },
    userInput: {
        background: '#eeeeee'
    }
});

class Output extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    toHtml(string, type, parent) {
        const output = document.createElement(type);
        output.innerHTML = string;
        document.body.insertBefore(output, parent);
        console.log(output);
    }
    render() {
        const { classes } = this.props;
        let startTemplate = '<!doctype html>\n<html lang="en">\n<head>\n\t<meta charset="utf-8">\n\t<title>TextToHTML</title>\n\t<meta name="description" content="Description placeholder">\n\t<meta name="author" content="TextToHTML">\n\t<link rel="stylesheet" href="css/styles.css?v=1.0">\n</head>\n<body>\n'
        let endTemplate = '\t<script src="js/scripts.js"></script>\n</body>\n</html>'
        return (
            /*
            <div class='outputRoot'>
            { () => this.toHtml('test', 'paragraph', document.head.firstElementChild) }
            </div>
           <pre class="prettyprint">

           </pre>
           */
            <div>
                {/*}
                <ContainedButton label='Preview'/>
                <FormButton label='Download' />
                */}
                <Paper className={classes.output}>
                    <pre>
                        <h2 className={classes.header}>Output:</h2>
                        <hr className={classes.hr} />
                        <div className={classes.code}>
                            {startTemplate}
                            <TextToOutput elementArray={this.props.elementArray} />
                            {endTemplate}
                        </div>
                    </pre>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(Output);