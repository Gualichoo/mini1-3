const http = require ('http');

var express = require ('express');



const app = require('./app');

const port =  3000;
const server = http.createServer(app);




app.listen(port, () => console.log(`Example app listening on port ${port}!`));

