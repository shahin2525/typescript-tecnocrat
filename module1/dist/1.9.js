"use strict";
{
    //
    const kgToGm = (value) => {
        if (typeof value === "string") {
            const convertedkGToGm = parseFloat(value) * 1000;
            return `the value gm ${convertedkGToGm}`;
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = kgToGm(10);
    console.log(result1);
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
