// some text here
var msg = require("./contents.js");

// style
require("./message.css");

//
var $ = require("jquery");

$(function(){
	$("<div id='message'>")
		.text(msg + "!!!!")
		.appendTo("body");
});
