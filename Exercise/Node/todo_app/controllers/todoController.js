
var bodyParser= require('body-parser');
var urlencodedParser=bodyParser.urlencoded({
    extended:false
});
var data =[{
    item:"get milk"
}]

module.exports = function(app){
    app.get('/todo',function(req,res){
        res.render('body',{todos:data});
    });
    app.post('/todo',urlencodedParser,function(req,res){
        data.push(req.body);
        res.json(data);
    });
    app.delete('/todo/:item',function(req,res){
        data=data.filter(function(todo){
            return todo.item.replace(/ /g, '-') !==req.params.item;
        });
        res.json(data);
    });
};