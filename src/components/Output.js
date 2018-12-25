import React from 'react'

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
        return (
            /*
            <div class='outputRoot'>
            { () => this.toHtml('test', 'paragraph', document.head.firstElementChild) }
            </div>
           <pre class="prettyprint">

           </pre>
           */
            <pre>
                <h1>Output:</h1>
                <hr></hr>
                <code class="html">
                    {this.props.elementArray.map((text, index) => (
                        '<' + this.props.elementArray[index].type + '>'
                        + this.props.elementArray[index].text 
                        +'</' + this.props.elementArray[index].type + '>' + '\n'
                    ))}
                </code>
            </pre>
        );
    }
}

export default Output;