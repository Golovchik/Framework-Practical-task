/* eslint-disable max-len */
const BasePage = require('./base.page');
const TempailContentComponent = require('../components/tempailEmail/tempailContent.component');

class TempailEmail extends BasePage {
    constructor() {
        super('https://tempail.com/');
        this.tempailContent = new TempailContentComponent();
    }
}

module.exports = TempailEmail;