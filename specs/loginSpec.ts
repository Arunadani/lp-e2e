import { Given, When, Then } from "cucumber";
import { browser, element, By, $, $$, ExpectedConditions } from "protractor";
import { async } from "q";
import { getEle } from "../helper/lpHelper";
import chai from "chai";
var expect = chai.expect;
let eleLogin = getEle("login");
var lpTitle = "lifepluz";

Given("Open {string} page", async string => {
  if (string == "lp") {
    await browser.get("https://www.lifepluz.com/");
    browser.sleep(2000);
  }
});

When("Check the logo", async () => {
  console.log("logo check");
  await expect(element(By.css(getEle("titleLogo")))).to.exist;
});

When("Click on Login Menu", async () => {
  await element(By.cssContainingText(eleLogin.menu, "Login")).click();
});

When("Is login Logo Displayed", async () => {
  await expect(element(By.css(eleLogin.loginLogo))).to.exist;
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
