import { Given, When, Then } from "cucumber";
import {
  browser,
  element,
  By,
  $,
  $$,
  ExpectedConditions,
  ElementFinder
} from "protractor";
import { async } from "q";
import { getEle } from "../helper/lpHelper";
import chai from "chai";
var expect = chai.expect;
//let eleLogin = getEle("login");
let eleRegister = getEle("register");
var lpTitle = "lifepluz";

When("Click Signup", async () => {
  await element(By.css(eleRegister.signup)).click();
  browser.sleep(1000);
});

Then("Enter email {string}", async string => {
  await element(By.css(eleRegister.email)).sendKeys(string);
});
Then("Click Register", async () => {
  await element(By.css(eleRegister.submit)).click();
  browser.sleep(2000);
});
