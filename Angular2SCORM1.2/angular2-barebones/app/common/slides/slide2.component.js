System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Slide2;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Slide2 = (function () {
                function Slide2(elRef) {
                    this.elRef = elRef;
                }
                Slide2.prototype.ngOnInit = function () {
                    $(this.elRef.nativeElement).find('button').on('click', function () {
                        alert('tets');
                    });
                    sessionStorage.warningMessage = 'this warning for slide 3';
                };
                Slide2 = __decorate([
                    core_1.Component({
                        selector: 'slide2',
                        //templateUrl: "./app/common/slides/slide2.component.html",
                        template: "<button>Click </button>"
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], Slide2);
                return Slide2;
            }());
            exports_1("Slide2", Slide2);
        }
    }
});
//# sourceMappingURL=slide2.component.js.map