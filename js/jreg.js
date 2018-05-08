$(function(){
    $("#menu li").on("click", function(){
        var i = $(this).index();
        $("#formularios form").hide();
        $("#formularios form").eq(i).show();
        $("#menu li a").removeClass("active");
        $(this).find("a").addClass("active");
    });
});