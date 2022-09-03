const BaseComponent = require('../../common/base.component');

class ComputeEngineEstimateComponent extends BaseComponent {
    constructor() {
        super('md-content #compute');
    };

    item(name) {
        const selectors = {
            class: '//div[contains(text(),"Provisioning model:")]',
            instance: '//div[contains(text(),"Instance type:")]',
            location: '//div[contains(text(),"Region:")]',
            ssd: '//div[contains(text(),"Local SSD:")]',
            cud: '//div[contains(text(),"Commitment term:")]',
            cost: '//div//b[contains(text(),"Estimated Component Cost:")]',
        };
        return this.rootEl.$(selectors[name]);
    };
}

module.exports = ComputeEngineEstimateComponent;