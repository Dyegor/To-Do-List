const express = require("express");
const router = express.Router();
const ListItemsModel = require("../models/listItems.model");

router.use(express.json());

router.get("/names", async (req, res) => {
    ListItemsModel.find({}, function (err, items) {
        if (err) {
            console.log(err);
        } else {
            return res.status(201).json(items);
        }
    });
});

router.get("/", async (req, res) => {
    const listName = req.query.listName;
    try {
        const listToView = await ListItemsModel.find({ name: listName }).exec();
        return res.status(201).json(listToView);
    } catch (err) {
        console.log(err.massage);
        return res.status(500).json("Internal Server error " + err.message);
    }
});

module.exports = router;