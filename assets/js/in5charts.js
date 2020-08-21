$(function(){
$(document).on('newPage', function(){
$('.activePage').find('iframe').each(function(index,elem){
var j = $(elem);
if(!j.attr('data-src')){
var src = j.attr('src');
j.attr('src', '').attr('src',src);
}
});
});
});