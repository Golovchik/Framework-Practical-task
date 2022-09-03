const BaseComponent = require('../common/base.component');

class MailMessageComponent extends BaseComponent {
    constructor(position) {
        super('.mail_message');
        this.position = position;
    };

    get rootEl() {
        return $$(this.rootSelector)[this.position];
    };
}

module.exports = MailMessageComponent;