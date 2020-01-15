import { Given, When, Then } from "cucumber";
import { browser, element, By, $, $$, ExpectedConditions } from "protractor";
import { async } from "q";
import { getEle } from "../helper/lpHelper";

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;

let eleLogin = getEle("login");
var lpTitle = "lifepluz";
browser.waitForAngularEnabled(false);

Given("Open {string} page", async string => {
  if (string == "lp") {
    await browser.get("https://www.lifepluz.com/");
    //browser.sleep(5000);
  }
});

When("Check the logo", async () => {
  expect(element(By.css(".logo")).isDisplayed()).be.eventually.true;
  // expect(browser.getTitle()).to.eventually.equal(
  //   "Lifepluz – Bringing Life to You"
  // );
  //await expect(element(By.css(getEle("titleLogo")))).to.be.displayed;
});

When("Click on Login Menu", async () => {
  await element(By.cssContainingText(eleLogin.menu, "Login")).click();
});

When("Is login Logo Displayed", async () => {
  await expect(element(By.css(eleLogin.loginLogo))).to.be.displayed;
  browser.sleep(1000);
});

When("Enter password", async () => {
  await element(By.css(eleLogin.pwd)).sendKeys("Jesus@123");
});
When("Click on Remember me", async () => {
  await element(By.css(getEle("checkbox"))).click();
  browser.sleep(1000);
});
Then("Click login", async () => {
  await element(By.css(eleLogin.loginBtn)).click();
  browser.sleep(1000);
});
