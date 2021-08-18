System.register(['angular2/core', './menu.component', './slides/slide0.component', './slides/slide1.component', './slides/slide2.component', './slides/slide3.component', './slides/slide4.component', './slides/slide5.component', './services/slideNavigation.service', './services/menuNavigation.service'], function(exports_1, context_1) {
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
    var core_1, menu_component_1, slide0_component_1, slide1_component_1, slide2_component_1, slide3_component_1, slide4_component_1, slide5_component_1, slideNavigation_service_1, menuNavigation_service_1;
    var Container;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
            },
            function (slide0_component_1_1) {
                slide0_component_1 = slide0_component_1_1;
            },
            function (slide1_component_1_1) {
                slide1_component_1 = slide1_component_1_1;
            },
            function (slide2_component_1_1) {
                slide2_component_1 = slide2_component_1_1;
            },
            function (slide3_component_1_1) {
                slide3_component_1 = slide3_component_1_1;
            },
            function (slide4_component_1_1) {
                slide4_component_1 = slide4_component_1_1;
            },
            function (slide5_component_1_1) {
                slide5_component_1 = slide5_component_1_1;
            },
            function (slideNavigation_service_1_1) {
                slideNavigation_service_1 = slideNavigation_service_1_1;
            },
            function (menuNavigation_service_1_1) {
                menuNavigation_service_1 = menuNavigation_service_1_1;
            }],
        execute: function() {
            Container = (function () {
                function Container(slideNavigationService, menuNavigationService) {
                    this.slideNavigationService = slideNavigationService;
                    this.menuNavigationService = menuNavigationService;
                    this.name = 'container';
                }
                Container.prototype.ngOnInit = function () {
                    this.slideNumber = this.slideNavigationService.getSlide();
                    this.disabled = 'disabled';
                };
                Container.prototype.ngDoCheck = function () {
                    if (this.slideNumber != this.slideNavigationService.getSlide()) {
                        this.slideNumber = this.slideNavigationService.getSlide();
                    }
                    if (this.openMenu != this.menuNavigationService.getOpenMenu()) {
                        this.openMenu = this.menuNavigationService.getOpenMenu();
                    }
                };
                Container = __decorate([
                    core_1.Component({
                        selector: 'container',
                        template: "\n    <menu id=\"menu\" class=\"menu {{openMenu}}\">\n    </menu>\n    <slide [ngSwitch]=\"slideNumber\">\n            <template [ngSwitchWhen]=\"0\"><slide0></slide0></template>\n\t    \t<template [ngSwitchWhen]=\"1\"><slide1></slide1></template>\n\t    \t<template [ngSwitchWhen]=\"2\"><slide2></slide2></template>\n\t    \t<template [ngSwitchWhen]=\"3\"><slide3></slide3></template>\n\t    \t<template [ngSwitchWhen]=\"4\"><slide4></slide4></template>\n\t    \t<template [ngSwitchWhen]=\"5\"><slide5></slide5></template>\n\t    \t<template ngSwitchDefault><slide0></slide0></template>\n    </slide>\n    ",
                        directives: [menu_component_1.Menu, slide0_component_1.Slide0, slide1_component_1.Slide1, slide2_component_1.Slide2, slide3_component_1.Slide3, slide4_component_1.Slide4, slide5_component_1.Slide5]
                    }), 
                    __metadata('design:paramtypes', [slideNavigation_service_1.SlideNavigationService, menuNavigation_service_1.MenuNavigationService])
                ], Container);
                return Container;
            }());
            exports_1("Container", Container);
        }
    }
});
//# sourceMappingURL=container.component.js.map