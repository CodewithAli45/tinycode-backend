const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/userRouter')
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 2022
const uri = process.env.DB_URL

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(uri).then(() => {
    console.log("Connected to database");
}).catch((err) => {
    console.log("something went wrong ", err);
});

app.use('/api/v1', router)

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})