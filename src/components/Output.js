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
            */
           <pre class="prettyprint">
            <code class="language-java">

            </code>
           </pre>
        );
    }
}

export default Output;