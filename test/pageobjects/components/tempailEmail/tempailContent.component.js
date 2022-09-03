const BaseComponent = require('../common/base.component');

class TempailContentComponent extends BaseComponent {
    constructor() {
        super('//html[@lang]');
    };

    get copyAddressBtn() {
        return this.rootEl.$('.kopyala-link');
    }

    get mailMessageRef() {
        return this.rootEl.$('#epostalar li:nth-child(2) a');
    }

    get totalEstimatedCost() {
        return $('tr:last-child td:last-child h3');
    };
}

module.exports = TempailContentComponent;