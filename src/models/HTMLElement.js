class HTMLElement {
    constructor(depth) {
        this.depth = depth;
        this.type = 'p';
        this.content = '';
        this.children = new Array(0);
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
    addChild(newElement) {
        this.children.push(newElement);
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
    getDepth() {
        return this.depth;
    }
}

export default HTMLElement;