document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('sugerenciaForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto
        
        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;
        var sugerencia = document.getElementById('sugerencia').value;
        var mensaje = `Nueva sugerencia recibida:\nNombre: ${nombre}\nEmail: ${email}\nSugerencia: ${sugerencia}`;

        fetch('https://discord.com/api/webhooks/1211409451156897883/rtaXx9RaJcid1dPXG_dJ_ZjRWTzakXsUoBWiAKzRUib0xUhWhzjTvgD7PhFoHfDvluOV', {
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
            location.reload(); // Recargar la página después de enviar la sugerencia
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un problema al enviar la sugerencia. Por favor, intenta nuevamente.');
        });
    });
});
