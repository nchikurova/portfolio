const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

// ICON LIBRARIES SOURCES:

//AWESOME_FONTS
//https://fontawesome.com/v4.7.0/examples/

//OBSERVABLE
//https://observablehq.com/@observablehq/logo
//logo = html`<svg viewBox="-3 0 28 28" height="120" fill="currentColor" color="#000"><svg viewBox="0 0 25 28" width="22" height="28"><path d="M12.5 22.667c-1.154 0-2.154-.252-3-.754a5.091 5.091 0 01-1.945-2.048 10.801 10.801 0 01-.991-2.741A14.747 14.747 0 016.25 14c0-.83.054-1.624.164-2.382.108-.758.309-1.529.602-2.31a7.37 7.37 0 011.129-2.035 5.118 5.118 0 011.807-1.401c.746-.36 1.594-.539 2.548-.539 1.154 0 2.154.252 3 .754.843.501 1.517 1.21 1.945 2.048.452.861.782 1.775.991 2.741.209.965.314 2.007.314 3.124a16.7 16.7 0 01-.163 2.382 10.63 10.63 0 01-.615 2.31c-.302.782-.677 1.46-1.13 2.035-.451.575-1.05 1.042-1.794 1.401-.745.36-1.594.539-2.548.539zm2.206-6.373c.598-.6.93-1.43.919-2.294 0-.893-.299-1.658-.896-2.294-.598-.637-1.34-.956-2.229-.956s-1.631.319-2.23.956A3.236 3.236 0 009.376 14c0 .893.299 1.658.896 2.294.598.637 1.34.956 2.229.956s1.624-.319 2.206-.956zM12.5 27C19.403 27 25 21.18 25 14S19.403 1 12.5 1 0 6.82 0 14s5.597 13 12.5 13z"/></svg></svg>`

//SOCIAL MEDIA
//https://www.w3schools.com/howto/howto_css_social_media_buttons.asp

//GITHUB
//https://github.com/logos

//TABLEAU
//https://icons8.com/icons/set/tableau-icons

//Simple icons
//https://simpleicons.org/

// const f = document.getElementById('navbar-links');
// document.addEventListener('click', function (ev) {
//     f.style.transform = 'translateY(' + (ev.clientY - 25) + 'px)';
//     f.style.transform += 'translateX(' + (ev.clientX - 25) + 'px)';
// }, false);


//Button source: https://html-online.com/articles/dynamic-scroll-back-top-page-button-javascript/
/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function () {
    $("#back2Top").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
/*Scroll to top when arrow up clicked END*/

const projectsButton = d3.select('#projects_button')
