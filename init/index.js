const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listings.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wandernest";

main().then(() => {
    console.log("connected to DB");
}).catch((err) => {
    console.log(err);
})


async function  main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: "6856f4883e6fcc0bff6e76d6",
    }))
    await Listing.insertMany(initData.data);
    console.log("data was initialised");
}

initDB();