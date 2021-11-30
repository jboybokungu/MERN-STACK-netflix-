const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('DB Connection successfull!'))
.catch((err) => console.log(err));

app.listen(8800, () => {
    console.log('server is running!');
});