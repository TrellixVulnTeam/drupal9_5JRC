// console.log('it works!');

 (function($){
        $(window).scroll(function () {
            if ($(this).scrollTop() < 50){
                $("header #block-mytheme-main-menu ").css({"background-color":"transparent","background-image": "linear-gradient(326deg, transparent 0%, transparent 74%)",
    "padding": "45px 0","margin-top": "82px"}); 

                $(".heading ").css({"margin-top":"183px","transition": "all 0.5s ease-in-out"})
               
            }else{
                $("header #block-mytheme-main-menu ").css({"background-color":"#bd4f6c",'position': 'fixed','top': '0','width': '100%','z-index':'1',"background-image": "linear-gradient(326deg, #bd4f6c 0%, #d7816a 74%)",
    "padding": "7px 0","margin-top": "0" });

    $("header .language-switcher-language-url").css({"background-color":"#bd4f6c",'top': '23px','width': '100%','z-index':'1',"background-image": "linear-gradient(326deg, #bd4f6c 0%, #d7816a 74%)" }); 

    $("header #block-mytheme-branding").css({"background-color":"#bd4f6c",'top': '0','width': '100%','z-index':'1',"background-image": "linear-gradient(326deg, #bd4f6c 0%, #d7816a 74%)" }); 
}
})

    // $(document).ready(function(){
    //     alert();
    //     });
    }
    (jQuery));
    