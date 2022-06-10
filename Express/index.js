const express = require('express');
const app = express();
app.use(express.json());

const product = ["Pizza","Cake","Burger"]; 

app.get("/",function(req, res){
    res.send("Hello World");
});

//for whole array
app.get("/api/product", function(req, res){
    res.send(product);
});

//for 1 record get
app.get("/api/product/:index", function(req, res){
    if(!product[req.params.index])
    return res.status(400).send("Product not found");
    res.send(product[req.params.index]);
});

app.put("/api/product/:index", function(req, res){
    //console.log(req.body);
    product[req.params.index] = req.body.name;
    res.send(product[req.params.index]);
});

app.delete("/api/product/:index", function(req, res){
    //console.log(req.body);
    product.splice(req.params.index,1);
    res.send(product);
});


app.post("/api/product", function(req, res){
    //console.log(req.body);
    product.push(req.body.name);
    res.send(product);
});


app.listen(3000);