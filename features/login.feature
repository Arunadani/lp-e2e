Feature: lifepluz E2E Test
    @Initial
    Scenario: Homepage
        Given Open "lp" page
        When Check the logo
    @Initial
    Scenario: Navigation
        Given Open "lp" page
        Then Click on menus one by one
        When Select Random Author
        When Select Random Category
        When Test quick links
        When Social Media Test

    @Initial
    Scenario: All Catergory List Test
        Given Open "lp" page
        When Click on "Cancer" menu
        When Click on "Pets" menu
        When Click on "Education" menu
        And Check "Education" submenus and Click one after one
        When Click on "Growing Up" menu
        And Check "Growing Up" submenus and Click one after one
        When Click on "Health" menu
        And Check "Health" submenus and Click one after one
        When Click on "Parenting" menu
        And Check "Parenting" submenus and Click one after one
        When Click on "Travel" menu
        And Check "Travel" submenus and Click one after one

    @Initial
    Scenario Outline: Scenario Outline :Registration
        Given Open "lp" page
        When Click Signup
        Then Enter username "<username>"
        And Enter email "<email>"
        Then Click Register
        Examples:
            | username | email                  |
            | Test     | arunarani.ec@gmail.com |

    @Initial
    Scenario Outline: Scenario Outline :Login
        Given Open "lp" page
        When Click on Login Menu
        When Is login Logo Displayed
        Then Enter username "<username>"
        And Enter password "<password>"
        #When Click on Remember me
        And Click login
        Then Is user logged In "<username>"
        Then Logout

        Examples:
            | username | password    |
            | aruna    | Testone@123 |














