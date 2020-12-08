const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const connection = mongoose.connection;
const app = express();
const port = process.env.port || 3000;

mongoose.connect('mongodb+srv://ashur:ashur@ashur.sljft.mongodb.net/ashur?retryWrites=true&w=majority',{useNewUrlParser: true , useUnifiedTopology: true});

connection.once('open', () => console.log("connected to the mongodb"));


const UserRoute=require('./routes/userRoute');
app.use(cors());
app.use(bodyParser.json());
app.use('/user',UserRoute);


app.listen(port, () => console.log(`running on the server ${port}`));