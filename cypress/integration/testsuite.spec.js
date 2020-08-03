/// <reference types="cypress" />

import FAQPage from './PageObjects/faq'
import navigation from './PageObjects/navigation'
import NewsPage from './PageObjects/newsPage'
import SignUpPage from './PageObjects/signup'
import Faker from 'Faker'

const nav=new   navigation
const faq=new   FAQPage
const news=new  NewsPage
const signup=new SignUpPage

before(function() {
  //defines data to be file to be used and assigns global variable
  cy.fixture('login').then(function(login) {
    this.login=login})
  })

describe('Check Pages AboutUs/FAQs/News', function() {

  beforeEach(function(){
    //runs before each test in the block
    cy.visit(this.login.BaseUrl, {  //login with basic auth, refers from fixture login.json
    auth: {
      username: this.login.User,
      password: this.login.Pass}
    })
  })

    it('Test Case 1: AboutUs Link loads AboutUs Page', function(){
      nav.clickaboutus()                                                //click about us menu element
      cy.title().should('eq','PrimaryBid.com | About Us, Our Mission')  //check page title
    })

    it('Test Case 2: FAQs link navigates to FAQs page', function(){
      nav.clickfaq()                                                     //click FAQ menu element
      faq.pagetitle().should('contain', 'Frequently Asked Questions')    //check text on element
  })

  it('Test Case 3: News link navigates to News page', function(){
      nav.clicknews()                                                 //click on News menu element
      cy.title().should('contain','PrimaryBid | News')                       //VALIDATE check page title
      news.featuredcontent().should('contain', 'Featured Content')      //VALIDATE featured content   
      news.allcontent().should('contain', 'All Content')                //VALIDATE All content
      news.filterbutton().should('be.visible').click()                  //clicks filter button
      news.filterWebinar().click({force: true})                          //Selects the webinar filter
      cy.contains('Webinar')                                            //VALIDATE that Webinar articles are visible on the page
  })
})

  describe('Sign Up', () => {
    const email = Faker.Internet.email();

    beforeEach(function(){
      //runs before each test in the block
      cy.visit(this.login.BaseUrl, {  //login with basic auth, refers from fixture login.json
      auth: {
        username: this.login.User,
        password: this.login.Pass}
      })
    })

    it('Test Case 4: User Signs Up', () => {
        nav.clicksignup()   //click on Signup Button
        cy.title().should('eq','PrimaryBid.com | Invest in new Share Offerings from listed companies')  //VALIDATION check page title
        signup.checkpagecontent().should('contain', 'Sign up')  //VALIDATION check page content is Sign up
        signup.emailtextbox().type('@wrongemail.com')  //VALIDATION checks for invalid email error
        signup.submitbutton().click   //click submit button
        cy.wait(12000)
        signup.emailerror().should('contain', 'The email you have entered is not valid')  //VALIDATION checks error msg for invalid email address
        signup.passtextbox().type('123456789')
        signup.confirmpasstextbox().type('987654321')
        signup.submitbutton().click   //click submit button
        signup.passworderror().should('contain', 'Passwords do not match')  //VALIDATION checks error msg for passwords that do not match
        signup.emailtextbox().type(email)   ///enter randomised email address using Faker Library
        signup.passtextbox().type('examplepassword')
        signup.confirmpasstextbox().type('examplepassword')
        signup.submitbutton().click   //click submit button
        signup.H1pageheader().should('contain', 'Welcome to PrimaryBid')  ///VALIDATION checks we got to the user detail page for valid details
    })
  })