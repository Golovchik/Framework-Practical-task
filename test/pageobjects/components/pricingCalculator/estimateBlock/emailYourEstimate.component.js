const BaseComponent = require('../../common/base.component');

class EmailYourEstimateComponent extends BaseComponent {
    constructor() {
        super('form[name=emailForm]');
    };

    get sendEmailBtn() {
        return this.rootEl.$('[aria-label="Send Email"]');
    };

    item(name) {
        const selectors = {
            email: 'input[ng-model="emailQuote.user.email"]',
        };
        return this.rootEl.$(selectors[name]);
    };
}

module.exports = EmailYourEstimateComponent;