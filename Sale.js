$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop()>=200) 
        {
            $("div.Nav").css({
                "position": "fixed" ,
                "left": 0,
                "right": 0,
                "z-index": "999",
                "opacity" : 0.7,
            })
        }
        else
        {
            $("div.Nav").css({
                "position": "relative" ,
                "left": 0,
                "right": 0,
                "z-index": "999",
                "opacity" : 1,
            })
        }
    })
})

