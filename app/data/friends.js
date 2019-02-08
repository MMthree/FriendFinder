var euros = [1, 5, 5];
var sum2 = euros.reduce((total, amount) => total + amount); 

console.log(sum2)

var friendData = [
    {
        name: "Faye",
        scores: [1, 3, 2, 3, 5, 3, 5, 1, 4, 4]
    },
    {
        name: "Zane",
        scores: [4, 3, 1, 1, 4, 4, 5, 2, 4, 3]
    },
    {
        name: "Trey",
        scores: [4, 2, 4, 5, 1, 1, 3, 3, 5, 4]
    },
    {
        name: "Tessie",
        scores: [3, 3, 1, 1, 2, 3, 1, 3, 2, 4]
    },
    {
        name: "Willow",
        scores: [3, 1, 4, 4, 5, 1, 2, 1, 3, 2,]
    }
]

// var sum = friendData.reduce((total, amount) => total + amount); 
// console.log(friendData[3].scores)
// console.log(sum);