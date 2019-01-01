//Elements with these type values are ignored
const noText = ['div'];

//Recursively renders the text for output by printing each element and it's children, with nested formatting
function InputTreeToHTML(elementArray) {
    if (elementArray.length === 0) {
        return '';
    }
    
    let output = elementArray.map((text, index) => ( elementArray[index].getChildren().length === 0 ?
        renderWithoutChildren(elementArray[index]) : renderWithChildren(elementArray[index])
    ))
    output[0] = output[0].substr(1);    //Remove first newLine
    return output;
    //return elementArray.map((text, index) => (renderWithChildren(elementArray[index])
}

//HTML elements are rendered with new line in between opening and closing markers, and children are rendered recursively
function renderWithChildren(element) {
    return formatTabbing('\n' + element.getOpeningTag()
        + '\n\t' + formatInputString(element) + '\n'
        + InputTreeToHTML(element.getChildren()) 
        + '\n' + element.getClosingTag())
}

//HTML elements are rendered in a single line
function renderWithoutChildren(element) {
    return formatTabbing('\n' + element.getOpeningTag()
        + formatInputString(element) 
        + InputTreeToHTML(element.getChildren()) 
        + element.getClosingTag())   
}
//Receives an input and applies the proper tabbing
function formatInputString(element) {
    //Check if the element type is any of the types that do not display text
    for (let i = 0; i < noText.length; i++) {
        if (element.getType() === noText[i]) return "";
    }
    return element.getContent();
}
function formatTabbing(string, amount=1) {
    let addTab = '\t'.repeat(amount);
    return string.split('\n').join('\n' + addTab);
}
export default InputTreeToHTML;