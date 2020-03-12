/*  Theme Name: ABR Blog
    Author: btxuyenhcmus
    Version: 1.0.0
    File Description:Main JS file of the template
*/
(function($) {

    'use strict';

    function initMetisMenu() {
        //metis menu
        $("#side-menu").metisMenu();
    }

    function initLeftMenuCollapse() {
        // Left menu collapse
        $('.button-menu-mobile').on('click', function(event) {
            event.preventDefault();
            $("body").toggleClass("enlarged");
        });
    }

    function init() {
        initMetisMenu();
        initLeftMenuCollapse();
    }
    init();

})(jQuery)

$(document).ready(function() {
    var t = {
        delay: 125,
        overlay: $(".fb-overlay"),
        widget: $(".fb-widget"),
        button: $(".fb-button")
    };
    setTimeout(function() {
        $("div.fb-livechat").fadeIn()
    }, 8 * t.delay), $(".ctrlq").on("click", function(e) {
        e.preventDefault(), t.overlay.is(":visible") ? (t.overlay.fadeOut(t.delay), t.widget.stop().animate({
            bottom: 0,
            opacity: 0
        }, 2 * t.delay, function() {
            $(this).hide("slow"), t.button.show()
        })) : t.button.fadeOut("medium", function() {
            t.widget.stop().show().animate({
                bottom: "30px",
                opacity: 1
            }, 2 * t.delay), t.overlay.fadeIn(t.delay)
        })
    })
});