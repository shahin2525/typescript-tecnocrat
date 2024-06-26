"use strict";
{
    const friends1 = ["rakib", "sakib", "musfiq"];
    const freinds2 = ["molla", "solla", "kolla"];
    const totalFriends = [...friends1, ...freinds2];
    // console.log(totalFriends);
    const friendsName = () => { };
    const totalFriendList = (...firinds) => {
        firinds.forEach((frind) => {
            console.log(`hi frineds ${frind}`);
        });
    };
    const friendsList = totalFriendList("rakib", "sakib", "musfiq", "lathen");
}
