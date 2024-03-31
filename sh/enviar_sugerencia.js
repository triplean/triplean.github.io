document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('sugerenciaForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;
        var sugerencia = document.getElementById('sugerencia').value;
        var mensaje = `Nueva sugerencia recibida:\nNombre: ${nombre}\nEmail: ${email}\nSugerencia: ${sugerencia}`;

        fetch('CLOSED SYSTEM', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content: mensaje })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Hubo un problema al enviar la sugerencia.');
            }
            alert('¡Sugerencia enviada con éxito!');
            location.reload(); 
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un problema al enviar la sugerencia. Por favor, intenta nuevamente.');
        });
    });
});
