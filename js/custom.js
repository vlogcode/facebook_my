$(document).ready(function(){

    $(".event_show").click(function(){
        $(".option-avt").toggle();   
    })
   

    $(".show1").click(function(){
        $(".bgr_images").show(); 
        $(".option-avt").hide();  
    })

    $(".closes").click(function(){
        $(".bgr_images").hide(); 
    })
   
    $(".js_tab1").click(function(){
        $(".secl_images").show();
        $(".chon_abmum").hide();
    })
       
    $(".js_tab2").click(function(){
        $(".secl_images").hide();
        $(".chon_abmum").show();
    })
   
   
});


$(document).on('click', '.list-pp-images ul li', function () {
    $(this).addClass('active_pp').siblings().removeClass('active_pp')
})

    $(window).click(function (e) {
    if ($(e.target).is(".option-avt")) {
        $(".option-avt").hide();
    }
   
    
});