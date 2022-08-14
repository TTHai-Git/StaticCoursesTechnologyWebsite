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
    $("#show1").click(function(){
        $("ul.drop-menu1").show(function(){
            $((this)).css({
                "position" : "relative" ,
                "top" :1 ,
                "left":0 ,
                "z-index" : "9999",
                "opacity" : 0.7 ,
               
            })
        });
        
       
    })
      $("#hide1").click(function(){
        $("ul.drop-menu1").hide(function(){
            $((this)).css({
               "display" : "none" ,
            })
        });
       
    })
      $("#show2").click(function(){
        $("ul.drop-menu2").show(function(){
            $((this)).css({
                "position" : "relative" ,
                "top" :1 ,
                "left":0 ,
                "z-index" : "9999",
                "opacity" : 0.7 ,
               
            })
         });
       
    })
      $("#hide2").click(function(){
        $("ul.drop-menu2").hide(function(){
            $((this)).css({
               "display" : "none" ,
            })
        });
       
    })
        // var navbar_toggle = document.getElementById("navbar-toggle");
        // navbar_toggle.onclick = function(){
        // navbar_toggle.classList.toggle('open')
        // }
  

    $(".Nav-mobile-icon").click(function(){
            $(".Nav-Mobile").show(function(){
                $((this)).css({
                    "display" : "block" ,
                    "position" : "absolute" ,
                    "top" : 0 ,
                    "left": 0 ,
                    "z-index" : 10 ,
                    "opacity" : 0.7 ,
                })
            })
    })
    $(".Nav-mobile-icon-off").click(function(){
        $(".Nav-Mobile").hide(function(){
            $((this)).css({
                "display" : "none" ,
                "position" : "absolute" ,
                "top" : 0 ,
                "left": 0 ,
                "z-index" : 10 ,
            })
        })
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

        