var mongodb = require('mongodb')
var mongoClient = mongodb.MongoClient

var connectionUrl = "mongodb://localhost:27017"
var databaseName= "SE373"

mongoClient.connect(connectionUrl, {useUnifiedTopology: true, useNewUrlParser: true}, (err, client) =>
{
    if(err)
    {
        console.error(err)
        return
    }
    else
    {
        const db = client.db(databaseName)
        const collection = db.collection(databaseName)

        collection.insertMany([{name: 'Lee'}, {Name: 'Bob'}, {Name: 'Henry'}], (err, result) => {
            collection.find().toArray((err, items) => {
                console.log(items)
            })
        })
    }
})