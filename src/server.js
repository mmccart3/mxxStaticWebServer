const express = require("express");
const app = express();

app.use("/static",express.static("public")); // Add the public folder to the webserver but through the /static directory

app.listen(5001, () => {
    console.log("Listening on Port 5001");
});