/* eslint-disable max-len */
const BaseComponent = require('../common/base.component');
const ComputeEngineEstimateComponent = require('./estimateBlock/computeEngineEstimate.component');
const EmailYourEstimateComponent = require('./estimateBlock/emailYourEstimate.component');

class EstimateBlocComponent extends BaseComponent {
    constructor() {
        super('#resultBlock');
        this.computeEngineEstimate = new ComputeEngineEstimateComponent();
        this.emailYourEstimate = new EmailYourEstimateComponent();
    };

    get emailBtn() {
        return this.rootEl.$('#email_quote');
    }
};

module.exports = EstimateBlocComponent;