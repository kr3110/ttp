$(document).ready(function () {
    $.ajax({
        type: "GET"
        , url: "http://download.finance.yahoo.com/d/quotes.csv"
        , dataType: "text"
        , data: {
            s: "GOOG"
            , f: "abo"
        }
        , success: function (response) {
            console.log(response);
            $("#empty").html(response);
        }
        , error: function (err) {
            console.log(err);
            console.log("testing erro");
        }
    });
});