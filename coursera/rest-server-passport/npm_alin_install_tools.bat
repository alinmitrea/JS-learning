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
db.users.remove({username:"admin"})


REM in postman:
POST http://localhost:3000/users/register  --> in Body, select JSON format and put: {"username":"admin", "password":"abc"}
POST http://localhost:3000/users/login --> get the token
GET http://localhost:3000/users --> in Header set the x-access-token paramater using the above token

REM add user
{"username":"admin", "password":"abc", "firstname": "Alin", "lastname":"Mitrea"}

REM add dish
{
 "name": "pizza",
 "image" : "this is the image",
 "category" : "mains",
 "label" : "Hot",
 "price" : "2.22",
 "description" : "ok desc"
}

REM add comment
{
 "rating": 2,
  "comment": "ok"
}

