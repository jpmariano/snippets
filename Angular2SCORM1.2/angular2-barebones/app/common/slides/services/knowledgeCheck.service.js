System.register(['angular2/core', 'angular2/platform/browser'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, browser_1;
    var KnowledgeCheckService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            KnowledgeCheckService = (function () {
                function KnowledgeCheckService(document) {
                    this.document = document;
                    this.isCompleted = sessionStorage.getItem(this.sessionKey);
                    this.ttlQuestions = 0;
                    this.feedback1 = "<p>You are correct. Please select the X or anywhere outside the box, then click the Next button to continue.</p>";
                    this.feedback2 = "<p>That is incorrect. Please select the X or anywhere outside the box to try again.</p>";
                    this.feedback3 = "<p>Feedback 3</p>";
                    this.attempts = 0;
                }
                // implement OnInit's `ngOnInit` method
                KnowledgeCheckService.prototype.ngOnInit = function (strSessionKey, intMaxAttempts) {
                    this.sessionKey = strSessionKey;
                    if (!this.isCompleted) {
                        this.isCompleted = 0;
                    }
                    this.maxAttempts = intMaxAttempts;
                    this.correct = false;
                    this.attemptCompleted = false;
                };
                KnowledgeCheckService.prototype.submit = function (strRightAnswer, strRadioButtonModel) {
                    /* This works
                    $(this.document).find('.kc-quiz-button').on('click', function() {
                        console.log(this);
                    });
                    */
                    this.attempts++;
                    this.correct = this.evaluateAnswers(strRightAnswer, strRadioButtonModel);
                    this.attemptCompleted = this.checkMaxAttempts();
                    if (this.correct === true) {
                        this.disable = '';
                    }
                };
                KnowledgeCheckService.prototype.evaluateAnswers = function (strRightAnswer, strRadioButtonModel) {
                    if (strRightAnswer === strRadioButtonModel) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                KnowledgeCheckService.prototype.checkMaxAttempts = function () {
                    if (this.attempts >= this.maxAttempts) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                KnowledgeCheckService.prototype.enableButton = function () {
                    return this.disable;
                };
                KnowledgeCheckService.prototype.resetEnableButton = function () {
                    this.disable = null;
                };
                KnowledgeCheckService = __decorate([
                    __param(0, core_1.Inject(browser_1.DOCUMENT)), 
                    __metadata('design:paramtypes', [Object])
                ], KnowledgeCheckService);
                return KnowledgeCheckService;
            }());
            exports_1("KnowledgeCheckService", KnowledgeCheckService);
        }
    }
});
//# sourceMappingURL=knowledgeCheck.service.js.map