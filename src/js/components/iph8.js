/* Top Search box toggle */
$(document).ready(function(){

    $(".phn-name1").on("click", function(event){
    

        var tab = $(this).data("showiph8");

        $(".ph-compare-bg1").hide();
        $("."+tab).toggle();
        $(".phn-name1").addClass("ip8-active");
        $(".phn-name1").not(this).removeClass("ip8-active");


    });
    
});