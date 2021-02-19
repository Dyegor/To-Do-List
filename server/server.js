const express = require("express");
const connectDB = require("./db/dbConnection");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 8080;

const app = express();
connectDB();

const listItemRoute = require("./routes/listItemRoutes");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/v1", listItemRoute);

app.listen(port, () => {
    console.log("Listening on port", port);
});

