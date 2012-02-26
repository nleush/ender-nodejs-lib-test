!function() {
    var common = require("lib-common");

    exports.doWork = function() {
        common.commonFunction(function(data) {
            console.log(data);
        });
    };
}();