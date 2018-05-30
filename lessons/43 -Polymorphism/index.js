function HtmlElement() {
    this.click = () => console.log('clicked');
}

HtmlElement.prototype.focus = () => console.log('focused');

function HtmlSelectElement(items) {
    this.items = items || [];
    this.addItem = (item) => this.items.push(item);
    this.removeItem = (item) => this.items = this.items.filter(x => x !== item);

    const renderOption = item => `<option value="${item}">${item}</option>`

    this.render = () => 
        `
<select>
    ${this.items.map(renderOption) || ''}
</select>`;

}

HtmlSelectElement.prototype = new HtmlElement(); // ao invés de pegar o prototype,uso um novo objeto para ter acesso a funções de instância
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src) {
    this.src = src || '';

    this.render = () => `<img src="${this.src}" />`;
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;
