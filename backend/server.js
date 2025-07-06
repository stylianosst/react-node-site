const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(process.env.MONGO_URI);
app.get('/', (req, res) => res.send('Hello from Node + Mongo!'));
app.listen(5000, () => console.log('Backend running'));
