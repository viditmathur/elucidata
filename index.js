var express = require('express');
const app = express();
var cors= require('cors');
var sql=require(mssql);
var bodyparser=require('body-parser');

app.use(bodyparser.json());

app.use(cors());

app.use(bodyparser.urlencoded({
    'extended':true
}));

var config={
    "server":"",
    "user":"",
    "database":"",
    "password":""
}

sql.connect(config, (err)=>{
    if(err){
        console.log(err);
    }
});

var port=8000;

app.listen(port, ()=>{
    console.log("application is running on port", port);
});

app.get("/api/employee",(req,res,next)=>{
    var request= new sql.Request();
    request.querry('select * from employee',(err,recordset)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json(recordset.recordset[0]);
        }
    });
});
app.get("/api/employee/:id",(req,res,next)=>{
    var request= new sql.Request();
    request.querry('select * from employee where id='+req.params.id+'',(err,recordset)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json(recordset.recordset[0]);
        }
        });
});
app.post("/api/employee",(req,res,next)=>{
    var request= new sql.Request();
    request.querry("insert into employee values ('"+req.body.id+"','"+req.body.name+"')",(err,recordset)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json(recordset.recordset[0]);
        }
    });
});
app.put("/api/employee/:id",(req,res,next)=>{
    var request= new sql.Request();
    request.querry("update employee set name='"+req.body.name+"' where id='"+req.params.id+"',",(err,recordset)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json(recordset.recordset[0]);
        }
    });
});

app.delete("/api/employee/:id",(req,res,next)=>{
    var request= new sql.Request();
    request.querry("delete from employee where id='"+req.params.id+"',",(err,recordset)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json(recordset.recordset[0]);
        }
    });
});