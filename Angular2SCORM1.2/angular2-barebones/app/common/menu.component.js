System.register(['angular2/core', './services/slideNavigation.service'], function(exports_1, context_1) {
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
    var core_1, slideNavigation_service_1;
    var Menu;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (slideNavigation_service_1_1) {
                slideNavigation_service_1 = slideNavigation_service_1_1;
            }],
        execute: function() {
            Menu = (function () {
                function Menu(slideNavigationService) {
                    this.slideNavigationService = slideNavigationService;
                    this.name = 'Menu';
                }
                Menu.prototype.goToSlide = function (intSlideNumber) {
                    this.slideNavigationService.goToSlide(intSlideNumber);
                };
                Menu = __decorate([
                    core_1.Component({
                        selector: 'menu',
                        templateUrl: "./app/common/menu.component.html",
                    }), 
                    __metadata('design:paramtypes', [slideNavigation_service_1.SlideNavigationService])
                ], Menu);
                return Menu;
            }());
            exports_1("Menu", Menu);
        }
    }
});
//# sourceMappingURL=menu.component.js.map