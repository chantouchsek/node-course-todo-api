//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Something to do tonight'}).then((result) => {
    //     console.log(result)
    // })
    // DeleteOne
    // db.collection('Todos').deleteOne({text: 'Nice one dude'}).then((result) => {
    //     console.log(result)
    // })
    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({text: 'Have nice day'}).then((result) => {
    //     console.log(result);
    // })

    // db.collection('Users').deleteMany({name: 'heng'});

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5a8545c2b97f883ddced864d')}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2))
    })

    //db.close();
});