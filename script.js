document.addEventListener('scroll', ()=>{
    const nav = document.querySelector('nav');
    const logo = document.getElementById("logo-tsm");
    var menus = document.getElementsByClassName("navbar-menu");

    if (window.scrollY > 0) {
        nav.classList.add('navbar-scroll');
        logo.style.color="#1e1e1e";

        for (var i = 0; i < menus.length; i++) {
            menus[i].classList.add("navbar-menu-scroll");
        }

    } else {
        nav.classList.remove('navbar-scroll');
        logo.style.color="#f2f2f2";

        for (var i = 0; i < menus.length; i++) {
            menus[i].classList.remove("navbar-menu-scroll");
        }
    }
})

const menuItems = document.querySelectorAll('.navbar-menu a');

menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', function() {
        const targetSectionId = this.getAttribute('data-target');
        const targetSection = document.getElementById(targetSectionId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});



document.getElementById('btn-20-1').addEventListener('click', function() {
    document.getElementById('product-image-1').src = 'Asset/Refrigerator Oil/FG-55_Pail.png';
});

document.getElementById('btn-200-1').addEventListener('click', function() {
    document.getElementById('product-image-1').src = 'Asset/Refrigerator Oil/FG-55_Drum.png';
});

document.getElementById('btn-20-2').addEventListener('click', function() {
    document.getElementById('product-image-2').src = 'Asset/Diesel Engine Oil/15W.40 - CF.4,SG_Pail.png';
});

document.getElementById('btn-200-2').addEventListener('click', function() {
    document.getElementById('product-image-2').src = 'Asset/Diesel Engine Oil/15W40 CF-4_Drum.png';
});

document.getElementById('btn-20-3').addEventListener('click', function() {
    document.getElementById('product-image-3').src = 'Asset/Heat Transfer Oil/Hitro HR-32_Pail.png';
});

document.getElementById('btn-200-3').addEventListener('click', function() {
    document.getElementById('product-image-3').src = 'Asset/Heat Transfer Oil/Hitro HR-32_Drum.png';
});

document.getElementById('btn-20-4').addEventListener('click', function() {
    document.getElementById('product-image-4').src = 'Asset/Cutting Oil/Sugicut CE-11N_Pail.png';
});

document.getElementById('btn-200-4').addEventListener('click', function() {
    document.getElementById('product-image-4').src = 'Asset/Cutting Oil/Sugicut CE-11N_Drum.png';
});

document.getElementById('btn-20-5').addEventListener('click', function() {
    document.getElementById('product-image-5').src = 'Asset/Hydraulic Oil/Hydraulic AW-100_Pail.png';
});

document.getElementById('btn-200-5').addEventListener('click', function() {
    document.getElementById('product-image-5').src = 'Asset/Hydraulic Oil/Hydraulic AW-100_Drum.png';
});

document.getElementById('btn-20-6').addEventListener('click', function() {
    document.getElementById('product-image-6').src = 'Asset/Gear Oil/Sugigear HD-460_Pail.png';
});

document.getElementById('btn-200-6').addEventListener('click', function() {
    document.getElementById('product-image-6').src = 'Asset/Gear Oil/Sugigear HD-460_Drum.png';
});