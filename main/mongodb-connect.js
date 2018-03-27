const MongoClient = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/notificationsystem', (err,db) =>{
    if (err){
        return console.log('Unable to connect mongodb server.');
    }
    console.log('Connected to mongodb server');
    db.collection('Contact').insertOne({
        name: 'Saurav Pokharel',
        phone: 9862170595
    }, (err, result) =>{
        if(err){
            return console.log('Unable to insert contact.',err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
});