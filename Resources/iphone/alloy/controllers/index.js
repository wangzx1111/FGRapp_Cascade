function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    if (true && !Alloy.isTablet) {
        $.__views.__alloyId20 = Alloy.createController("list", {
            id: "__alloyId20"
        });
        $.__views.navWin = Ti.UI.iOS.createNavigationWindow({
            window: $.__views.__alloyId20.getViewEx({
                recurse: true
            }),
            id: "navWin"
        });
        $.__views.navWin && $.addTopLevelView($.__views.navWin);
    }
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.pace = [];
    Alloy.Globals.startDateTime = new Date();
    Alloy.Globals.endDateTime = new Date();
    Alloy.Globals.startDateTime.setUTCHours(0);
    Alloy.Globals.endDateTime.setMonth(Alloy.Globals.startDateTime.getMonth() + 6);
    Alloy.Globals.distance = [ 0, 100 ];
    Alloy.Globals.selfPaced = false;
    Alloy.Globals.easy = false;
    Alloy.Globals.brisk = false;
    Alloy.Globals.leisurely = false;
    Alloy.Globals.steady = false;
    Alloy.Globals.vigorous = false;
    Alloy.Globals.moderate = false;
    Alloy.Globals.strenuous = false;
    Alloy.Globals.superStrenuous = false;
    Alloy.Globals.Navigator = {
        navGroup: $.nav,
        open: function(controller, payload) {
            var win = Alloy.createController(controller, payload || {}).getView();
            $.navWin.openWindow(win);
        }
    };
    !function() {
        "use strict";
        Alloy.isTablet ? $.splitWin.open() : $.navWin.open();
    }(arguments[0] || {});
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;