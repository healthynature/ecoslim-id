




$(window).on('load', function () {
$('a[data-scroll="true"]').click(function () {
var destination = $('#request-form').offset().top;
jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1400);
return false;
});
});