// import everything from jquery, treat it as $
import * as $ from "jquery";
// msg hello friends
import msg from "./contents";
// import style
import "./message.scss";

// jquery,
// fat arrow func
$(() => {
    $("<div id='message'>")
        .text(msg + "!")
        .appendTo("body");
});
