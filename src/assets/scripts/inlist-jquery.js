var inlistDemo = (function($) {
	'use strict';

	// Buttons
	var convertButton = $('#convert');
	var resetButton = $('#reset');

	// Define your exports
	var demo = {
		init: init
	};

	return demo;
	//////////////////

	// Define click handlers in your init block
	function init() {
		convertButton.on('click', convertData);
		resetButton.on('click', resetData);
	}

	function convertData() {
		console.log('you clicked conversion!!!');
	}

	function resetData() {
		console.log('you just reset me!!!');
	}

})($);

$(document).ready(init);

function init() {
	inlistDemo.init();
}