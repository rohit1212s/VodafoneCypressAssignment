
///<reference types="Cypress"/>

class CheckoutPage
{
    
    // Select Next Step in Shopping Cart Tab
    selectNextStepInShoppingCart()
    {
        const selectNextStepInShoppingCart= cy.contains('Volgende stap')
        selectNextStepInShoppingCart.click()   
        cy.log('Selected Next Step in Shopping Cart Tab in Checkout Page')
    }

    // Enter Customer Details in Data Tab
    enterCustomerDetails(initials,lastname,birthdate,birthmonth,birthyear,phone,email,postcode,housenumber,country,documentnumber,
        expirydate,expirymonth,expiryyear,ibanBankDigits,ibanBankCode,ibanAccountNumber)
    {
        cy.get('input#gender-MALE').check({force: true})
        cy.get('#gegevens-initials').type(initials)
        cy.get('#gegevens-lastName').type(lastname)
        cy.get('#gegevens-birthdate-day').type(birthdate)
        cy.get('#gegevens-birthdate-month').type(birthmonth)
        cy.get('#gegevens-birthdate-year').type('1988')
        .type('{enter}')
        cy.contains('Volgende').click({force: true})
        cy.get('#contact-phone1').type(phone)
        cy.get('#contact-email').type(email)
        .type('{enter}')
        cy.get('[name="billingAddress.postcode"]').type(postcode)
        cy.get('[name="billingAddress.houseNumber"').type(housenumber)
        .type('{enter}')
        cy.get('div.EspGrid__EspGridItem-sc-15d1jrx-0.PersonalDetails___StyledEspGridItem-jugt1j-0.ieTWGY > div:nth-child(3) > div > div > div > form > div > div > div.EspFormGroup2__ReadyMessage-sc-1ibr6w0-0.cdGpQx > div > button').click()
        cy.wait(4000)
        cy.get('#nationality').select(country)
        cy.get('#type').select('Paspoort')
        cy.get('#legitimatie-documentNumber').type(documentnumber)
        cy.get('#legitimatie-expiryDate-day').type(expirydate)
        cy.get('#legitimatie-expiryDate-month').type(expirymonth)
        cy.get('#legitimatie-expiryDate-year').type(expiryyear)
        .type('{enter}')
        cy.get('[data-testid="ibanBankDigits"]').type(ibanBankDigits)
        cy.get('[data-testid="ibanBankCode"]').type(ibanBankCode)
        cy.get('[data-testid="ibanAccountNumber"]').type(ibanAccountNumber)
        .type('{enter}')
        cy.contains('Volgende stap').click()
        cy.wait(4000)
        cy.log('Populated Customer Data')
    }

    enterDetailsInLoanTab(){
        cy.get('#familyType').select('Alleenstaand met kinderen')
        cy.get('#ilt-form-income').type('4000')
        cy.get('#ilt-form-housingCosts').type('1500') 
        .type('{enter}')
        cy.contains('Volgende stap').click()
    }

    enterDetailsInNumberPortingTab(){
        cy.contains('Volgende stap').click()
    }

    enterDetailsInOverviewTab(){
        cy.get('input#mobileNumberInfo').check({force: true}).should('be.checked')
    }


}

export default CheckoutPage