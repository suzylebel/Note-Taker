const fs = require("fs");
const db = require("./db/db.json");
const path = require("path");
const express = require("express");
const rotuer = require("express").router();


// const app = express();
var notesdb = fs.readFileSync("./db/db.json")
let notes = JSON.parse(notesdb);


module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        return res.json(notes);
    })
}

// app.get("/api/notes", function (req, res) {
//     return res.json(db);

// }
// );


// app.post("/api/notes", function (req, res) {
//     const newNote = req.body;
//     newNote.id = newNote.title + notes.length;
//     notes.push(newNote);

//     return res.json(newNote);



//     // notesNew.id = 
// });


// app.delete("/api/notes/:id", function (req, res) {
//     const deleteNote =  req.params.id;

//     for (let i = 0; i < notes.length; i++){
//         if(notes[i].id = deleteNote){
//             notes.splice(i, 1);
//         }

//     }
//     return res.json(notes);
// });






// FROM README!!!!
// The following API routes should be created:
// * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

// * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

// * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

