/// <reference types="cypress" />

class NavigationMenu
{

clickaboutus()
    {
    const field=cy.get(".col-xl-6 > [href='/about']")    
    field.click()
    return  this
    }

clickfaq()
    {
    const field=cy.get(".col-xl-6 > [href='/faqs']")    
    field.click()
    return  this    
    }

clicknews()
    {
    const field=cy.get(".col-xl-6 > [href='/news']")    
    field.click()
    return  this    
    }
    
clicksignup()
    {
    const field=cy.get('.col-xl-3.d-none > .button--teal')    
    field.click()
    return  this    
    }

}

export default NavigationMenu