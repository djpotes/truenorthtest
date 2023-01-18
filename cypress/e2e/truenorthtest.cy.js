describe('Truenorth Tests', () => {
    it('Sort Currencies', () => {
        cy.visit("/");
        cy.get("body button.ccc-accept-button").click();
        cy.wait(2000);
        cy.xpath("//h2[contains(text(),'Markets latest')]/parent::div/parent::div").then($body => {
            let currencies = [];
            let sortCurrencies = [];
            const tableRows = $body.find(".index-value span");
            const tableSize = tableRows.length;
            for (let i = 0; i < tableSize; i++) {
                const floatNumber = parseFloat(tableRows[i].innerText.replace(",", ""))
                currencies.push(floatNumber);
            }
            cy.log("Sort Currencies");
            sortCurrencies = currencies.sort(function(a, b){return a-b});
            for (let i = 0; i < sortCurrencies.length; i++) {
                cy.log(sortCurrencies[i]);
            }
        });
    });
});


