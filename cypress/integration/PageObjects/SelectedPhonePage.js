
///<reference types="Cypress"/>
class SelectedPhonePage
{

    //Close Ziggo Popup
    handleZiggoAtHomePopup(){
        const closePopup= cy.get('.vfz-modal__button-close')
        closePopup.click()   
        cy.log('Handled Ziggo at Home Popup')
        
    }

    // Select 64GB IPhone11
    select64GB()
    {
        const select64GB= cy.get('[data-testid="vfz-mobile-pdp--selected-capacity-64GB"]')  
        select64GB.click()   
        cy.log('Selected 64GB')
    }

    // Select 128GB IPhone11
    select128GB()
    {
        const select128GB=cy.get('[data-testid="vfz-mobile-pdp--selected-capacity-128GB"]')
        select128GB.click()   
        cy.log('Selected 128GB')
    }

    // Select 256GB IPhone11
    select256GB()
    {
        const select256GB=cy.get('[data-testid="vfz-mobile-pdp--selected-capacity-256GB"]')
        select256GB.click()   
        cy.log('Selected 256GB')
    }

    //Select Yellow IPhone
    selectYellowIPhone()
    {
        const selectYellowIPhone=cy.get('#color-5')
        selectYellowIPhone.click()   
        cy.log('Selected Yellow IPhone 11')
    }


    //Without Ziggo Internet at Home
    selectWithoutZiggo()
    {
        const selectWithoutZiggo=cy.contains('Nee, ik heb geen Ziggo')
        selectWithoutZiggo.click()   
        cy.log('Selected without Ziggo Internet at Home')
    }

    //With Ziggo Internet at Home
        selectWithZiggo()
    {
        const selectWithZiggo=cy.contains('Ja, ik heb Ziggo')
        selectWithZiggo.click()   
        cy.log('Selected with Ziggo Internet at Home')
    }

    //Select Red Unlimited Subscription
    selectRedUnlmtdSubscrb()
    {
        const selectRedUnlmtdSubscrb= cy.get('[data-testid="vfz-subscription-listing--Red Unlimited"]')
        selectRedUnlmtdSubscrb.click()   
        cy.log('Selected Red Unlimited Subscription')
    }

     //Select Red Together Subscription
     selectRedTogetherSubscrb()
     {
         const selectRedTogetherSubscrb= cy.get('[data-testid="vfz-subscription-listing--Red Together"]')
         selectRedTogetherSubscrb.click()   
         cy.log('Selected Red Together Subscription')
     }

      //Select Red Subscription
      selectRedSubscrb()
      {
          const selectRedSubscrb=cy.get('[data-testid="vfz-subscription-listing--Red"]')
          selectRedSubscrb.click()   
          cy.log('Selected Red Subscription')
      }

    //Select Red Essential Subscription
    selectRedEssSubscrb()
      {
          const selectRedEssSubscrb=cy.get('[data-testid="vfz-subscription-listing--Red Essential"]')
          selectRedEssSubscrb.click()   
          cy.log('Selected Start Red Essential Subscription')
      }

      //Select Start XL Subscription
      selectStartXLSubscrb()
      {
          const selectStartXLSubscrb=cy.get('[data-testid="vfz-subscription-listing--Start XL"]')
          selectStartXLSubscrb.click()   
          cy.log('Selected Start XL Subscription')
      }

      //Select Start L Subscription
      selectStartLSubscrb()
      {
          const selectStartLSubscrb= cy.get('[data-testid="vfz-subscription-listing--Start L"]')
          selectStartLSubscrb.click()   
          cy.log('Selected Start L Subscription')
      }

      //Select Start M Subscription
      selectStartMSubscrb()
      {
          const selectStartMSubscrb=cy.get('[data-testid="vfz-subscription-listing--Start M"]')
          selectStartMSubscrb.click()   
          cy.log('Selected Start M Subscription')
      }

       //Select 2 years Term
       select2YearsTerm()
       {
           const select2YearsTerm=cy.get('[data-testid="vfz-duration--2 jaar"]')
           select2YearsTerm.click()   
           cy.log('Selected 2 years Term')
       }

       //Select 1 year Term
       select1YearTerm()
       {
           const select1YearTerm=cy.get('[data-testid="vfz-duration--1 jaar"]')
           select1YearTerm.click()   
           cy.log('Selected 1 year Term')
       }

         //Click Next Step Button
         clickNextStepButton()
         {
             const clickNextStepButton=cy.contains('Volgende stap')
             clickNextStepButton.click()   
             cy.log('Clicked Next Step Button')
         }

           //Select New Subscription in Popup
           selectNewSubscription()
           {
               const selectNewSubscription=  cy.contains('Ik wil een nieuw abonnement')
               selectNewSubscription.click()   
               cy.log('Selected New Subscription in Popup')
           }

             //Select Renew Subscription in Popup
             selectRenewSubscription()
         {
             const selectRenewSubscription= cy.contains('Ik wil verlengen')
             selectRenewSubscription.click()   
             cy.log('Selected Renew Subscription in Popup')
         }

         // Click on Accept Button in the Popup
        acceptPopup()
        {
            const acceptPopup=cy.contains('Accepteren').should('be.visible')
            acceptPopup.click()   
            cy.log('Clicked on Accept Button in Popup')
        }

}

export default SelectedPhonePage