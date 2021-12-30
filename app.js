//jshint esversion:6

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const apple = new Fruit({
    name: "Apple",
    rating: 10,
    review: "This is the best fruit ever."
});

const kiwi = new Fruit({
    name: "Kiwi",
    score: 10,
    review: "Delicious"
});

const banana = new Fruit({
    name: "Banana",
    score: 10,
    review: "Delicious"
});

const watermelon = new Fruit({
    name: "Watermelon",
    score: 10,
    review: "Delicious"
});

/* Fruit.insertMany([apple, kiwi, banana, watermelon], function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully saved all the fruits to fuisDB")
    }
});
 */

Fruit.find(function(err, fruits) {
    if (err) {
        console.log(err);
    } else {
        mongoose.connection.close();
        fruits.forEach(function(element) {
            console.log(element.name);
        });
    }
});

const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Find some documents
    collection.find({}).toArray(function(err, fruits) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(fruits);
        callback(fruits);
    });
};