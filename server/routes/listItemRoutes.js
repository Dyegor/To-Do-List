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

module.exports = router;