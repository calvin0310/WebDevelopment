// jshint esversion:6

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const kiwi = new Fruit ({
//     name: "Kiwi",
//     score: 10,
//     review: "The best fruit!"
// });

// const orange = new Fruit ({
//     name: "Orange",
//     score: 4,
//     review: "Too sour for me"
// });

// const banana = new Fruit ({
//     name: "Banana",
//     score: 3,
//     review: "Weird texture"
// });

// Fruit.insertMany([kiwi, orange, banana], function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully saved all the fruits to fruitsDB");
//     }
// });
// const fruit = new Fruit ({
//     rating: 10,
//     review: "Peaches are so yummy!"
// });

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit ({
    name: "Pineapple",
    rating: 9,
    review: "Great fruit."
});
const apple = new Fruit ({
    name: "Apple",
    rating: 5,
    review: "It's too solid."
});
// pineapple.save();
apple.save();
const person = new Person ({
    name: "John",
    age: 37
});
// fruit.save();
// person.save();

Fruit.find(function(err, fruits) {
    if (err) {
        console.log(err);
    } else {
        mongoose.connection.close();
        fruits.forEach(function(fruit) {
            console.log(fruit.name);
        });
    }
});

// Fruit.deleteOne({_id: "60497dc4236914a80b5c954a"}, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully deleted the document.");
//     }
// });

// Person.deleteMany({name: "John"}, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully deleted all the documents.");
//     }
// });

Person.updateOne({_id: "6049889909e1f2b8439e89d9"}, {favouriteFruit: apple}, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully updated the document.");
    }
});