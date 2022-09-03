const BaseComponent = require('./base.component');

class HeaderComponent extends BaseComponent {
    constructor() {
        super('.devsite-header--inner');
    };

    input(name) {
        const selectors = {
            searchField: '.devsite-search-field',
        };
        return this.rootEl.$(selectors[name]);
    };
}

module.exports = HeaderComponent;