import { Given, When, Then } from "cucumber";
import { browser, element, By, $, $$, ExpectedConditions } from "protractor";
import { async } from "q";
import { getEle } from "../helper/lpHelper";
import { protractor } from "protractor/built/ptor";
import { SSL_OP_EPHEMERAL_RSA } from "constants";
import { exists } from "fs";

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.use(require("chai-dom"));
const expect = chai.expect;

let eleLogin = getEle("login");
let eleRegister = getEle("register");
var lpTitle = "lifepluz";
browser.ignoreSynchronization = true;
browser.waitForAngularEnabled(false);

Given("Open {string} page", async (string) => {
  if (string == "lp") {
    await browser.get("https://www.lifepluz.com/");
    await browser.sleep(5000);
  }
});

When("Check the logo", async () => {
  await expect(element(By.css(".logo")).isDisplayed()).to.eventually.true;
});

When("Click on Login Menu", async () => {
  await element(By.cssContainingText(eleLogin.menu, "Login")).click();
});

When("Is login Logo Displayed", async () => {
  expect(element(By.css(eleLogin.loginLogo)).isDisplayed()).to.eventually.true;
  browser.sleep(1000);
});

When("Enter password", async () => {
  await element(By.css(eleLogin.pwd)).sendKeys("Jesus@123");
});
When("Click on Remember me", async () => {
  await element(By.css(getEle("checkbox"))).click();
  browser.sleep(1000);
});

Given("Enter username {string}", async (string) => {
  await browser.sleep(5000);
  element(By.id("user_login")).sendKeys(string);
  await browser.sleep(2000);
});
When("Enter password {string}", async (string) => {
  element(By.css(eleLogin.pwd)).sendKeys(string);
  await browser.sleep(2000);
});
Then("Click login", async () => {
  await browser.sleep(1000);
  await element(By.css("#loginform")).submit();
  await browser.sleep(7000);
});
Then("Is user logged In {string}", function (string) {
  console.log("PROFILE CHECK---");
  expect(
    element(By.cssContainingText(eleLogin.profileName, string)).isDisplayed()
  ).be.eventually.true;
  browser.sleep(1000);
});
Then("Logout", function () {
  console.log("LOGOUT");
  element(By.css(eleRegister.signup)).click();
  browser.sleep(1000);
});
