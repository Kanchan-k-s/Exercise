const express = require('express');
var object = require('./database');
const route = express.Router();

route.get('/',(req,res)=>{
    res.json({userData:object});
})

route.post('/',(req,res)=>{
    object.push(req.body);
    res.json(object);
})

route.get('/:id',(req,res)=>{
    const accountid =Number(req.params.id);
    const getAccount=object.find((account)=>account.id ===accountid);
    

    if(!getAccount){
        res.status(500).send("Account not Found");
    }else{
        res.json({userData:getAccount});
    }
    
})

route.put('/:id',(req,res)=>{
    const accountid = Number(req.params.id);
    const getAccount= object.find((account)=> account.id === accountid);
    const body=req.body;

    const index= object.indexOf(getAccount);

    if(!getAccount)
    {
        res.status(500).send("Account Not found");
    }else{
        const updateAccount={...getAccount, ...body};
        object[index]=updateAccount;
        res.send(object);
    }
})

route.delete('/:id',(req,res)=>{
    const accountid = Number(req.params.id);
    const newAccount = object.filter((account)=> account.id !=accountid);

    if(!newAccount){
        res.status(500).send("Account not Found");
    }else{
        object = newAccount;
        res.send(object);
    }
})
module.exports = route;