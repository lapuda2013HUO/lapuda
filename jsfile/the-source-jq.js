/**
 * Created by lapuda on 2017/4/25.
 */




var timeoutid;
$(document).ready(function () {

    // $(".boby-label").click(function () {
    //     alert("nihao");
    //     $(".boby-label").removeClass("boby-label");
    // });



    $("#the-all-ul li").each(function (index) {

        $(this).mouseover(function () {

            var linode = $(this);

            timeoutid=setTimeout(function () {
                $("div.content-set").removeClass("content-set");
                $("li.boby-label").removeClass("boby-label");
                $(".article-content").eq(index).addClass("content-set");
                linode.addClass("boby-label");
                
            },300);

        }).mouseout(function () {
            clearTimeout(timeoutid);
        })
    });

});