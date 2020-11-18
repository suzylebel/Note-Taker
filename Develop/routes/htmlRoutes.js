const path = require('path');

module.exports = function(app) {
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "index.html"));
    }); 
    app.get("/notes", function (req, res ) {
        res.sendFile(path.join(__dirname, "notes.html")) 
    });
}

// The following HTML routes should be created:
// * GET `/notes` - Should return the `notes.html` file.
// * GET `*` - Should return the `index.html` file