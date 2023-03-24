/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"deia/desafio5p/solicitaltpreco/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});