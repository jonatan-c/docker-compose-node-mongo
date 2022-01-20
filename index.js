const express = require("express");
const app = express();
const mongoose = require("mongoose");
const fs = require("fs");

// const MONGO_URI = process.env.MONGO_URI || "mongodb://mimongo:27017";

// try {
//   mongoose.Promise = global.Promise;
//   mongoose.connect(MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
//   console.log("Connected to MongoDB");
// } catch (error) {
//   console.log(error);
// }

// const schema = new mongoose.Schema({ hola: String});

mongoose.connect("mongodb://mimongo:27017/basededatos");

const Cat = mongoose.model("hola", { saludo: String });

app.get("/", async (req, res) => {
  console.log("Llego hasta aca, inicio");
  const hola = await Cat.findOne({});
  console.log("Llego hasta aca,final");
  console.log(hola);
  res.send(hola);
  // await res.send("Hello World ");
});

const PORT = process.env.PORT || 5112;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
