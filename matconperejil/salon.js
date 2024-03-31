document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('recordForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        var nombre = document.getElementById('nombre').value;
        var puntuaje = document.getElementById('puntuaje').value;
        var mensaje = `Nueva sugerencia recibida:\nNombre: ${nombre}\nPuntuaje: ${puntuaje}`;

        fetch('https://discord.com/api/webhooks/1224056176237482088/7fZKhLD8zv9yDDYzPf1sbmVmlEG793__2JXb42bkrWdlywAFoOJWjMVtONOcUlognRWt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content: mensaje })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Hubo un problema al enviar la solicitud.');
            }
            alert('Se envió la solicitud. ');
            location.reload(); 
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un problema al enviar la solicitud. Por favor, intenta nuevamente.');
        });
    });
});