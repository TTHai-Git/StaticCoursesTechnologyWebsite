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

var d = new Date();
        var ngay = d.getDate();
        var thang = d.getMonth() + 1;
        var nam = d.getFullYear();
        var result = ngay + '/' + thang + '/' + nam;
        const collection = document.getElementsByClassName("time");
        for (let i = 0; i < collection.length; i++) {
            
            collection[i].innerHTML = result;
        }

        