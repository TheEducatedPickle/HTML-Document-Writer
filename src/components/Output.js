import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
const styles = theme => ({

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
        let startTemplate = '<!doctype html>\n<html lang="en">\n<head>\n\t<meta charset="utf-8">\n\t<title>The HTML5 Herald</title>\n\t<meta name="description" content="The HTML5 Herald">\n\t<meta name="author" content="SitePoint">\n\t<link rel="stylesheet" href="css/styles.css?v=1.0">\n</head>\n<body>\n'
        let endTemplate = '\t<script src="js/scripts.js"></script>\n</body>\n</html>'
        return (
            /*
            <div class='outputRoot'>
            { () => this.toHtml('test', 'paragraph', document.head.firstElementChild) }
            </div>
           <pre class="prettyprint">

           </pre>
           */
            <pre className={classes.output}>
                <h1 className={classes.header}>Output:</h1>
                <hr className={classes.hr} />
                <div className={classes.code}>
                    {startTemplate}
                    <div className={classes.userInput}>{
                        this.props.elementArray.map((text, index) => (
                            '\t<' + this.props.elementArray[index].type + '>'
                            + this.props.elementArray[index].text
                            + '</' + this.props.elementArray[index].type + '>' + '\n'
                        ))}
                    </div>
                    {endTemplate}
                </div>
            </pre>
        );
    }
}

export default withStyles(styles)(Output);