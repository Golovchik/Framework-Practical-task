/* eslint-disable max-len */
const BaseComponent = require('../common/base.component');
const MailMessageComponent = require('./mailMessage.component');

class MailMessagesComponent extends BaseComponent {
    constructor() {
        super('.mail_messages');
        //this.mailMessage = new MailMessageComponent();
    };

    getMailMessage(position) {
        return new MailMessageComponent(position);
    };
}

module.exports = MailMessagesComponent;