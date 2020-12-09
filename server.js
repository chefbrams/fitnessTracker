const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path")
const PORT = process.env.PORT || 3000;



const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true , useFindAndModify: false , useCreateIndex: true , useUnifiedTopology: true });

app.use(require("./routes/api.js"));

//  html routes



  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  }); app.get("/exercise" , (req, res) => {
    res.sendFile(path.join(__dirname + "public/exercise.html"));
  });
 app.get("/index" , (req, res) => {
  res.sendFile(path.join(__dirname + "public/index.html"));
});
 app.get("/stats" , (req, res) => {
  res.sendFile(path.join(__dirname + "public/stats.html"));
});

  