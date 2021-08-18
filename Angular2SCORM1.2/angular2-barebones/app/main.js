System.register(['angular2/platform/browser', './app.component', './common/services/slideNavigation.service', './common/services/SlideRequired.service', './common/services/slideCompletion.service', './common/slides/services/knowledgeCheck.service', './common/services/menuNavigation.service', './common/services/scorm.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, slideNavigation_service_1, SlideRequired_service_1, slideCompletion_service_1, knowledgeCheck_service_1, menuNavigation_service_1, scorm_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
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
            },
            function (scorm_service_1_1) {
                scorm_service_1 = scorm_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.App, [slideNavigation_service_1.SlideNavigationService, SlideRequired_service_1.SlideRequiredService, knowledgeCheck_service_1.KnowledgeCheckService, scorm_service_1.ScormService, slideCompletion_service_1.SlideCompletionService, menuNavigation_service_1.MenuNavigationService]);
        }
    }
});
//# sourceMappingURL=main.js.map