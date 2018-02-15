//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do tonight',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert to todo', err)
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // });

    //insert new doc into users (name, age, location)
    // db.collection('Users').insertOne({
    //     name: 'Chantouch Sek',
    //     age: 24,
    //     location: 'Cambodia'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert to Users', err)
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // });

    db.close();
});