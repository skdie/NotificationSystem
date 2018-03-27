const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/notificationsystem', (err,db) =>{
    if (err){
        return console.log('Unable to connect mongodb server.');
    }
    console.log('Connected to mongodb server');

    // db.collection('Notice').deleteMany({name:'Saurav'}).then((result) =>{
    //     console.log(result);
    // });

    // deleteMany
    db.collection('Contact').deleteMany({name: 'Saurav Pokharel'}).then((result) => {
        console.log(result);
    });

    db.close();
});