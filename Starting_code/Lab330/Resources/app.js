//Ti.include is still the only way to inject functionality into the global scope
//so we use that here to inject our require_once implementation
//all other functionality is implemented as common JS modules
Ti.include('js/lib/require_once.js');

var HomeWindow = require_once('js/app/HomeWindow').HomeWindow;
new HomeWindow().open();


