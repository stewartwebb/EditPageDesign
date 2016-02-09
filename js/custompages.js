
$(function() { // Once the document has loaded run these commands.
  $('#piece-editor').hide();
  $('[data-pieceid]').click(function() {
    var pos = $(this).position();
    var dimensions = $(this)[0].getBoundingClientRect();
    var width = dimensions.width;
    var height = dimensions.height;
    var windowWidth = $( document ).width();
    var windowHeight = $(document).height();

    $("#piece-editor").css({
        position: "absolute",
        top: (pos.top) + "px",
        left: pos.left + "px",
        bottom: (windowHeight - (pos.top + height)) + "px",
        right: (windowWidth - (pos.left + width)) + "px"
    }).show();
  });
});
