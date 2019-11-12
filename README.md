# lp-e2e
npm init (Packaage json)

npm i protractor

add following dependency in package json:

    "@types/jasmine": "2.5.41",
    "@types/jasminewd2": "2.0.3",
    "jasmine": "3.5.0",
    "protractor": "5.4.2",
    "ts-node": "8.5.0",
    "typescript": "3.6.4",
    "@types/node": "12.12.2"
    
   note : to install these dependency : npm i --save ts-node or
   if it is specific versrion : npm i --save ts-node@8.5.0
   
  Faced issue in index.ts:
  -----------------------------
  "TS2440: Import declaration conflicts with local declaration of 'PluginConfig'"
  this is fixed by removing one PluginCofig -- import --- >check index.ts file
  
  Created tsconfig.json
  ----------------------
  - > copied from protractor website and modifited few
    1. changed engine - se6
    2. changed outdir - temp (out js file)
    3. changed few more -- check tsconfig.json
    
  Created spec file:
  ----------------
  testSpec.ts
  here --- Imported
  
 import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';~
  
  created config.ts file
  ----------------------
  Copied Previous .js config but modified few  
  
  ~import {Config} from 'protractor';
  export let config: Config = {
  ...
  } also this one   
   specs: ["./*/*Spec.js"], (it should be .js not .ts)
   
   Compile:
   -----------
   tsc
   Run:
   -------
   Protractor ./temp/config.js( where is your js file that path)
