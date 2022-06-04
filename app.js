var express = require("express");
var path = require("path");

var app = express();

/*********************/
app.use(express.static(path.join(__dirname, "public")));
/*********************/

app.get("/1", (req, res) => {
  res.send(`
  <html>
  <body>
    <h1> Hello, this is html </h1>
  </body>
  </html>
  `);
});

const users = [
  {
    id: "john",
    age: 35,
    name: "Jhone Park"
  },
  {
    id: "bob",
    age: 22,
    name: "Sponge Bob"
  }
];

app.get("/2", (req, res) => {
  res.send(`
  <html>
  <body>
    <h1> Hello, this is html </h1>
    <table border=1>
    <tr>
    <th>id</th><th>Name</th><th>Age</th>
    </tr>
    <tbody>
    ${users.map(
      (user) => `
      <tr>
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.age}</td>
      </tr>
    `
    )}
    </tbody>
    <table>
  </body>
  </html>    
  `);
});

var listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});
