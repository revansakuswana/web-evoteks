/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER services ===============*/
let swiperportofolio = new Swiper(".popular__container", {
    spaceBetween: 25,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})
$("article.multimedia").click(function (event) {
    console.log(event);
    event.preventDefault();
    var content = $(".modal-body");
    content.empty();
    var title = $(this).attr("title");
    var description = $(this).attr("description");
    $(".modal-title").html(title);
    console.log($(this).html());
    let src = $(this).attr("src");

    $(
    ".modal-body"
    ).append(`<video width="465" height="350" autoplay="false" controls>
        <source src="${src}" type="video/mp4">      
        Your browser does not support the video tag.
        </video>`);

    console.log(description);
    $(".modal-body").append(`<h5>${title}</h5>`);
    $(".modal-body").append(`<p>${description}</p>`);
    });
    $("article.mobile").click(function (event) {
    event.preventDefault();
    let content = $(".modal-body");
    content.empty();
    let title = $(this).attr("title");
    let description = $(this).attr("description");

    let src = $(this).attr("src");

    $(".modal-body").append(`<img
        src="${src}"
        alt="${title}"
        class="portfolio__img"/>`);
    $(".modal-body").append(`<h5>${title}</h5>`);
    $(".modal-body").append(`<p>${description}</p>`);
    });
/*=============== VALUE ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.value__accordion-item')

// 1. Select each item
accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.value__accordion-header')

    // 2. Select each header click
    accordionHeader.addEventListener('click', () =>{
        // 7. Create the tag
        const openItem = document.querySelector('.accordion-open')
        
        // 5. Call toggle item function
        toggleItem(item)

        // 8. Check if the class exists
        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

// 3. Create a constant type function
const toggleItem = (item) =>{
    // 3.1 Create the tag
    const accordionContent = item.querySelector('.value__accordion-content')

    // 6. If there is another element that contains the class accordion-open remove its class
    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        // 4. Add the maximum height of the content
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '70px',
    duration: 2000,
    delay: 2000,
})

sr.reveal(`.home__title, .footer__container`)
sr.reveal(`.home__title`, {distance: '100px'})
sr.reveal(`.home__title2`, {distance: '100px', delay: 3000})
sr.reveal(`.company`, {origin: 'bottom', distance: '100px', delay: 4500})
sr.reveal(`.footer__info`, {delay: 500})
sr.reveal(`.home__images, img.img-fluid`, {delay: 800, origin: 'bottom'})
sr.reveal(`div.content.bg-white, .services, .portofolio__card`,  {delay: 800, origin: 'top'})
sr.reveal(`.logos__img`, {interval: 100})
sr.reveal(`.value__images, .contact__content`, {delay: 800, origin: 'left'})
sr.reveal(`.value__content, .contact__images`, {delay: 800, origin: 'right'})
sr.reveal(`.image-flip`, { delay: 800, origin: "top" });

setTimeout(function() {
    let logoElement = document.querySelector('div.home__logo');
    logoElement.style.opacity = '1';
}, 1000);

setTimeout(function() {
    let logoElement = document.querySelector('div.home__logo');
    logoElement.style.opacity = '0.5';
}, 3000);


// Setelah 0.5 detik, munculkan teks
setTimeout(function() {
    let textElement = document.querySelector('h1.home__title');
    textElement.style.opacity = '1';
}, 3000);

setTimeout(function() {
    let textElement = document.querySelector('h1.home__title2');
    textElement.style.opacity = '1';
}, 3500)

setTimeout(function() {
    let textElement = document.querySelector('p.home__description');
    textElement.style.opacity = '1';
}, 4000)   
