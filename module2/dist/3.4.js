"use strict";
class Counter {
    static increment() {
        return (Counter.count = Counter.count + 1);
    }
    static decrement() {
        return (Counter.count = Counter.count - 1);
    }
}
Counter.count = 0;
// const instance1 = new Counter()
// const instance2 = new Counter()
console.log(Counter.increment());
console.log(Counter.increment());
