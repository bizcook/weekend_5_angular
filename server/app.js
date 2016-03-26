var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");



//schema = an object from below
var Schema = mongoose.Schema;

app.set("port", (process.env.PORT || 5000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//connect to mongo db
mongoose.connect("mongodb://localhost/findpet");

                      //new object
mongoose.model("pet", new Schema ({"name": String, "type": String, "age": Number, "image": String}));
var Pets = mongoose.model("pet");

//database code.

app.get("/pets", function(req,res){
    Pets.find({}, function(err, data){
      if(err){
      console.log("ERROR: ", err);
    }
      res.send(data);
    });
});

app.post("/pets", function(req,res){
    console.log(req.body);

    // set variables/key names for the data object.
    var name = req.body.name;
    var type = req.body.type;
    var age = req.body.age;
    var image = req.body.image;

    //new schema
    var addPet = new Pets ({"name": name, "type": type, "age": age, "image": image});

    addPet.save(function(err, data){
      if(err){
        console.log("ERROR: ", err);
      }
        res.send(data);
    });

});



app.get("/*", function(req,res){
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "/public/", file));
});

app.listen(app.get("port"), function(){
    console.log("Listening on port: ", app.get('port'));
});

module.exports = app;
