!function() {
    var common = require("common-lib");

    exports.doWork = function() {
        common.commonFunction(function(data) {
            console.log(data);
        });
    };
}();