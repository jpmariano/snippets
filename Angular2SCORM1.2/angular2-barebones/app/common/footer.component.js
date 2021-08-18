System.register(['angular2/core', './services/slideNavigation.service', './services/SlideRequired.service', './services/slideCompletion.service', './slides/services/knowledgeCheck.service', './services/menuNavigation.service'], function(exports_1, context_1) {
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
    var core_1, slideNavigation_service_1, SlideRequired_service_1, slideCompletion_service_1, knowledgeCheck_service_1, menuNavigation_service_1;
    var Footer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (slideNavigation_service_1_1) {
                slideNavigation_service_1 = slideNavigation_service_1_1;
            },
            function (SlideRequired_service_1_1) {
                SlideRequired_service_1 = SlideRequired_service_1_1;
            },
            function (slideCompletion_service_1_1) {
                slideCompletion_service_1 = slideCompletion_service_1_1;
            },
            function (knowledgeCheck_service_1_1) {
                knowledgeCheck_service_1 = knowledgeCheck_service_1_1;
            },
            function (menuNavigation_service_1_1) {
                menuNavigation_service_1 = menuNavigation_service_1_1;
            }],
        execute: function() {
            Footer = (function () {
                function Footer(slideNavigationService, slideRequiredService, knowledgeCheckService, slideCompletionService, menuNavigationService) {
                    this.slideNavigationService = slideNavigationService;
                    this.slideRequiredService = slideRequiredService;
                    this.knowledgeCheckService = knowledgeCheckService;
                    this.slideCompletionService = slideCompletionService;
                    this.menuNavigationService = menuNavigationService;
                    this.nextSlideNum = slideNavigationService.getNextSlide();
                    this.prevSlideNum = slideNavigationService.getPreviousSlide();
                    this.currentSlideNum = slideNavigationService.getSlide();
                    this.totalSlides = slideNavigationService.getTotalSlides();
                    this.name = 'Footer';
                }
                Footer.prototype.nextSlide = function () {
                    if (this.disabled != 'disabled') {
                        this.slideNavigationService.addSlideNum();
                        this.nextSlideNum = this.slideNavigationService.getSlide();
                        this.currentSlideNum = this.slideNavigationService.getSlide();
                        if (this.slideRequiredService.isSlideRequired(this.nextSlideNum) === true) {
                            this.disabled = 'disabled';
                        }
                        else {
                            this.disabled = '';
                        }
                        this.slideCompletionService.isSlideComplete();
                    }
                    else {
                        alert(sessionStorage.warningMessage);
                    }
                };
                Footer.prototype.previousSlide = function () {
                    this.slideNavigationService.removeSlideNum();
                    this.prevSlideNum = this.slideNavigationService.getSlide();
                    this.currentSlideNum = this.slideNavigationService.getSlide();
                    this.disabled = '';
                };
                Footer.prototype.openMenu = function () {
                    this.menuNavigationService.toggleOpenMenu();
                };
                Footer.prototype.ngDoCheck = function () {
                    //alert(this.knowledgeCheckService.enableButton());
                    if ((this.disabled == 'disabled') && (this.knowledgeCheckService.enableButton() != null)) {
                        //alert('disabled');
                        this.disabled = '';
                        this.slideRequiredService.removeFromRequiredSlide(this.currentSlideNum);
                        this.knowledgeCheckService.resetEnableButton();
                    }
                    this.currentSlideNum = this.slideNavigationService.getSlide();
                };
                Footer = __decorate([
                    core_1.Component({
                        selector: 'footer',
                        template: "\n        <div class=\"col-xs-6\">\n        <button type=\"button\" class=\"btn btn-default btn-md\" (click)=\"openMenu()\">\n            <span class=\"glyphicon glyphicon-menu-hamburger\" aria-hidden=\"true\"></span> Menu\n        </button>\n        </div>\n    \n        <div class=\"col-xs-6\" [ngSwitch]=\"currentSlideNum\">\n            <template [ngSwitchWhen]=\"0\">\n                <button type=\"button\" class=\"btn  btn-default next-btn {{disabled}}\" (click)=\"nextSlide()\">Next Button\n                    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n                </button>\n            </template>\n            <template [ngSwitchWhen]=\"totalSlides\">\n                <button type=\"button\" class=\"btn previous-btn btn-default\" (click)=\"previousSlide()\">Previous Button</button>\n            </template>\n            <template ngSwitchDefault>\n                <button type=\"button\" class=\"btn btn-default next-btn {{disabled}} \" (click)=\"nextSlide()\">Next Button\n                    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n                </button>\n                <button type=\"button\" class=\"btn btn-default previous-btn\" (click)=\"previousSlide()\">Previous Button</button>\n            </template>\n         </div>\n       "
                    }), 
                    __metadata('design:paramtypes', [slideNavigation_service_1.SlideNavigationService, SlideRequired_service_1.SlideRequiredService, knowledgeCheck_service_1.KnowledgeCheckService, slideCompletion_service_1.SlideCompletionService, menuNavigation_service_1.MenuNavigationService])
                ], Footer);
                return Footer;
            }());
            exports_1("Footer", Footer);
        }
    }
});
//# sourceMappingURL=footer.component.js.map