// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el formulario
    const quoteForm = document.querySelector('.quote-form');
    
    // Solo continuar si estamos en la página del formulario
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(event) {
            // Validación del lado del cliente antes de enviar
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            
            // Validar nombre
            if (name.trim() === '') {
                event.preventDefault();
                alert('Please enter your name');
                return false;
            }
            
            // Validar email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                event.preventDefault();
                alert('Please enter a valid email address');
                return false;
            }
            
            // Validar teléfono (formato básico)
            const phoneRegex = /^\d{10,}$/;
            if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
                event.preventDefault();
                alert('Please enter a valid phone number (at least 10 digits)');
                return false;
            }
        });
    }
});