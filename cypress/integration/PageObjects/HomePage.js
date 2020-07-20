
///<reference types="Cypress"/>
class HomePage
{

// Click on Accept Button in the Popup
    acceptPopup()
    {
        const acceptPopup=cy.contains('Accepteren').should('be.visible')
        acceptPopup.click()   
        cy.log('Clicked on Accept Button in Popup')
    }

// Click on Phones Button in the Home Page
    selectPhones()
    {
        const selectPhones=cy.contains('Telefoons').should('be.visible')
        selectPhones.click()
        cy.log('Clicked on Phones Button in the Home Page')
    }

}

export default HomePage