const express = require("express");
const app = express();
app.use(express.json());

app.get("/api", (req, res) => {
    res.send("Backend API working");
});

app.listen(3000);