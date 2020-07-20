const { default: HomePage } = require("../PageObjects/HomePage")

///<reference types="Cypress"/>
import homePage from '../PageObjects/HomePage'
import ChoosePhonePage from '../PageObjects/ChoosePhonePage'
import SelectedPhonePage from '../PageObjects/SelectedPhonePage'
import CheckoutPage from '../PageObjects/CheckoutPage'

describe('Order Iphone 6', function () {

    Cypress.config('pageLoadTimeout', 100000)

   /* beforeEach(() => {
        // load example.json fixture file and store
        // in the test context object
        cy.fixture('customerdata').then((customer)=> {
            cy.log(customer.initials)
        })
      })*/
    before(function () {
       cy.BaseUrl()
    })

    const homePageObj= new homePage()
    it('Home Page', function () {
        homePageObj.acceptPopup()
        homePageObj.selectPhones()
        cy.url().should('include','/shop/mobiel/telefoon/')
        
    })

    const choosePhoneObj= new ChoosePhonePage()
    it('Choose IPhone 11', function () {
        choosePhoneObj.selectIPhone11()
    })

    const selectedPhoneObj= new SelectedPhonePage()
    it('Select Yellow IPhone 11 with Ziggo Internet,128GB,Red Essential Subscription and 1 Year Term', function () {
        cy.wait(4000)
        selectedPhoneObj.acceptPopup()
        selectedPhoneObj.handleZiggoAtHomePopup()
        selectedPhoneObj.select64GB()
        cy.get('[data-testid="vfz-sticky-receipt--monthly-cost"]').should('have.text','€ 54,00')
        selectedPhoneObj.selectYellowIPhone()
        cy.url().should('include','apple-iphone-11-64gb-yellow')
        selectedPhoneObj.selectWithZiggo()
        selectedPhoneObj.selectRedEssSubscrb()
        selectedPhoneObj.select1YearTerm()
        selectedPhoneObj.clickNextStepButton()
        selectedPhoneObj.selectNewSubscription()
        cy.wait(2000)
    })

    const checkoutPageObj= new CheckoutPage()

    it('Checkout', function () {   
         cy.fixture('customerdata').then((customer)=> {
        cy.log(customer.initials)
   

        cy.wait(4000)
        cy.get('h5').contains('Apple iPhone 11 64GB Yellow met Red Essential 1 jaar')
        checkoutPageObj.selectNextStepInShoppingCart()
        cy.log(customer.initials)
        checkoutPageObj.enterCustomerDetails(customer.initials,customer.lastname,customer.birthdate,
            customer.birthmonth,customer.birthyear,customer.phone,customer.email,customer.postcode,customer.housenumber,customer.country,customer.documentNumber,
            customer.expirydate,customer.expirymonth,customer.expiryyear,customer.ibanBankDigits,customer.ibanBankCode,customer.ibanAccountNumber)
        checkoutPageObj.enterDetailsInLoanTab()
        checkoutPageObj.enterDetailsInNumberPortingTab()
        checkoutPageObj.enterDetailsInOverviewTab()
        cy.get('[data-testid="name"]').contains('Dhr. R. Kumar')
        cy.get('[data-testid="birthday"]').should('have.text','18-06-1988')
        cy.get('[data-testid="phone"]').should('have.text','0684105405')
        cy.get('[data-testid="email"]').should('have.text','kumar.rohit005@gmail.com')
        cy.get('[data-testid="iban"]').should('have.text','NL13ABNA0846953498')
        cy.get('[data-testid="addressSticker"]').contains('Notenplein 152')
        cy.get('[data-testid="addressSticker"]').contains('2555 ZZ')
    })
    })

})