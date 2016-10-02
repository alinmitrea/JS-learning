mongod --dbpath=data
mongo
REM to use in mongo command line
     db
     use conFusion
     db
     db.help()
     db.dishes.insert({ name: "Uthapizza", description: "Test" });
     db.dishes.find().pretty();