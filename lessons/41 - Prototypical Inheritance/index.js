function HtmlElement() {
    this.click = () => console.log('clicked');
}

HtmlElement.prototype.focus = () => console.log('focused');

function HtmlSelectElement() {
    this.items = [];
    this.addItem = (item) => this.items.push(item);
    this.removeItem = (item) => this.items = this.items.filter(x => x !== item);
}

HtmlSelectElement.prototype = new HtmlElement(); // ao invés de pegar o prototype,uso um novo objeto para ter acesso a funções de instância
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
