/// <reference types="cypress" />

class SignUpPage
{
    checkpagecontent()
    {
    return cy.get('.top-border-teal > h2')
    }

    emailtextbox()
    {
    return cy.get('[name="email"]')
    }

    submitbutton()
    {
    return cy.get('.cta-1 > .d-flex')
    }

    emailerror()
    {
    return cy.get('form > :nth-child(3)')
    }

    passtextbox()
    {
    return cy.get('[name="password"]')
    }

    confirmpasstextbox()
    {
    return cy.get('[name="confirmPassword"]')
    }

    passworderror()
    {
    return cy.get('form > :nth-child(6)')
    }

    H1pageheader()
    {
    return cy.get('h1')
    }
}

export default SignUpPage