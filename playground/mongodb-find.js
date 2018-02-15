//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5a854976e6c51a9268df553e')
    // }).count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (error) => {
    //     console.log('Unable to fetch Todos', error)
    // });

    db.collection('Users').find({name: 'Chantouch Sek'}).toArray().then((user) => {
        console.log(JSON.stringify(user, undefined, 2));
    })

    //db.close();
});