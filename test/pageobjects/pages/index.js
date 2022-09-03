const HomePage = require('./home.page');
const SearchResultsPage = require('./searchResults.page');
const PricingCalculator = require('./pricingCalculator.page');
const TenMinutEmail = require('./tenMinutEmail.page');
const TempailEmail = require('./tempailEmail.page');

function page(name) {
    const items = {
        home: new HomePage(),
        searchResults: new SearchResultsPage(),
        pricingCalculator: new PricingCalculator(),
        tenMinutEmail: new TenMinutEmail(),
        tempailEmail: new TempailEmail(),
    };
    return items[name];
};

module.exports = {
    page,
    HomePage,
    SearchResultsPage,
    PricingCalculator,
    TenMinutEmail,
    TempailEmail,
};