/* eslint-disable max-len */
const BaseComponent = require('../common/base.component');
const ComputeEngineFormComponent = require('./tabBlock/computeEngineForm.component');

class TabBlockComponent extends BaseComponent {
    constructor() {
        super('//div[@ng-if="listingCtrl.activeTabs == tab.block"]');
        this.computeEngineForm = new ComputeEngineFormComponent();
    };

    get addToEstimateBtn() {
        return this.rootEl.$('button[aria-label="Add to Estimate"]');
    };

    getSelectValue(text) {
        return browser.$(`//body/div/md-select-menu//md-option//div[normalize-space(text())='${text}']`);
    };
};

module.exports = TabBlockComponent;