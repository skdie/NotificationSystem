const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/notificationsystem', (err, db) =>{
    if(err){
        return console.log('Unable to connect to mongodb',err);
    }
    console.log('Connected to mongodb notificationsystem');

    db.collection('Contact').find().toArray().then((docs) =>{
            console.log('Contact');
            console.log(JSON.stringify(docs, undefined, 2));
    }, (err) =>{
        console.log('Unable to fetch contact',err);
    });

    db.close();
});