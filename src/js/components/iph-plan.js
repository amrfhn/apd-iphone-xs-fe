	/* Top Search box toggle */
  $(document).ready(function(){
    
    $(".priceplan-btn").on("click", function(event){
   

      var tab = $(this).data("priceplan");

      //$(".plan-tab").hide();

      $(".my-div").removeClass("isActive");
      $("."+tab).addClass("isActive");

      $(this).parent().find(".priceplan-btn").removeClass("plan-active");
      $(this).addClass("plan-active");
      
      
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