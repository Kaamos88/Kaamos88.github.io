$(".one, .two, .three, .four, #lang").hide();
$(document).ready(function(){
    $(".one").delay(500).fadeIn(4000);
    $(".two").delay(500).fadeIn(4000);
    $(".three").delay(500).fadeIn(5000);
    $(".four").delay(500).fadeIn(5000);
    $("#lang").delay(500).fadeIn(5000);
});

$(document).ready(function(){
    $("#pl").click(function(){
        $(".en").hide();
        $(".pl").show();
    });
    $("#en").click(function(){
        $(".en").show();
        $(".pl").hide();
    });
});
