1. Database
CREATE DATABASE pong_oneplayer CHARACTER SET utf8 COLLATE utf8_general_ci;

CREATE USER 'pong_oneplayer'@'localhost' IDENTIFIED BY 'pong_oneplayer';

GRANT ALL ON pong_oneplayer.* TO pong_oneplayer@localhost IDENTIFIED BY 'pong_oneplayer';

2. Change directory to mFabrikPongOnePlayer/
npm install

Because newer version of npm ( > 2014 ) does not install coffee-script and connect module. So they need to be install separately:

npm install coffee-script

npm install connect

3. Edit node_modules/policyfile/lib/server.js file and make a change at line 254


- Open node_modules/policyfile/lib/server.js and change:

- Comment off and replace with:
//Object.keys(process.EventEmitter.prototype).forEach(function proxy (key){
Object.keys(require('events').prototype).forEach(function proxy (key){  


4. Run (for test)

node app/server 2000

—-> screen: http://localhost:2000/pong
—-> remote: http://localhost:2000


- Build project before deploying: grunt build (This will generate "dist" folder for production on server)

5. Open /dist/presentations/pong/sonfig.json file and change the following .js file names to .min.js file names as follows:
    + lib/qrremote-toolkit/signals-screen.js           --> lib/qrremote-toolkit/signals-screen.min.js
    + lib/qrremote-toolkit/qr-code.js                  --> lib/qrremote-toolkit/qr-code.min.js
    + lib/qrremote-toolkit/qr-pong.js                  --> lib/qrremote-toolkit/qr-pong.min.js
    + presentations/pong/screen/js/pong.js             --> presentations/pong/screen/js/pong.min.js
    + presentations/pong/screen/js/script.js           --> presentations/pong/screen/js/script.min.js
    + lib/qrremote-toolkit/signals-remote.js           --> lib/qrremote-toolkit/signals-remote.min.js
    + presentations/pong/remote/js/script.js           --> presentations/pong/remote/js/script.min.js
    + presentations/pong/remote/js/entercode-script.js --> presentations/pong/remote/js/entercode-script.min.js

6. Synchronize code from local to production server: 

./sync-sharan

7. Deploy this project on production: forever start www/node/mFabrikPongOnePlayer/app/server.js 8181

8. To see processes running under forever: forever list

9. To start/stop/restart: forever start/stop/restart PROJECT_ID

forever start /www/node/mFabrikPongOnePlayer/app/server.js 8181


