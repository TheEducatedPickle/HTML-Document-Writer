class HTMLElement {
    constructor(depth, parent) {
        this.depth = depth;
        this.type = 'p';
        this.content = '';
        this.children = new Array(0);
        this.parent = parent;
        this.fields = new Array(0);
    }
    setDepth(depth) {
        this.depth = depth;
    }
    setType(type) {
        this.type = type;
    }
    setContent(content) {
        this.content = content;
    }
    addChild() {
        this.children.push(new HTMLElement(this.depth + 1, this));
    }
    removeChild(index) {
        this.children.splice(index, 1);
    }
    getParent() {
        return this.parent;
    }
    getType() {
        return this.type;
    }
    getContent() {
        return this.content;
    }
    getChildren() {
        return this.children;
    }
    getChild(index) {
        return this.children[index];
    }
    getDepth() {
        return this.depth;
    }
    getOpeningTag() {
        if (this.type === 'custom') {
            return '';
        } 
        return '<' + this.type + '>';
    }
    getClosingTag() {
        if (this.type === 'custom') {
            return '';
        } 
        return '</' + this.type + '>';
    }
}

export default HTMLElement;