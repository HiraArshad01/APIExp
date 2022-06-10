console.clear();
const http = require("http");

http 

.createServer(function (req, res){
    console.log(req.url);
    res.write("<h1>My First Heading.</h1>");
    res.end();
})
.listen(8080);
