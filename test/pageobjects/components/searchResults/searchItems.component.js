const BaseComponent = require('../common/base.component');

class SearchItemsComponent extends BaseComponent {
    constructor() {
        super('devsite-content');
    };

    itemRef(text) {
        return this.rootEl.$(`//b[normalize-space(text())='${text}']`);
    }
}

module.exports = SearchItemsComponent;