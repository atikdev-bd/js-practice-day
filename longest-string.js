const friends = ['Milton', 'Mizanur', 'Ridoy', 'Emran', 'Piash'];

function bestFriend(array) {
    var longest = 0;
    var longestName = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longest) {
          var longest = array[i].length;
            longestName = array[i];

        }

    }
    return longestName;
}
var friend = bestFriend(friends)
console.log("Best friend:",friend)