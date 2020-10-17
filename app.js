var app = require('./appconfig');
var db = require('./firebaseconfig');
const productdata = require('./json/products.json');
var ref=db.ref("/users");
app.get("/product", (req, res, next) => {

    console.log(ref);
    //res.json(productdata)
    ref.once("value", function (snapshot) {
        var data = snapshot.val(); //Data is in JSON format.
        console.log(data);
        res.json(data);
    });
})
app.get("/productTest", (req, res, next) => {
    res.json(['1', 'Chair', 'Home Decor', 'Wood', '1 pc', '3 kg', '56 x 71 x 82 cm'])
})