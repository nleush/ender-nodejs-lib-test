!function() {
    var common = require('lib-common');
    
    exports.doWork = function() {
        common.commonFunction(function(data) {
            var div = document.createElement('div');
            div.innerHTML = data;
            document.body.appendChild(div);
        });
    };
}();