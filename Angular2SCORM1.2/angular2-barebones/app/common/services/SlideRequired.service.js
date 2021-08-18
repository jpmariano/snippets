System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SlideRequiredService;
    return {
        setters:[],
        execute: function() {
            SlideRequiredService = (function () {
                function SlideRequiredService() {
                    this.requiredList = [];
                    this.initRequiredList();
                    this.initRequiredSlideList();
                }
                SlideRequiredService.prototype.initRequiredSlideList = function () {
                    if (this.requiredList) {
                        sessionStorage.requiredList = this.requiredList;
                    }
                    else {
                        sessionStorage.requiredList = null;
                    }
                };
                SlideRequiredService.prototype.getRequiredSlide = function () {
                    this.requiredList = sessionStorage.requiredList.split(',');
                    this.requiredList = this.requiredList.map(function (x) {
                        return parseInt(x, 10);
                    });
                };
                SlideRequiredService.prototype.updateRequiredSlide = function () {
                    sessionStorage.requiredList = this.requiredList;
                };
                SlideRequiredService.prototype.isSlideRequired = function (intSlideNum) {
                    for (var _i = 0, _a = this.requiredList; _i < _a.length; _i++) {
                        var pageNumber = _a[_i];
                        if (pageNumber === intSlideNum) {
                            //alert("true");
                            return true;
                        }
                    }
                };
                SlideRequiredService.prototype.removeFromRequiredSlide = function (intSlideNum) {
                    //alert(intSlideNum);
                    this.getRequiredSlide();
                    var i = this.requiredList.indexOf(intSlideNum);
                    if (i != -1) {
                        this.requiredList.splice(i, 1);
                        this.updateRequiredSlide();
                    }
                };
                SlideRequiredService.prototype.initRequiredList = function () {
                    if (isElmsConnected() == 1) {
                        if (typeof getSuspendDataValue == 'function') {
                            if (getSuspendDataValue('requiredList') != null) {
                                this.requiredList = getSuspendDataValue('requiredList').split(',').map(Number);
                            }
                            else {
                                this.requiredList = [1, 2];
                            }
                        }
                    }
                    else {
                        this.requiredList = [1, 2];
                    }
                };
                return SlideRequiredService;
            }());
            exports_1("SlideRequiredService", SlideRequiredService);
        }
    }
});
//# sourceMappingURL=SlideRequired.service.js.map