const express= require('express');
const route= require('./routes');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended :true
}));

app.use('/',route);

app.listen(3000,()=>{
    console.log("Server on port 3000");
})