//needs a home, about, works page (bonus photo gallery)
// about a person i admire
// view directory holds html files
// public directory holds other files (CSS, scripts, images)

const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/home", (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + "/views/home.html");
});
app.get("/about", (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + "/views/about.html");
});
app.get("/works", (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + "/views/works.html");
});

app.listen(3000, () => {
  console.log("app listening on port 3000");
});
