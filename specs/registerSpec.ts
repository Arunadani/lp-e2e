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
When("Enter username", async () => {
  await element(By.css(getEle("uname"))).sendKeys("aruna");
});
When("Enter email", async () => {
  await element(By.css(eleRegister.email)).sendKeys("arunarose@gmail.com");
});
When("Click Register", async () => {
  await element(By.css(eleRegister.submit)).click();
  browser.sleep(2000);
});
