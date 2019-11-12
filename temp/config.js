"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: "chrome"
    },
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ["./*/*Spec.js"],
    onPrepare: () => {
        protractor_1.browser
            .manage()
            .window()
            .maximize();
        protractor_1.browser
            .manage()
            .timeouts()
            .implicitlyWait(5000);
        protractor_1.browser.ignoreSynchronization = true;
    },
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true // Use colors in the command line report.
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsMkNBQXFDO0FBRTFCLFFBQUEsTUFBTSxHQUFXO0lBQzFCLDRDQUE0QztJQUM1QyxrREFBa0Q7SUFDbEQsYUFBYSxFQUFFLElBQUk7SUFFbkIsdURBQXVEO0lBQ3ZELFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxRQUFRO0tBQ3RCO0lBRUQsdUVBQXVFO0lBQ3ZFLDJDQUEyQztJQUMzQyxrQ0FBa0M7SUFDbEMsS0FBSyxFQUFFLENBQUMsY0FBYyxDQUFDO0lBRXZCLFNBQVMsRUFBRSxHQUFHLEVBQUU7UUFDZCxvQkFBTzthQUNKLE1BQU0sRUFBRTthQUNSLE1BQU0sRUFBRTthQUNSLFFBQVEsRUFBRSxDQUFDO1FBQ2Qsb0JBQU87YUFDSixNQUFNLEVBQUU7YUFDUixRQUFRLEVBQUU7YUFDVixjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsb0JBQU8sQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7SUFDdkMsQ0FBQztJQUVELHdDQUF3QztJQUN4QyxlQUFlLEVBQUU7UUFDZixVQUFVLEVBQUUsSUFBSSxDQUFDLHlDQUF5QztLQUMzRDtDQUNGLENBQUMifQ==