/* eslint-disable max-len */
const BasePage = require('./base.page');
const SearchItemsComponent = require('../components/searchResults/searchItems.component');

class SearchResults extends BasePage {
    constructor() {
        super('');
        this.searchItems = new SearchItemsComponent();
    }
}

module.exports = SearchResults;