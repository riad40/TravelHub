const mongoose = require("mongoose");

const dbUri = process.env.DB_URI;
const dbUriLocal = process.env.DB_URI_LOCAL;

mongoose
    .connect(dbUriLocal)
    .then(() => {
        console.log("connected succefully to travelhub db");
    })
    .catch((err) => {
        console.log("something went wrong " + err);
    });
