const mongoose = require("mongoose");
const item = require("./item.model");

const ListItemsSchema = new mongoose.Schema({
    name: String,
    listItems: [item]
});

module.exports = mongoose.model("ListItems", ListItemsSchema);