System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ScormService;
    return {
        setters:[],
        execute: function() {
            ScormService = (function () {
                function ScormService() {
                }
                ScormService.prototype.ngOnInit = function () {
                    //this.scormProcessInitialize();
                };
                ScormService.prototype.scormProcessInitialize = function () {
                    this.ScormProcessInitialize = new ScormProcessInitialize();
                };
                ScormService.prototype.scormProcessFinish = function () {
                    this.ScormProcessFinish = new ScormProcessFinish();
                };
                ScormService.prototype.scormProcessGetValue = function (r) {
                    this.ScormProcessGetValue = new ScormProcessGetValue(r);
                    //alert(this.ScormProcessGetValue);
                };
                ScormService.prototype.scormProcessSetValue = function (r, n) {
                    this.ScormProcessSetValue = new ScormProcessSetValue(r, n);
                };
                ScormService.prototype.scormCommitData = function () {
                    this.ScormCommitData = new SCORM_CommitData();
                };
                ScormService.prototype.scormStart = function () {
                    this.startTimeStamp = new Date();
                    this.scormProcessInitialize();
                    this.scormInitCompletionStatus();
                    this.scormInitSuspendData();
                };
                ScormService.prototype.scormInitCompletionStatus = function () {
                    alert(this.scormProcessGetValue("cmi.core.lesson_status"));
                    this.completionStatus = this.scormProcessGetValue("cmi.core.lesson_status");
                    //alert(this.completionStatus);
                    if (this.completionStatus == "not attempted") {
                        //alert('this.completionStatus');
                        this.scormProcessSetValue("cmi.core.lesson_status", "incomplete");
                    }
                };
                ScormService.prototype.scormInitSuspendData = function () {
                    var mainObj = {};
                    var getSuspendedData = this.scormProcessGetValue('cmi.suspend_data');
                    if (getSuspendedData == '') {
                        var defaultSuspendData = JSON.stringify(mainObj);
                        this.scormProcessSetValue('cmi.suspend_data', defaultSuspendData);
                    }
                    //this.scormCommitData();
                };
                //Returns a Json Object, Array, Number or String Depending on your values
                ScormService.prototype.scormGetSuspendDataValue = function (strObjProperty) {
                    var getSuspendedData = this.scormProcessGetValue('cmi.suspend_data');
                    var mainObj = JSON.parse(getSuspendedData);
                    var testText1 = strObjProperty.substring(0, 7);
                    if (!(testText1 == 'mainObj')) {
                        strObjProperty = 'mainObj.' + strObjProperty;
                    }
                    return eval(strObjProperty);
                };
                ScormService.prototype.scormSetSuspendDataValue = function (strObjProperty, objValue) {
                    var getSuspendedData = this.scormProcessGetValue('cmi.suspend_data');
                    var mainObj = JSON.parse(getSuspendedData);
                    switch (typeof objValue) {
                        case "string":
                            var setObjVal = 'mainObj.' + strObjProperty + ' = "' + objValue + '";';
                            break;
                        case "object":
                            objValue = JSON.stringify(objValue);
                            //alert(objValue);
                            var setObjVal = 'mainObj.' + strObjProperty + ' = ' + objValue + ';';
                            break;
                        default:
                            var setObjVal = 'mainObj.' + strObjProperty + ' = ' + objValue + ';';
                            break;
                    }
                    eval(setObjVal);
                    mainObj = JSON.stringify(mainObj);
                    this.scormProcessSetValue('cmi.suspend_data', mainObj);
                    this.scormCommitData();
                };
                return ScormService;
            }());
            exports_1("ScormService", ScormService);
        }
    }
});
//# sourceMappingURL=scorm.service.js.map