"use strict";
{
    //
    const genericConstraints = (obj, key) => {
        return obj[key];
    };
    const user = {
        name: "rakib",
        age: 10,
        id: 111,
    };
    const getProperty = genericConstraints(user, "age");
    //
}
