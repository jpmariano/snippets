System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SlideNavigationService;
    return {
        setters:[],
        execute: function() {
            SlideNavigationService = (function () {
                function SlideNavigationService() {
                    this.initScorm();
                    this.initSlide();
                    //this.addSlideNum();
                    this.slideNumber = Number(sessionStorage.slideNumber);
                    //alert(this.slideNumber);
                    this.totalSlides = 5;
                }
                SlideNavigationService.prototype.getSlide = function () {
                    return this.slideNumber;
                };
                SlideNavigationService.prototype.getTotalSlides = function () {
                    return this.totalSlides;
                };
                SlideNavigationService.prototype.getNextSlide = function () {
                    this.slideNumber = this.slideNumber + 1;
                    return this.slideNumber;
                };
                SlideNavigationService.prototype.getPreviousSlide = function () {
                    this.slideNumber = this.slideNumber - 1;
                    return this.slideNumber;
                };
                SlideNavigationService.prototype.addSlideNum = function () {
                    if (typeof (Storage) !== "undefined") {
                        if (sessionStorage.slideNumber) {
                            sessionStorage.slideNumber = this.getSlide() + 1;
                            this.slideNumber = Number(sessionStorage.slideNumber);
                        }
                        else {
                            sessionStorage.slideNumber = Number(ScormProcessGetValue("cmi.core.lesson_location"));
                        }
                    }
                };
                SlideNavigationService.prototype.removeSlideNum = function () {
                    if (typeof (Storage) !== "undefined") {
                        if (sessionStorage.slideNumber) {
                            if (sessionStorage.slideNumber > 0) {
                                sessionStorage.slideNumber = this.getSlide() - 1;
                                this.slideNumber = Number(sessionStorage.slideNumber);
                            }
                            else {
                                this.slideNumber = sessionStorage.slideNumber = 0;
                            }
                        }
                        else {
                            sessionStorage.slideNumber = 0;
                        }
                    }
                };
                SlideNavigationService.prototype.initScorm = function () {
                    this.startTimeStamp = new Date();
                    ScormProcessInitialize();
                    initSuspendData();
                    var completionStatus = ScormProcessGetValue("cmi.core.lesson_status");
                    if (completionStatus == "not attempted") {
                        ScormProcessSetValue("cmi.core.lesson_status", "incomplete");
                    }
                };
                SlideNavigationService.prototype.initSlide = function () {
                    switch (ScormProcessGetValue("cmi.core.lesson_location")) {
                        case "":
                            sessionStorage.slideNumber = 0;
                            break;
                        case undefined:
                            sessionStorage.slideNumber = 0;
                            break;
                        case "NaN":
                            sessionStorage.slideNumber = 0;
                            break;
                        default:
                            sessionStorage.slideNumber = Number(ScormProcessGetValue("cmi.core.lesson_location"));
                            break;
                    }
                };
                SlideNavigationService.prototype.goToSlide = function (intSlideNumber) {
                    if (Number(sessionStorage.completedSlides) > intSlideNumber) {
                        sessionStorage.slideNumber = intSlideNumber;
                        this.slideNumber = intSlideNumber;
                        return this.slideNumber;
                    }
                };
                return SlideNavigationService;
            }());
            exports_1("SlideNavigationService", SlideNavigationService);
        }
    }
});
//# sourceMappingURL=slideNavigation.service.js.map