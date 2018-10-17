	/* Top Search box toggle */
  $(document).ready(function(){
    
    $(".priceplan-btn").on("click", function(event){
   

      var tab = $(this).data("priceplan");

      //$(".plan-tab").hide();

      $(".plan-tab").removeClass("isActive");
      $("."+tab).addClass("isActive");

      $(".priceplan-btn").addClass("plan-active");
      $(".priceplan-btn").not(this).removeClass("plan-active");
      //$(".plan-tab").addClass("isActive");
      //$(".plan-tab").not(this).removeClass("isActive");

    });

    var pricetab = $(".price-tab");

    if (pricetab.length>0){
      var plantab = pricetab.find(".plan-tab")
      plantab.each(function(){
        var self = $(this)

      })
    }
    
});