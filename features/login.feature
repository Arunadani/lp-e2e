Feature: lifepluz URL Test
    @Initial
    Scenario: Homepage
        Given Open "lp" page
        When Check the logo
    @Detail
    Scenario: Registration
        When Click Signup
        When Enter username
        When Enter email
        When Click Register
    @Detail
    Scenario:Login
        Given Open "lp" page
        When Click on Login Menu
        When Is login Logo Displayed
        When Enter username
        When Enter password
        When Click on Remember me
        Then Click login

    @Detail
    Scenario: Navigation
        Given Open "lp" page
        # Then Click on menus one by one
        #When Select Random Author
        #When Select Random Category
        When Test quick links
#When Social Media Test

