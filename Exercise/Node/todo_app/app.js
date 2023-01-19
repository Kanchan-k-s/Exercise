const express = require('express');
//const route = require('./route')
const app = express();
var todoController=require('./controllers/todoController')
app.set('view engine', 'ejs');
app.use(express.static('./public'))
//app.use('/',route);

todoController(app);

app.listen(3000,()=>{
    console.log("Server running on PORT 3000");
})