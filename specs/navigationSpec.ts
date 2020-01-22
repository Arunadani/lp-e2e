import { Given, When, Then } from "cucumber";
import {
  browser,
  element,
  By,
  $,
  $$,
  ExpectedConditions,
  ElementFinder,
  ElementArrayFinder
} from "protractor";
import { async } from "q";
import { getEle } from "../helper/lpHelper";
import { protractor } from "protractor/built/ptor";

/*import chai = require("chai");
chai.use(require("chai-smoothie"));
var expect = chai.expect;*/

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;

let eleNav = getEle("navigation");
var lpTitle = "lifepluz";

browser.ignoreSynchronization = true;
browser.waitForAngularEnabled(false);


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

async function categoryAuthorSelection(eleMain: ElementFinder) {
  browser.sleep(2000);
  await browser
    .actions()
    .mouseMove(eleMain)
    .perform();
  await browser.sleep(2000);
}

function quikLinks(displayEle: string) {
  browser.sleep(5000);
  browser.getWindowHandle().then(function(parentGUID) {
    browser.getAllWindowHandles().then(function(allGUID) {
      for (let guid of allGUID) {
        if (guid != parentGUID) {
          browser.sleep(2000);
          browser.switchTo().window(guid);
          browser.sleep(5000);
          expect(element(By.css(displayEle)).isDisplayed()).be.eventually.true;
          browser.sleep(2000);
          browser.driver.close();
          browser.switchTo().window(parentGUID);
          browser.sleep(3000);
          expect(element(By.css(".logo")).isDisplayed()).be.eventually.true;
          browser.sleep(1000);
          break;
        }
      }
    });
  });
}

Then("Click on menus one by one", async () => {
  let menuArray: Array<string> = ["Categories", "Authors", "Talk to Us"];
  let eleArray = element.all(By.css(eleNav.menuList));
  browser.ignoreSynchronization = true;
  browser.waitForAngularEnabled(false);

  for (let i = 0; i < 2; i++) {
    // eleArray
    //   .get(i)
    //   .getText()s
    //   .then(function(text) {
    //     console.log("Nav text" + text);
    /* for mousehover*/
    //console.log("Nav menu---" + i);
    await browser
      .actions()
      .mouseMove(eleArray.get(i))
      .perform();
    await browser.sleep(2000);
  }
});

When("Test quick links", async () => {
  let quickLinkList: Array<string> = ["About Us", "Terms of Use", "Disclaimer"];

  for (let i = 0; i < 3; i++) {
    await element(
      By.cssContainingText(eleNav.quickLinks, quickLinkList[i])
    ).click();
    quikLinks(eleNav.quickLinksDisplay);
  }
});

When("Social Media Test", async () => {
  for (let i = 0; i < 3; i++) {
    //console.log("clickLink---" + eleNav.socialMedia[i]);
    let SocialLink = eleNav.socialMedia[i];
    console.log("socialLink---" + SocialLink);
    await element(By.css(SocialLink)).click();

    browser.sleep(1000);
    let socialDisplay = eleNav.socialMediaDisplay[i];
    quikLinks(socialDisplay);
    browser.sleep(1000);
  }
});

When("Select Random Author", async () => {
  let max;
  let categoryEle = element(By.cssContainingText(eleNav.menuList, "Categories"));
  var eleCategoryList = element.all(By.css(eleNav.categoryVisible));
  await eleCategoryList.count().then(function(size) {
    max = size;
  });
  let randomList = getRandomInt(max);
  categoryAuthorSelection(categoryEle);
  eleCategoryList.get(randomList).click();
  await browser.sleep(2000);
  expect(element(By.css(eleNav.authorImage)).isDisplayed()).be.eventually.true;
});

When("Select Random Category", async () => {
  let max;
  let authorEle = element(By.cssContainingText(eleNav.menuList, "Authors"));
  var eleAuthorList = element.all(By.css(eleNav.authorVisible));
  await eleAuthorList.count().then(function(size) {
    max = size;
  });
  let randomList = getRandomInt(max);
  categoryAuthorSelection(authorEle);
  eleAuthorList.get(randomList).click();
  await browser.sleep(2000);
  expect(element(By.css(eleNav.authorImage)).isDisplayed()).be.eventually.true;
});