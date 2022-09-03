/* eslint-disable max-len */
const {page} = require('../pageobjects/pages/index');
const dataLayer = require('../dataLayer.json');
const expect = require('chai').expect;

describe('Hardcore', function() {
    it('should matches amount received when passing the test manually', async () => {
        await page('home').open();

        const searchFieldEl = await page('home').header.input('searchField');
        await searchFieldEl.setValue(dataLayer.searchValue);
        await page('home').header.submit();

        const searchResultEl = await page('searchResults').searchItems.itemRef(dataLayer.searchResult);
        await searchResultEl.waitForDisplayed();
        await searchResultEl.click();

        await page('pricingCalculator').goToFrames();

        const productEl = await page('pricingCalculator').tabs.item(dataLayer.product);
        await productEl.waitForDisplayed();
        await productEl.click();

        const quantityEl = await page('pricingCalculator').tabBlock.computeEngineForm.item('quantity');
        await quantityEl.waitForDisplayed();
        await quantityEl.setValue(dataLayer.quantity);

        const labelEl = await page('pricingCalculator').tabBlock.computeEngineForm.item('label');
        await labelEl.waitForDisplayed();
        await labelEl.setValue(dataLayer.label);

        const osEl = await page('pricingCalculator').tabBlock.computeEngineForm.item('os');
        await osEl.waitForDisplayed();
        await osEl.click();
        const osSelectEl = await page('pricingCalculator').tabBlock.getSelectValue(dataLayer.os);
        await osSelectEl.waitForDisplayed();
        await osSelectEl.click();

        const classEl = await page('pricingCalculator').tabBlock.computeEngineForm.item('class');
        await classEl.waitForDisplayed();
        await classEl.click();
        const classSelectEl = await page('pricingCalculator').tabBlock.getSelectValue(dataLayer.class);
        await classSelectEl.waitForDisplayed();
        await classSelectEl.click();

        const seriesEl = await page('pricingCalculator').tabBlock.computeEngineForm.item('series');
        await seriesEl.waitForDisplayed();
        await seriesEl.click();
        const seriesSelectEl = await page('pricingCalculator').tabBlock.getSelectValue(dataLayer.series);
        await seriesSelectEl.waitForDisplayed();
        await seriesSelectEl.click();

        const instanceEl = await page('pricingCalculator').tabBlock.computeEngineForm.item('instance');
        await instanceEl.waitForDisplayed();
        await instanceEl.click();
        const instanceSelectEl = await page('pricingCalculator').tabBlock.getSelectValue(dataLayer.instance);
        await instanceSelectEl.waitForDisplayed();
        await instanceSelectEl.click();

        const addGPUsEl = await page('pricingCalculator').tabBlock.computeEngineForm.item('addGPUs');
        await addGPUsEl.waitForDisplayed();
        const ariaInvalidAddGPUs = addGPUsEl.getAttribute('aria-invalid');
        if (ariaInvalidAddGPUs !== `${dataLayer.addGPUs}`) {
            await addGPUsEl.click();
        };

        const gpuTypeEl = await page('pricingCalculator').tabBlock.computeEngineForm.item('gpuType');
        await gpuTypeEl.waitForDisplayed();
        await gpuTypeEl.click();
        const gpuTypeSelectEl = await page('pricingCalculator').tabBlock.getSelectValue(dataLayer.gpuType);
        await gpuTypeSelectEl.waitForDisplayed();
        await gpuTypeSelectEl.click();

        const gpuCountEl = await page('pricingCalculator').tabBlock.computeEngineForm.item('gpuCount');
        await gpuCountEl.waitForDisplayed();
        await gpuCountEl.click();
        const gpuCountSelectEl = await page('pricingCalculator').tabBlock.getSelectValue(dataLayer.gpuCount);
        await gpuCountSelectEl.waitForDisplayed();
        await gpuCountSelectEl.click();

        const ssdEl = await page('pricingCalculator').tabBlock.computeEngineForm.item('ssd');
        await ssdEl.waitForDisplayed();
        await ssdEl.click();
        const ssdSelectEl = await page('pricingCalculator').tabBlock.getSelectValue(dataLayer.ssd);
        await ssdSelectEl.waitForDisplayed();
        await ssdSelectEl.click();

        const locationEl = await page('pricingCalculator').tabBlock.computeEngineForm.item('location');
        await locationEl.waitForDisplayed();
        await locationEl.click();
        const locationSelectEl = await page('pricingCalculator').tabBlock.getSelectValue(dataLayer.location);
        await locationSelectEl.waitForDisplayed();
        await locationSelectEl.click();

        const cudEl = await page('pricingCalculator').tabBlock.computeEngineForm.item('cud');
        await cudEl.waitForDisplayed();
        await cudEl.click();
        const cudSelectEl = await page('pricingCalculator').tabBlock.getSelectValue(dataLayer.cud);
        await cudSelectEl.waitForDisplayed();
        await cudSelectEl.click();

        await page('pricingCalculator').tabBlock.addToEstimateBtn.click();

        const costEstimateEl = await page('pricingCalculator').estimateBlock.computeEngineEstimate.item('cost');
        await costEstimateEl.waitForDisplayed();
        const textCostEstimateEl = await costEstimateEl.getText();

        const emailBtnEl = await page('pricingCalculator').estimateBlock.emailBtn;
        await emailBtnEl.waitForDisplayed();
        await emailBtnEl.click();

        await page('pricingCalculator').getOutOfFrames();

        const urlMailGenerator = 'https://tempail.com/';
        const urlPricingCalculator = await browser.getUrl();
        await browser.newWindow(urlMailGenerator);

        const mailAddressEl = await page('tempailEmail').tempailContent.copyAddressBtn;
        await mailAddressEl.waitForDisplayed();
        await mailAddressEl.click();

        await browser.switchWindow(urlPricingCalculator);

        await page('pricingCalculator').goToFrames();
        const emailYourEstimateEl = await page('pricingCalculator').estimateBlock.emailYourEstimate.item('email');
        await emailYourEstimateEl.waitForDisplayed();
        await emailYourEstimateEl.setValue('');
        await browser.keys(['Control', 'v']);
        await page('pricingCalculator').estimateBlock.emailYourEstimate.sendEmailBtn.click();
        await page('pricingCalculator').getOutOfFrames();

        await browser.switchWindow(urlMailGenerator);

        const mailMessageRefEl = await page('tempailEmail').tempailContent.mailMessageRef;
        await mailMessageRefEl.waitForDisplayed({timeout: 100000, interval: 5000, timeoutMsg: 'The letter has not arrived'});
        await mailMessageRefEl.click();

        await browser.switchToFrame(await $('//iframe[@id="iframe"]'));

        const totalEstimatedCostEl = await page('tempailEmail').tempailContent.totalEstimatedCost;
        await totalEstimatedCostEl.waitForDisplayed();
        const textTotalEstimatedCost = await totalEstimatedCostEl.getText();

        expect(textCostEstimateEl).to.include(textTotalEstimatedCost);
    });
});
