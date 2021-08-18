System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MenuNavigationService;
    return {
        setters:[],
        execute: function() {
            MenuNavigationService = (function () {
                function MenuNavigationService() {
                    this.openMenu = '';
                }
                MenuNavigationService.prototype.toggleOpenMenu = function () {
                    if (this.openMenu == '') {
                        this.openMenu = 'open';
                    }
                    else {
                        this.openMenu = '';
                    }
                };
                MenuNavigationService.prototype.getOpenMenu = function () {
                    return this.openMenu;
                };
                return MenuNavigationService;
            }());
            exports_1("MenuNavigationService", MenuNavigationService);
        }
    }
});
//# sourceMappingURL=menuNavigation.service.js.map