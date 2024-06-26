"use strict";
{
    const user = {
        id: "a444",
        name: {
            firstName: "md",
            middleName: "rakib",
            lastName: "khan",
        },
        age: 16,
    };
    const { id, age, name: { firstName, middleName, lastName: endName }, } = user;
    //   console.log(endName);
    const array1 = ["sakib", "musi", "rusi", "chusi", "kushi"];
    const [, , ru, ...next] = array1;
    console.log(ru, next);
}
