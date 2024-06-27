"use strict";
var _a, _b;
{
    //
    const age = 20;
    const isAdult = age >= 18 ? "adult" : "tanager";
    // console.log(isAdult);
    const isAuthenticate = "";
    const authenticate = isAuthenticate !== null && isAuthenticate !== void 0 ? isAuthenticate : "guest";
    const authenticate2 = isAuthenticate ? isAuthenticate : "Guest";
    const user = {
        name: "raki",
        age: 20,
        address: {
            presentAddress: "adfdfd",
        },
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "no permanent address";
    console.log(permanentAddress);
    //
}
