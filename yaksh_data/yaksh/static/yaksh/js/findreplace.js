$(document).ready(function(){
    console.log("rimjim")
    $("body").children().each(function () {
        $(this).html( $(this).html().replace("Summary","Question") );
    });
});