const test = 'test&<=';
const type = 'div';
toHtml(test, type, document.head.firstElementChild);

function toHtml (string, type, parent) {
    const output = document.createElement(type);
    output.innerHTML = string;
    document.body.insertBefore(output, parent);
    console.log(output);
}