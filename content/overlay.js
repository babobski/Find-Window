if (typeof(extensions) === 'undefined') extensions = {};
if (typeof(extensions.findWindow) === 'undefined') extensions.findWindow = { version : '1.0' };

(function() {
	var self = this,
		prefs = Components.classes["@mozilla.org/preferences-service;1"]
        .getService(Components.interfaces.nsIPrefService).getBranch("extensions.findWindow.");
	
	this.find = function(){
		var args = {};
		args.mode = 'find';
		self._opendFindWindow(args);
	}
	
	this.replace = function(){
		var args = {};
		args.mode = 'replace';
		self._opendFindWindow(args);
	}
	
	this.findinfiles = function() {
		var args = {};
		args.mode = 'findinfiles';
		self._opendFindWindow(args);
	}
	
	this.replaceinfiles = function() {
		var args = {};
		args.mode = 'replaceinfiles';
		self._opendFindWindow(args);
	}
	
	this.findincurrproject = function() {
		var args = {};
		args.mode = 'findincurrproject';
		self._opendFindWindow(args);
	}
	
	this.replaceincurrproject = function() {
		var args = {};
		args.mode = 'replaceincurrproject';
		self._opendFindWindow(args);
	}
	
	this._opendFindWindow = function($args) {
		$args = $args || false;
		var features = prefs.getBoolPref('alwaysRaised') ? 'alwaysRaised,minimizable' : 'minimizable';
		
		if ($args) {
			ko.launch.find2_dialog_args = $args;
		}
		
		window.openDialog('chrome://komodo/content/find/embedded.xul', 'Find Window', features);
	}
	
	
}).apply(extensions.findWindow);
