/**
 * Created by hp on 2018/11/24.
 */
/*
$(document).ready(function(){
    $(".button3").click(function() {
        $(".button3").css(
            {
                width: '120px',
                height: '46px',
                backgroundColor: 'white',
                border: '2px solid brown',
                color: 'brown'
            });
    });
});
*/

$(document).ready(function(){
    $(".button3").click(function(){
        $(".upPer").animate({
            top:'-=40px',
            left:'+=88px'
        });
    });

    $("#accordion").accordion({

    });
});
