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

//Start out with some friend data
var friendData = [
    {
        name: "Jenna",
        photo: "./app/public/images/Jenna.jpg",
        scores: [1, 3, 2, 3, 5, 3, 5, 1, 4, 4],
        totalScore: 31
    },
    {
        name: "Kumesh",
        photo: "./app/public/images/Kumesh.jpg",
        scores: [4, 3, 1, 1, 4, 4, 5, 2, 4, 3],
        totalScore: 31
    },
    {
        name: "Cameron",
        photo: "./app/public/images/Cameron.jpg",
        scores: [4, 2, 4, 5, 1, 1, 3, 3, 5, 4],
        totalScore: 32
    },
    {
        name: "Zoe",
        photo: "./app/public/images/Zoe.jpg",
        scores: [3, 3, 1, 1, 2, 3, 1, 3, 2, 4],
        totalScore: 23
    },
    {
        name: "Nikki",
        photo: "./app/public/images/Nikki.jpeg",
        scores: [3, 1, 4, 4, 5, 1, 2, 1, 3, 2,],
        totalScore: 26
    }
]
