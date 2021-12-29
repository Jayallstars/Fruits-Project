//jshint esversion:6

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 10,
    review: "This is the best fruit ever."
});

/* fruit.save(); */

const peopleSchema = new mongoose.Schema({
    name: String,
    salary: Number
});

const People = mongoose.model("People", peopleSchema);

const people = new People({
    name: "Jane",
    salary: 50000
});

people.save();

const kiwi = new Fruit({
    name: "Orange",
    score: 10,
    review: "Delicious"
});

const banana = new Fruit({
    name: "Banana",
    score: 10,
    review: "Delicious"
});

Fruit.insertMany([kiwi, banana], function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully saved all the fruits to fuisDB")
    }
});

const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('peoples');
    // Find some documents
    collection.find({}).toArray(function(err, peoples) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(peoples);
        callback(peoples);
    });
}