//This shim layer will not be necessary in future Titanium versions, but
//for now will serve to only load a required module once per context.
var require_once;
(function() {
	var scriptRegistry = {};
	require_once = function(moduleName) {
		if (!scriptRegistry[moduleName]) {
			scriptRegistry[moduleName] = require(moduleName);
		}
		return scriptRegistry[moduleName];
	};
})();
