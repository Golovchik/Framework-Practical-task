/* eslint-disable max-len */
const BasePage = require('./base.page');
const MainContentComponent = require('../components/tenMinuteEmail/mainContent.component');
const MailMessagesComponent = require('../components/tenMinuteEmail/mailMessages.component');

class TenMinutEmailPage extends BasePage {
    constructor() {
        super('https://10minutemail.com/');
        this.mainContent = new MainContentComponent();
        this.mailMessages = new MailMessagesComponent();
    }
}

module.exports = TenMinutEmailPage;