$(document).ready(function() {

    $("#btnScrollToTop").hide()

    $(window).scroll(function(){
        if ($(this).scrollTop()>= 100 ) {
            $("#btnScrollToTop").show("slow")
        }
        else
        {
            $("#btnScrollToTop").hide("slow")
        }
    })
    const btnScrollToTop = document.querySelector("#btnScrollToTop")
    btnScrollToTop.addEventListener("click",function(){
    // window.scrollTo(0, 0);
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        })
    })      
<<<<<<< HEAD
})
=======
})
>>>>>>> ca81256fb98444d4e7b714548de23c88caf50b0a
