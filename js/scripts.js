
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

$(function() {
    $(#mi-formulario).validate({
        rules: {
            rut: {
                requiered : true,
                minLength: 8,
                maxLength: 8,
            },
            fdigit:{
                requiered: true,
                maxLength: 1,
            },
            name:{
                requiered : true,
                maxLength: 50,
            },
            lastname:{
                requiered : true,
                maxLength: 50,
            },
            adress:{
                requiered : true,
                maxLength: 50,
            },
            messages: {
                rut:{
                    requiered : "Ingresa tu Rut",
                    minLength : "Rut incorrecto",
                    maxLength : "Rut incorrecto",
                },
                fdigit:{
                    requiered : "Ingresa digito verificador",
                    maxLength : "Digito incorrecto",
                },
                name:{
                    requiered : "Porfavor ingrese su nombre",
                },
                lastname:{
                    requiered : "Porfavor ingrese su Apellido",
                },
                adress:{
                    requiered : "Porfavor ingrese su Direccion",
                },
            }
        }
    });
})



