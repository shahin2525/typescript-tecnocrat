"use strict";
{
    //
    const genericStudent = (student) => {
        const next = "next level web";
        return Object.assign(Object.assign({}, student), { next });
    };
    const res1 = genericStudent({
        id: 123,
        name: "rakib",
        age: 10,
    });
    const res2 = genericStudent({
        id: 123,
        name: "rakib",
        age: 10,
        email: "s@s",
        hoviey: "gardening",
    });
    //
}
