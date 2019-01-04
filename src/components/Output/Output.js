/*
Output.js is the frame for displaying the output code
*/

import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import TextToHTML from './TextToHTML';
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
        tabSize: 3,
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
                                <TextToHTML elementArray={this.props.elementArray} />
                            </div>
                    </pre>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(Output);