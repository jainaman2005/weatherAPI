const express = require('express');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const app = express();
const router = require("./routes/openWeather.js");
app.use(express.urlencoded({extended: true}))
app.use("/api/", router)
app.use(cors());
app.get('/', (req, res) => {
    console.log("Server Running...")
    res.status(200).send("Hello from Server.");
})
app.listen(PORT,() => {
    console.log("Server Running on http://localhost:"+PORT)
})