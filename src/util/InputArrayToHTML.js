const noText = ['div'];

function InputArrayToHTML(elementArray) {
    return elementArray.map((text, index) => (
        '\t<' + elementArray[index].type + '>'
        + formatNewline(formatInputString(elementArray[index]))
        + '</' + elementArray[index].type + '>' + '\n'
    ))
}
function formatNewline(string) {
    return string.split('\n').join('\n\t');
}
function formatInputString(element) {
    for (let i = 0; i < noText.length; i++) {
        if (element.getType() === noText[i]) return "";
    }
    return element.getContent();
}
export default InputArrayToHTML;