const mongoose = require("mongoose");

const ItemsSchema = new mongoose.Schema({
    id: String,
    toDo: String
});

module.exports = ItemsSchema;