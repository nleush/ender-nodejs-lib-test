!function() {
	var common = require('common-lib');

	common.commonFunction(function(data) {
		var div = document.createElement('div');
		div.innerText = data;
		document.appendChild(div);
	});
}()