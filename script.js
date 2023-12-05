/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== Back to Top =====*/

document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.querySelector('.backtotop');

    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

/*===== Contact =====*/
// const form = document.getElementById('contactForm');

// form.addEventListener('submit', async (event) => {
//     event.preventDefault();  // Prevent the default form submission

//     const formData = new FormData(form);

//     try {
//         const response = await fetch('/sendMail', {
//             method: 'POST',
//             body: formData
//         });

//         // Check if response status is OK
//         if (!response.ok) {
//             throw new Error(`Failed to send email. Status: ${response.status}`);
//         }

//         const data = await response.json();

//         if (data.success) {
//             console.log('Email sent successfully');
//             form.reset();
//         } else {
//             console.error('Failed to send email');
//         }
//     } catch (error) {
//         console.error('Unexpected error:', error);
//     }
// });

/*=== V2 contact ====*/

function sendMail() {
    (function () {
        emailjs.init("awonNP5eIycs7In4O");

    })();
    var params = {
        name: document.querySelector("#name").value,
        senderemail: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value,
    };
    var serviceID = "service_prgo3qq";
    var templateID = "template_rxi4tls";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            alert("Email sent successfully");
        })
        .catch(error => {
            console.error("Error sending email:", error);

        });
}



/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    //     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 }); 