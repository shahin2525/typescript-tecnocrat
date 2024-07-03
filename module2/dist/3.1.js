"use strict";
{
    const getUser = (user) => {
        if ("role" in user) {
            console.log(`the user name is ${user.name} role ${user.role}`);
        }
        else {
            console.log(`the user name ${user.name}`);
        }
    };
    const normalUser = {
        name: "rak",
    };
    const richUser = {
        name: "rak",
        role: "admin",
    };
    const res1 = getUser(normalUser);
}
