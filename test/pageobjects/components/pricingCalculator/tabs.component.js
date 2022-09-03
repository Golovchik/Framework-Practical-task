const BaseComponent = require('../common/base.component');

class TabsComponent extends BaseComponent {
    constructor() {
        super('md-tabs');
    };

    item(text) {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        const alphabetUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        // eslint-disable-next-line max-len
        return this.rootEl.$(`//div[contains(translate(@title, '${alphabet}', '${alphabetUpperCase}'), '${text.toUpperCase()}') or (@title = '${text}')]`);
    }
}

module.exports = TabsComponent;