/* eslint-disable max-len */
const BasePage = require('./base.page');
const TabsComponent = require('../components/pricingCalculator/tabs.component');
const TabBlockComponent = require('../components/pricingCalculator/tabBlock.component');
const EstimateBlockComponent = require('../components/pricingCalculator/estimateBlock.component');

class PricingCalculator extends BasePage {
    constructor() {
        super('');
        this.tabs = new TabsComponent();
        this.tabBlock = new TabBlockComponent();
        this.estimateBlock = new EstimateBlockComponent();
    };

    async goToFrames() {
        await browser.switchToFrame(await $('//devsite-iframe//iframe'));
        await browser.switchToFrame(await $('#myFrame'));
    };

    async getOutOfFrames() {
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[0]);
    };
}

module.exports = PricingCalculator;