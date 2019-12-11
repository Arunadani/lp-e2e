import { Config } from "protractor";
import { browser } from "protractor";

export let config: Config = {
  // The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  framework: "custom",
  // path relative to the current config file
  frameworkPath: require.resolve("protractor-cucumber-framework"),

  // Capabilities to be passed to the webdriver instanace.
  capabilities: {
    browserName: "chrome"
  },

  // Spec patterns are relative to the configuration file location passed
  // to protractor (in this example conf.js).
  // They may include glob patterns.
  specs: ["../*/*.feature"],
  cucumberOpts: {
    // require step definitions
    require: [
      "./specs/*.js" // accepts a glob
    ]
  },
  onPrepare: () => {
    browser
      .manage()
      .window()
      .maximize();
    browser
      .manage()
      .timeouts()
      .implicitlyWait(5000);
    browser.ignoreSynchronization = true;
  }
};
