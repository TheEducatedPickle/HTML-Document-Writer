//Elements with these type values are ignored
const noText = ['div'];

//Recursively renders the text for output by printing each element and it's children, with nested formatting
function InputTreeToHTML(elementArray) {
    if (elementArray.length === 0) {
        return '';
    }
    return elementArray.map((text, index) => (
        '\t'.repeat(elementArray[index].getDepth()) + '<' + elementArray[index].type + '>'
        + InputTreeToHTML(elementArray[index].getChildren()) 
        + formatInputString(elementArray[index]) 
        + '</' + elementArray[index].type + '>' + '\n'
    ))
}
//Receives an input and applies the proper tabbing
function formatInputString(element) {
    //Check if the element type is any of the types that do not display text
    for (let i = 0; i < noText.length; i++) {
        if (element.getType() === noText[i]) return "";
    }
    let addTab = '\t'.repeat(element.getDepth());
    return element.getContent().split('\n').join('\n' + addTab);
}
export default InputTreeToHTML;