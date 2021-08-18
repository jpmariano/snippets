System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SlideCompletionService;
    return {
        setters:[],
        execute: function() {
            //import { DOCUMENT } from 'angular2/platform/browser';
            SlideCompletionService = (function () {
                function SlideCompletionService() {
                    this.initRequiredList();
                }
                SlideCompletionService.prototype.isSlideComplete = function () {
                    //alert(intSlideNum);
                    if (Number(sessionStorage.slideNumber) > Number(sessionStorage.completedSlides)) {
                        sessionStorage.completedSlides = Number(sessionStorage.completedSlides) + 1;
                    }
                };
                SlideCompletionService.prototype.initRequiredList = function () {
                    if (isElmsConnected() == 1) {
                        if (typeof getSuspendDataValue == 'function') {
                            if (getSuspendDataValue('completedSlides') != null) {
                                sessionStorage.completedSlides = Number(getSuspendDataValue('completedSlides'));
                            }
                            else {
                                sessionStorage.completedSlides = 0;
                            }
                        }
                    }
                    else {
                        sessionStorage.completedSlides = 0;
                    }
                };
                return SlideCompletionService;
            }());
            exports_1("SlideCompletionService", SlideCompletionService);
        }
    }
});
//# sourceMappingURL=slideCompletion.service.js.map