function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId5() {
        $.__views.list.removeEventListener("open", __alloyId5);
        if ($.__views.list.activity) $.__views.list.activity.onCreateOptionsMenu = function(e) {
            var __alloyId4 = {
                icon: "images/ic_action_action_autorenew.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                id: "__alloyId3"
            };
            $.__views.__alloyId3 = e.menu.add(_.pick(__alloyId4, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId3.applyProperties(_.omit(__alloyId4, Alloy.Android.menuItemCreateArgs));
            $.__alloyId3 = $.__views.__alloyId3;
            refresh ? $.addListener($.__views.__alloyId3, "click", refresh) : __defers["$.__views.__alloyId3!click!refresh"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function __alloyId21(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId21.opts || {};
        var models = __alloyId20.models;
        var len = models.length;
        var __alloyId16 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId17 = models[i];
            __alloyId17.__transform = {};
            var __alloyId19 = {
                properties: {
                    itemId: "undefined" != typeof __alloyId17.__transform["link"] ? __alloyId17.__transform["link"] : __alloyId17.get("link")
                },
                image: {
                    image: "undefined" != typeof __alloyId17.__transform["image"] ? __alloyId17.__transform["image"] : __alloyId17.get("image")
                },
                title: {
                    text: "undefined" != typeof __alloyId17.__transform["title"] ? __alloyId17.__transform["title"] : __alloyId17.get("title")
                },
                subtitle: {
                    text: "{fgrrss:startDateTime}"
                }
            };
            __alloyId16.push(__alloyId19);
        }
        opts.animation ? $.__views.__alloyId15.setItems(__alloyId16, opts.animation) : $.__views.__alloyId15.setItems(__alloyId16);
    }
    function refresh(e) {
        "use strict";
        function afterFetch() {}
        var url = Alloy.CFG.url;
        Alloy.Collections.feed.fetch({
            url: url,
            success: afterFetch,
            error: afterFetch
        });
    }
    function select(e) {
        "use strict";
        var link = e.itemId;
        var model = Alloy.Collections.feed.get(link);
        $.trigger("select", {
            model: model
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "list";
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
    var __defers = {};
    Alloy.Collections.instance("feed");
    $.__views.list = Ti.UI.createWindow({
        backgroundColor: "#FFF",
        title: "RSS Reader",
        id: "list"
    });
    $.__views.list && $.addTopLevelView($.__views.list);
    $.__views.list.addEventListener("open", __alloyId5);
    var __alloyId7 = {};
    var __alloyId10 = [];
    var __alloyId12 = {
        type: "Ti.UI.Label",
        bindId: "title",
        properties: {
            color: "#000",
            left: 10,
            height: 25,
            wordWrap: false,
            ellipsize: true,
            top: 5,
            font: {
                fontSize: 18
            },
            bindId: "title"
        }
    };
    __alloyId10.push(__alloyId12);
    var __alloyId14 = {
        type: "Ti.UI.Label",
        bindId: "subtitle",
        properties: {
            color: "#999",
            left: 10,
            height: 25,
            wordWrap: false,
            ellipsize: true,
            top: 30,
            font: {
                fontSize: 18
            },
            bindId: "subtitle"
        }
    };
    __alloyId10.push(__alloyId14);
    var __alloyId9 = {
        properties: {
            height: 60,
            name: "template"
        },
        childTemplates: __alloyId10
    };
    __alloyId7["template"] = __alloyId9;
    $.__views.__alloyId15 = Ti.UI.createListSection({
        id: "__alloyId15"
    });
    var __alloyId20 = Alloy.Collections["feed"] || feed;
    __alloyId20.on("fetch destroy change add remove reset", __alloyId21);
    var __alloyId22 = [];
    __alloyId22.push($.__views.__alloyId15);
    $.__views.__alloyId6 = Ti.UI.createListView({
        sections: __alloyId22,
        templates: __alloyId7,
        defaultItemTemplate: "template",
        id: "__alloyId6"
    });
    $.__views.list.add($.__views.__alloyId6);
    select ? $.addListener($.__views.__alloyId6, "itemclick", select) : __defers["$.__views.__alloyId6!itemclick!select"] = true;
    exports.destroy = function() {
        __alloyId20.off("fetch destroy change add remove reset", __alloyId21);
    };
    _.extend($, $.__views);
    require("alloy/moment");
    !function() {
        "use strict";
        refresh();
    }(arguments[0] || {});
    __defers["$.__views.__alloyId3!click!refresh"] && $.addListener($.__views.__alloyId3, "click", refresh);
    __defers["$.__views.__alloyId6!itemclick!select"] && $.addListener($.__views.__alloyId6, "itemclick", select);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;