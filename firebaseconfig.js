var firebase = require ("firebase");

firebase.initializeApp({
    serviceAccount: "D:/project_web/key/try1-26aef-firebase-adminsdk-grp77-4e4172a72f.json",
    databaseURL:"https://try1-26aef.firebaseio.com"
});

var db=firebase.database();
/*
var ref=db.ref("/users");
console.log("after return from firebase");
ref.once("value", function(snapshot) {
  var data = snapshot.val();   //Data is in JSON format.
  console.log(data);
});*/
module.exports=db;