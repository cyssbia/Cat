/**
 * Created by hp on 2018/11/25.
 */
$(document).ready(function(e) {
    $('#startBtn').click(function(e) {
        $('#myCarousel').carousel('cycle');
        $('#myCarousel').carousel({interval:2000});
    });
});