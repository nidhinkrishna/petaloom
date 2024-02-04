$('.carousel').carousel({interval: false,});

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});
//scroll reveal
ScrollReveal({ 
    reset: true,
    distance: '30px',
    duration: 1000,
    delay: 150
 });
 ScrollReveal().reveal('.logo,.first-img', {origin:'top'});
 ScrollReveal().reveal('.first-ltr,#products,.gal-img', {origin:'bottom'});

 ScrollReveal().reveal('.why-us_main-title,.why-us-img,.projects h3',{origin:'left'});
 ScrollReveal().reveal('.why-div-us,.contact h3', {origin:'right'});
