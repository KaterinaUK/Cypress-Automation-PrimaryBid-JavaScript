/// <reference types="cypress" />

class FAQPage
{

pagetitle()
{
return cy.get('.d-none > h1')
}

}

export default FAQPage