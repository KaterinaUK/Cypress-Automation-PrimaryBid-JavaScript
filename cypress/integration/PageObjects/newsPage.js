/// <reference types="cypress" />

class NewsPage
{
    featuredcontent()
    {
    return cy.get(':nth-child(1) > .title--line-teal-flex')
    }

    allcontent()
    {
    return cy.get(':nth-child(3) > .title--line-teal-flex')
    }

    filterbutton()
    {
    return cy.get('[data-testid=news-filter-button]')
    }

    filterWebinar()
    {
    return cy.get('[data-testid=news-filter-checkbox-Webinar] > .pb_news_filter__checkbox_iEUe')
    }

}

export default NewsPage