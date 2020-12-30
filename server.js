
//package dependencies 
var express = require("express");
var path = require("path");
var fs = require("fs")
const notesdb = require("./db/db.json");
const json = require("express");

// starts the App
var app = express();
var PORT = process.env.PORT || 3030;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

//API ROUTES 
app.get("/api/notes", function(req,res){
  return res.json(notesdb)
})

app.post("/api/notes", function(req,res){
  let newNote = req.body
  let newnoteDB = notesdb
  let noteId = Date.now()
  // grab by the id
  newNote["id"] = noteId
  newnoteDB.push(newNote)
  fs.writeFile("./db/db.json", JSON.stringify(newnoteDB), function(err) {
    if (err) {
        return console.log(err);
    }
    console.log("New note added!");
    })
  res.json(true)
})

app.delete("/api/notes/:id", (req, res) =>
{
  let deletedId = parseInt(req.params.id)
  let newnoteDB = notesdb
  let noteIndex = ""
  function getdelnote(){
    // delete by the id 
    newnoteDB.forEach(note=> {
      if (note.id === deletedId){
        noteIndex = newnoteDB.indexOf(note) 
      }
    })
  }
  getdelnote()
  newnoteDB.splice(noteIndex, 1);
  fs.writeFile("./db/db.json", JSON.stringify(newnoteDB), function(err) {
    if (err) {
        return console.log(err);
    }
    console.log("Note successfully deleted!");
    })
  res.json(true)
})

// HTML Routes (pulled here instead of file)
// 

//sends user to note page
app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});
//sends user to homepage
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});


// Starts the server

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

