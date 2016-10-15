npm install
npm install mongoose --save
npm install mongoose-currency --save
npm install mongoose mongoose-currency --save
npm install passport passport-local passport-local-mongoose --save
npm install jsonwebtoken --save

REM start the server
npm start

REM mongo
mongo
use conFusion
db.user.find().pretty()
db.users.update({username:"admin"},{$set:{admin:true}})