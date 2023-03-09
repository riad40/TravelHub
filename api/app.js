require("dotenv").config();
require("./config/init_db").setDefaultRoles();
const db = require("./config/config_db");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middlwares/errorHandler");

const app = express();

// middlwares for handling or parsing incoming requests
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());

const authRouter = require("./routes/auth");

app.use("/api/auth", authRouter);

// middlwares
app.use(errorHandler);

const port = process.env.PORT;

app.listen(port, (err) => {
    !err ? console.log("app running on port " + port) : console.log(err);
});

module.exports = app;
