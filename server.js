var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTES
//------------------------------
app.use('/app',express.static('app'));


require(path.join(__dirname, "app/routing/apiRoutes"))(app);
require(path.join(__dirname, "app/routing/htmlRoutes"))(app);

app.use(express.static('./app/public'));



//Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})