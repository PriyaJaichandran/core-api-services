var app=require('./appconfig');
const productdata = require('./json/products.json');

app.get("/product", (req,res,next) =>{
    res.json(productdata)
})
app.get("/productTest", (req,res,next) =>{
    res.json(['1','Chair','Home Decor','Wood','1 pc','3 kg','56 x 71 x 82 cm'])
})