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
