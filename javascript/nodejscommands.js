npm -v  //checks what version
npm init //creates package.json
npm install <module name> --save //installing a module and creates a dependency in package.json
npm install //reads package.json and installs all modules

//inside package.json dependency
 "devDependencies": {
    "concurrently": "^1.0.0", //when npm install is executed it automatically updates the module to it's minor updates
    "lite-server": "~1.3.4", //when npm install is executed it automatically install the module with  patch updates
    "typescript": "1.7.5" //when npm install is executed it just installed that module version
  }

//importing nodejs from your script
'use strict';
const qr = require('<modulename>'); 

//complete_list of Node Default Core module https://nodejs.org/api/index.html 



"main": "./app/main.js" //points the main origin of the app 


//manually installing module
npm install <modulename>@<versionnum> --save
npm install <modulename>@<versionnum> --save-dev 


npm install --save jade
npm install --save-dev bower //installs the bower
bower init //follow init instruction
npm install jquery --save 
npm install angular --save





/****************** Example 1 *************/
//Creating a module
//mainapp
//mainapp/newmodule
//mainapp/newmodule.index.js
'use strict';
exports.hello = (user) =>{
    return "hello " + user;
}

//mainapp/app.js
'use strict';
const enigma = require('./newmodule');
console.log(enigma.hello('john'));

//node app - to run the app.js

/****************** Example 2 *************/

//mainapp/newmodule.index.js
'use strict';
module.exports = function() {
    return {
        hello:(user) => {
            return "hello" + user;
        },
        goodmorning:(user) => {
            return "Good Morning" + user;
        }
    }
}

//mainapp/app.js
'use strict';
const Enigma = require('./newmodule');
const eng = new Enigma();

console.log(eng.hello('john'));
console.log(eng.goodmorning('john'));

/****************** Example 3 *************/
//mainapp/newmodule.index.js
'use strict';
const crypto = require('crypto');

module.exports = function(key) {
    return {
        encode:(str) => {
            let encoder = crypto.createCipher('aes-256-ctr', this.key);
            return encoder.update(str, 'utf8', 'hex');
        },
        decode:(str) => {
            let decoder = crypto.createDecipher('aes-256-ctr', this.key);
            return encoder.update(str, 'hex', 'utf8');
        }
    }
}

//mainapp/app.js
'use strict';
const Enigma = require('./newmodule');
const eng = new Enigma('magrathea');

let encodestring = eng.encode("dont panic!");
console.log(encodestring);

let decodestring = eng.decode(encodestring);
console.log(decodestring);

source ~/.bashrc

-------------------
npm install -g yarn
yarn add [package-name]
yarn remove [package-name]