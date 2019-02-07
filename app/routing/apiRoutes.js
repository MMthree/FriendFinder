var path = require("path");

module.exports = function(app) {

    //ROUTES
//------------------------------
app.get("/api/friends", function (req, res) {
    res.json(friendData);
});

// Create New Characters - takes in JSON input
app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
  
    friendData.push(newFriend);
  
    res.json(newFriend);
  });
  

};

var friendData = [
    {
        name: "jess",
        scores: [1, 3, 4, 5, 9]
    }
]