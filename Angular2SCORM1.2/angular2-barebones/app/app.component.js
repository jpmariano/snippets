System.register(['angular2/core', './common/footer.component', './common/container.component'], function(exports_1, context_1) {
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
    var core_1, footer_component_1, container_component_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (container_component_1_1) {
                container_component_1 = container_component_1_1;
            }],
        execute: function() {
            //import {ScormService} from './common/services/scorm.service';
            //import {saw} from '';
            //import saw as saw from 'scorm';
            //declare var test: any;
            //saw = require('scorm-api-wrapper');
            //declare var test: any;
            //import './js/scormfunctions.js';
            App = (function () {
                //scorm: any;
                //scormProcessInitialize: any;
                function App(elRef) {
                    this.elRef = elRef;
                    this.name = 'container';
                    window.onbeforeunload = this.closeAndSaveScorm;
                }
                App.prototype.ngOnInit = function () {
                };
                App.prototype.closeAndSaveScorm = function (e) {
                    setSuspendDataValue('requiredList', sessionStorage.requiredList);
                    setSuspendDataValue('completedSlides', sessionStorage.completedSlides);
                    ScormProcessSetValue("cmi.core.lesson_location", sessionStorage.slideNumber.toString());
                    ScormProcessFinish();
                    return 'Do you want to leave this site?';
                };
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: "./app/common/main.component.html",
                        directives: [footer_component_1.Footer, container_component_1.Container] //Importing other component
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], App);
                return App;
            }());
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=app.component.js.map