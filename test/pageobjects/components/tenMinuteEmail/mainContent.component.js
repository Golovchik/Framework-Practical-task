const BaseComponent = require('../common/base.component');

class MainContentComponent extends BaseComponent {
    constructor() {
        super('#main_content');
    };

    get copyAddressBtn() {
        return this.rootEl.$('#copy_address');
    }
}

module.exports = MainContentComponent;