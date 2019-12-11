Feature: lifepluz URL Test

    Scenario: Homepage
        Given Open "lp" page
        When Check the logo

    # Scenario: Registration
    #     When Click Signup
    #     When Enter username
    #     When Enter email
    #     When Click Register

    # Scenario:Login
    #     Given Open "lp" page
    #     When Click on Login Menu
    #     When Is login Logo Displayed
    #     When Enter username
    #     When Enter password
    #     When Click on Remember me
    #     Then Click login

    Scenario: Navigation
        Given Open "lp" page
        Then Click on Catergories Menu
        Then Click on Authors Menu
        Then Click on Talk to us Menu


# Scenario: MouseMove
#     Given Perform Mousemove Action
