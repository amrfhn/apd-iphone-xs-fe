/* Top Search box toggle */
$(document).ready(function(){

    $(".model-select").on("click", function(event){
    

        var tab = $(this).data("stocktab");

        $(".stock-tab").hide();
        $("."+tab).toggle();
        $(".model-select").addClass("tab-active");
        $(".model-select").not(this).removeClass("tab-active");


    });
    
});