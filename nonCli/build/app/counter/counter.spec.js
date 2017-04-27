"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var counter_1 = require("./counter");
describe('Counter', function () {
    var counter;
    beforeEach(function () {
        counter = new counter_1.Counter();
    });
    it('should increase value of counter when incremented', function (done) {
        counter.increment();
        counter.value.subscribe(function (value) {
            expect(value).toEqual(1);
            done();
        });
    });
    it('should decrease value of counter when decremented', function (done) {
        counter.decrement();
        counter.value.subscribe(function (value) {
            expect(value).toEqual(-1);
            done();
        });
    });
});
//# sourceMappingURL=counter.spec.js.map