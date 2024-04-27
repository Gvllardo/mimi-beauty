     document.addEventListener("DOMContentLoaded", function() {
        const navLinks = document.querySelectorAll('.nav-link-item');
        const navBarIndicator = document.querySelector('.navbar-nav-indicator');

        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                // Remueve la clase 'active' de todos los enlaces
                navLinks.forEach(link => link.classList.remove('active'));
                // Añade la clase 'active' al enlace seleccionado
                this.classList.add('active');
                // Calcula la posición del indicador de la barra horizontal
                const linkWidth = this.offsetWidth;
                const linkLeft = this.offsetLeft;
                // Actualiza la posición del indicador
                navBarIndicator.style.width = linkWidth + 'px';
                navBarIndicator.style.left = linkLeft + 'px';
            });
        });
    });

