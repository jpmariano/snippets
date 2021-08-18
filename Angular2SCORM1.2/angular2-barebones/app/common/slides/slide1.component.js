System.register(['angular2/core', 'angular2/common', './services/knowledgeCheck.service', './directives/buttonRadio.directive'], function(exports_1, context_1) {
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
    var core_1, common_1, knowledgeCheck_service_1, buttonRadio_directive_1;
    var Slide1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (knowledgeCheck_service_1_1) {
                knowledgeCheck_service_1 = knowledgeCheck_service_1_1;
            },
            function (buttonRadio_directive_1_1) {
                buttonRadio_directive_1 = buttonRadio_directive_1_1;
            }],
        execute: function() {
            Slide1 = (function () {
                //Switch button or toggle button contains 1 or 0
                //private switchButtonModel:string = '1';
                //Radio button contains one value from a set of pre defined values
                //private radioButtonModel:string = 'Maserati';
                //Set multiple values
                //public checkButtonModel:any = {bmw: false, audi: true, volkswagen: false};
                function Slide1(knowledgeCheckService) {
                    this.knowledgeCheckService = knowledgeCheckService;
                    this.rightAnswer = "Porsche";
                    this.sessionKey = "kc1";
                    this.maxAttempts = 3;
                    this.name = 'Slide1';
                }
                //private this.knowledgeCheck.run();
                Slide1.prototype.ngDoCheck = function () {
                    this.knowledgeCheckService.ngOnInit(this.sessionKey, this.maxAttempts);
                };
                Slide1.prototype.ngOnInit = function () {
                    this.radioButtonModel = 'nullls';
                    sessionStorage.warningMessage = 'this warning for slide 2';
                };
                Slide1.prototype.submit = function (strRadioButtonModel) {
                    // this.knowledgeCheck.run();
                    //this.knowledgeCheck.submit();
                    /*
                    if (this.rightAnswer = strRadioButtonModel){
                        alert('true');
                    }
                    this.rightAnswer;*/
                    //console.log(strRadioButtonModel);
                    this.knowledgeCheckService.submit(this.rightAnswer, strRadioButtonModel);
                };
                Slide1 = __decorate([
                    core_1.Component({
                        selector: 'slide1',
                        templateUrl: "./app/common/slides/slide1.component.html",
                        directives: [buttonRadio_directive_1.ButtonRadio, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [knowledgeCheck_service_1.KnowledgeCheckService])
                ], Slide1);
                return Slide1;
            }());
            exports_1("Slide1", Slide1);
        }
    }
});
//# sourceMappingURL=slide1.component.js.map