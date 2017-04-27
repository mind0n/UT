"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var app_component_1 = require("../app/app.component");
describe('component: AppComponent (external)', function () {
    var fixture;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent]
        });
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        fixture.detectChanges();
    });
    it('should display Hello World message', function () {
        var debugEl = fixture.debugElement;
        var h1 = debugEl.nativeElement.querySelector('h1');
        expect(h1.textContent).toEqual('Hello World!');
    });
    it('True should be true', function () {
        expect(true).toEqual(true);
    });
});
//# sourceMappingURL=app.component.spec.js.map