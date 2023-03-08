const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
const fallback = require("express-history-api-fallback");

connectToMongo();

const app = express();
const port = 5000;
app.use(cors());

app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("First Express and Mongodb App");
// });

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.use(express.static("./public"));
app.use(fallback("index.html", { root: __dirname + "/public" }));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
