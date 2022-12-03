$('#about-link').on('click', function(){
    $('html, body').animate({scrollTop: $('#about').offset().top}, 1000)
})
$('#shop-link').on('click', function(){
    $('html, body').animate({scrollTop: $('.shop').offset().top}, 1000)
})
$('#contact-link').on('click', function(){
    $('html, body').animate({scrollTop: $('#contact').offset().top}, 1000)
})
$('.button-link').on('click', function(){
    $('html, body').animate({scrollTop: $('.shop').offset().top}, 1000)
})



function readMore() {
    var dots = document.getElementById("dots")
    var more = document.getElementById("more")
    var view = document.getElementById("view")

    if(dots.style.display === "none"){
        dots.style.display="inline";
        view.innerHTML="View Details";
        more.style.display="none";
    } else {
        dots.style.display="none";
        view.innerHTML="Hide";
        more.style.display="inline";
    }
}
function ReadMore() {
    var dots_1 = document.getElementById("dots_1")
    var more_1 = document.getElementById("more_1")
    var view_1 = document.getElementById("view_1")

    if(dots_1.style.display === "none"){
        dots_1.style.display="inline";
        view_1.innerHTML="View Details";
        more_1.style.display="none";
    } else {
        dots_1.style.display="none";
        view_1.innerHTML="Hide";
        more_1.style.display="inline";
    }
}



function OpenMore() {
    var dots_item = document.getElementById("dots_item")
    var more_items = document.getElementById("more_items")
    var but_more = document.getElementById("but_more")

    if(dots_item.style.display === "none"){
        dots_item.style.display="inline";
        but_more.innerHTML="View All Products";
        more_items.style.display="none";
    } else {
        dots_item.style.display="none";
        but_more.innerHTML="Hide";
        more_items.style.display="inline";
    }
}



function toggleNav() {
    var updateElement = document.getElementById("menu-icon");
 updateElement.classList.toggle("open");
   
} 