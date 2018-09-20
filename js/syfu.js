$('.btn').click(function(){
    // $('aside').show();
    $('aside').toggleClass("showaside");
    $('section').toggleClass("hidesec");
    $('div').show();
});
$('div').click(function(){
    // $('aside').toggleClass("showaside");
    $('aside').attr('class','hideaside');
    $('section').attr('class','showsec');
    $('div').hide();
})