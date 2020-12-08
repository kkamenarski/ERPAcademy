/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"home/kpmg/Example2/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});