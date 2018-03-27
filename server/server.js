var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Contact} = require('./models/Contact');

// var newContact = new Contact({
//     name: 'Galab Pokharel',
//     phone: 9819373873
// });

// newContact.save().then((doc) => {
//     console.log('Saved contact',doc);
// },(e) => {
//     console.log('Unable to save todo',e);
// });

var app = express();
app.use(bodyParser.json());

app.post('/contacts',(req,res) =>{
    var newContact = new Contact({
       name: req.body.name
    });
   newContact.save().then((doc) =>{
       res.send(doc);
   }, (e) =>{
        res.status(400).send(e);
   });
    

});


app.listen(3000, () =>{
    console.log('Started on port 3000');
});

