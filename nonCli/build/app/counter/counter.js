"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var Counter = (function () {
    function Counter() {
        this._count = 0;
        this._value = new BehaviorSubject_1.BehaviorSubject(this._count);
    }
    Counter.prototype.increment = function () {
        this._value.next(++this._count);
    };
    Counter.prototype.decrement = function () {
        this._value.next(--this._count);
    };
    Object.defineProperty(Counter.prototype, "value", {
        get: function () {
            return this._value.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    return Counter;
}());
exports.Counter = Counter;
//# sourceMappingURL=counter.js.map