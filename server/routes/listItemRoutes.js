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

router.post("/", async (req, res) => {
    const name = req.body.listName;
    const listItems = req.body.listItems;

    let list = await ListItemsModel.findOne({ name });

    if (list) {
        try {
            await ListItemsModel.findOneAndUpdate({ name }, { listItems });
            return res.status(201).json("List " + req.body.listName + " added");
        } catch (err) {
            console.log(err.message);
        }
    } else {
        const newListItems = new ListItemsModel({name, listItems});

        await newListItems.save();
        return res.status(201).json(newListItems);
    }
});

router.delete("/", async (req, res) => {
    try {
        ListItemsModel.deleteOne({ name: req.body.listName }, err => {
            err && console.log(err.message);
        });
        return res.status(201).json("Item deleted");
    } catch (err) {
        console.error(err.message);
        return res.status(500).json("Internal Server error " + err.message);
    }
});

module.exports = router;