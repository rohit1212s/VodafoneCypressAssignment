
///<reference types="Cypress"/>
class ChoosePhonePage
{

// Select IPhone 11
    selectIPhone11()
    {
        const selectIPhone11=cy.get('#apple-iphone-11-64gb-white')
        selectIPhone11.click()   
        cy.log('Selected IPhone 11')
    }

}

export default ChoosePhonePage