// jshint esversion:6

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema ({
    name: String,
    score: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const kiwi = new Fruit ({
    name: "Kiwi",
    score: 10,
    review: "The best fruit!"
});

const orange = new Fruit ({
    name: "Orange",
    score: 4,
    review: "Too sour for me"
});

const banana = new Fruit ({
    name: "Banana",
    score: 3,
    review: "Weird texture"
});

Fruit.insertMany([kiwi, orange, banana], function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully saved all the fruits to fruitsDB");
    }
});
// const fruit = new Fruit ({
//     name: "Apple",
//     rating: 7,
//     review: "Pretty solid as fruit."
// });

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person ({
    name: "John",
    age: 37
});

// fruit.save();
person.save();

const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Find same documents
    collection.find({}).toArray(function(err, fruits) {
        assert.strictEqual(err, null);
        console.log("Found the following records");
        console.log(fruits);
        callback(fruits);
    });
};