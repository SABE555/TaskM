const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

//const uri = process.env.ATLAS_URI;
const uri =
 "mongodb+srv://ayoub:2020stifi1996@cluster0.w8bbw.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true,useUnifiedTopology: true, });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("connection successfuly");
});

const taskRouter = require("./routes/task");
 app.use('/task', taskRouter);

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});

/*
app.listen(3000, () => {
  console.log("server started");
});
*/
