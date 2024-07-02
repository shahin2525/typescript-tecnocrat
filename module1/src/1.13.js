"use strict";
{
    //
    const func1 = (pram, pram2) => {
        return [pram, pram2];
    };
    const res1 = func1(100, { name: "raki", age: 10 });
    const student = (student, teac) => {
        const next = "next level developer";
        return Object.assign(Object.assign(Object.assign({}, student), teac), { next });
    };
    const result1 = student(1000, {
        name: "rakib",
        age: 16,
        email: "r@r",
    });
    const result2 = student(100, { name: "sakib", age: 17, email: "s@s" });
    //
}
