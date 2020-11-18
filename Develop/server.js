const express = require("express");
// const fs = require('fs');
const db = require('./db/db.json')
// const path = require('path');

// express server
const app = express();
const PORT = process.env.PORT || 3030;

// data parse
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

// const htmlRoutes = require('./routes/htmlRoutes');
// app.use('/', htmlRoutes); 

// const apiRoutes = require('./routes/apiRoutes');
// app.use('/api/notes', apiRoutes); 


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});






// // API Routing
// app.get("/api/notes", function (req, res) {
//   return res.json(db);
// });

// app.post("/api/notes", function (req, res) {
//   const newNote = req.body;
//   newNote.id = new Date().getTime().toString();
//   db.push(newNote);
//   fs.writeFileSync('./db/db.json', JSON.stringify(db));
//   return res.json(newNote);
// });

// app.delete('/api/notes/:id', function (req, res) {
//   const id = req.params.id;
//   const index = db.findIndex(function (note) {
//     return note.id === id;
//   })
//   if (index !== -1) {
//     db.splice(index, 1)
//   }
//   fs.writeFileSync('./db/db.json', JSON.stringify(db));
//   return res.json(id);
// })


// // Listen on PORT:
// app.listen(PORT, function () {
//   console.log("App listening on PORT " + PORT);
// });
