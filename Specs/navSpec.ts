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

describe("Navigation", () => {
  it("Categories", async () => {
    let list = element.all(By.css(".dropdown-menu"));
    for(let i=0;i<list.length;i++)
    {
        
    }
    console.log("Count:" + list.length);
  });
});
