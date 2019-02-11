var path = require("path");
var friendData = require("../data/friends.js")

module.exports = function(app) {

    //ROUTES
//------------------------------
app.get("/api/friends", function (req, res) {
    res.json(friendData);
});

// Create new friends - takes in JSON input
app.post("/api/friends", function(req, res) {

    var newFriend = req.body;
    var newScore = newFriend.totalScore;
    var matchName = "";
    var matchPhoto = "";
    var friendScoresArr = [];

    //Save all friendData totalScores to an array 
    function scoresArr () {
        for (var i = 0; i < friendData.length; i++) {
            friendScoresArr.push(parseInt(friendData[i].totalScore))
        }
    }
    scoresArr();

    //Calculate the totalScores for FriendData and newFriend to find the closest match
    function closest(array, num){
        var i = 0;
        var minDiff = 1000;
        var ans;
        for(i in array) {
             var m = Math.abs(num-array[i]);
             if( m < minDiff){ 
                    minDiff = m; 
                    ans = array[i]; 
                }
          }
        return ans;
    };

    //Save that calcutated number to this matchedScore variable
    var matchedScore = closest(friendScoresArr, newScore);

    //Run through the friendData again to look for the friend that matches with the newly added friend
    for (var i = 0; i < friendData.length; i++) {
        if (parseInt(friendData[i].totalScore) === parseInt(matchedScore)) {
            matchName = friendData[i].name;
            matchPhoto = friendData[i].photo;
        }

    };
    
    friendData.push(newFriend);
  
    res.json({
        matchName: matchName,
        matchPhoto: matchPhoto
    });
  });
  

};

