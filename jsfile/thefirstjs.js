/**
 * Created by lapuda on 2017/3/16.
 */
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload!='function'){
        window.onload=func;
    }else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}
addLoadEvent(prepareGallery);
// addLoadEvent(showpic);

function prepareGallery() {

    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    var  gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){

        links[i].onclick=function () {
            return showpic(this)?false:true;
        }
    }

}

function showpic(whicpic) {

    if(!document.getElementById("placeholder")) return false;
    var source = whicpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");

    if (placeholder.nodeName !="IMG") return false;
    placeholder.setAttribute("src",source);
    if(document.getElementById("description")){

        var text = whicpic.getAttribute("title")?whicpic.getAttribute("title"):"";
        var description =document.getElementById("description");
        if(description.firstChild.nodeType==3){
            description.firstChild.nodeValue=text;

        }
    }
    return true;
}

     odd=true;
function changContent() {
    var ele = document.getElementById("the-head-logo");
    var content01 = "相看两不厌 唯我马婆娘";
    var content02 = "青山遮不住 毕竟南流去";

    if(odd==true){
        ele.firstChild.nodeValue=content01;
        odd=false;
    }else{
        ele.firstChild.nodeValue=content02;
        odd=true;
    }
}


//jquery portion

$(document).ready(function () {

    $("#imagegallery-hide").click(function () {
        $("#all-imagegallery").toggle(1000);
    });



});