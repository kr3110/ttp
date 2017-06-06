$(document).ready(function () {
    $('#div').hide();
});
$("#div").click(function () {
    $('#div').hide();
});
$(document).ready(function () {
    $("#pw").click(function () {
        $('#div').show(function () {
            $('#div').animate({
                color: "#aa0000"
                , backgroundColor: "#000"
                  , fontSize: "20px"
            });
            $('.strong').animate({
            fontSize: "40px"
        });
            $('#div').slideDown(10000);
        });
    });
});

$(document).ready(function () {
    $("#div").click(function () {
        $('#div').slideUp(2500);
    });
});
$(document).ready(function () {
    $(".strong").click(function () {
        $('#div').animate({
            color: "#000"
            , backgroundColor: "#fff"
            , fontSize: "12px"
        });
        $('.strong').animate({
            fontSize: "12px"
        });
    });
});