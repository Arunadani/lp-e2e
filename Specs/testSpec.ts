import {
  browser,
  element,
  by,
  By,
  $,
  $$,
  ExpectedConditions
} from "protractor";
import { async } from "q";

describe("Login:", () => {
  it("Browser Open", async () => {
    await browser.get("https://www.lifepluz.com/");
  });
});
