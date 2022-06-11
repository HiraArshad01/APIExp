console.clear();

const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());


const product = [{
    "productName": "Monster T-shirt (000001)",
    "description": "Stuff: Cotton Jersey Type: Round Neck, Fit: Regular Fit, Slim Fit Quality: Easy, Soft and Comfortable Export Quality",
    "price": "2600/- "
},
    {"productName": "Classy black T-shirt (000002)",
    "description": "Stuff: Cotton Jersey Type: Round Neck, Fit: Regular Fit, Slim Fit Quality: Easy, Soft and Comfortable Export Quality",
    "price": "3000/- "
},
    {"productName": "Keep It Cool T-Shirt (000003)",
    "description": "Stuff: Cotton Jersey Type: Round Neck, Fit: Regular Fit, Slim Fit Quality: Easy, Soft and Comfortable Export Quality",
    "price": "2700/- "
},
    {"productName": "Bloodline T-Shirt (000004)",
    "description": "Stuff: Cotton Jersey Type: Round Neck, Fit: Regular Fit, Slim Fit Quality: Easy, Soft and Comfortable Export Quality",
    "price": "1600/- "
},
   { "productName": "Lining T-Shirt (000005)",
    "description": "Stuff: Cotton Jersey Type: Round Neck, Fit: Regular Fit, Slim Fit Quality: Easy, Soft and Comfortable Export Quality",
    "price": "3000/- "
},
   { "productName": "GIVENCY T-Shirt (000006)",
    "description": "Stuff: Cotton Jersey Type: Round Neck, Fit: Regular Fit, Slim Fit Quality: Easy, Soft and Comfortable Export Quality",
    "price": "2800/- "
},

]; 

app.get("/",function(req, res){
    res.json("Hello World");
});

//for whole array
app.get("/api/product", function(req, res){
    res.json(product);
});

//for 1 record get
app.get("/api/product/:index", function(req, res){
    if(!product[req.params.index])
    return res.status(400).send("Product not found");
    res.json(product[req.params.index]);
});

app.put("/api/product/:index", function(req, res){
    //console.log(req.body);
    product[req.params.index] = req.body.name;
    res.json(product[req.params.index]);
});

app.delete("/api/product/:index", function(req, res){
    //console.log(req.body);
    product.splice(req.params.index,1);
    res.json(product);
});


app.post("/api/product", function(req, res){
    //console.log(req.body);
    product.push(req.body.name);
    res.send(product);
});


app.listen(3000);