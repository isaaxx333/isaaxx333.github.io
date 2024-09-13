// Seleccionamos los elementos del DOM
const title = document.getElementById('title');
const image = document.getElementById('character-image');
const reward = document.getElementById('reward');

// Función para hacer parpadear el título
function blinkTitle() {
    setInterval(() => {
        title.style.color = title.style.color === 'red' ? 'black' : 'red' ;
    }, 1000); // Cambia el color cada segundo
}


// Función para mostrar la imagen con una animación de aparición
function fadeInImage() {
    setTimeout(() => {
        image.style.opacity = 1; // Cambia la opacidad para hacer que la imagen aparezca lentamente
    }
    , 500); // Retraso de medio segundo antes de que la imagen aparezca
}

// Función para cambiar el color de la recompensa al pasar el ratón
function hoverReward() {
    reward.addEventListener('mouseover', () => {
        reward.style.color = 'blue'; // Cambia el color a azul cuando el ratón está sobre la recompensa
    });

    reward.addEventListener('mouseout', () => {
        reward.style.color = 'green'; // Vuelve a su color original cuando el ratón sale de la recompensa
    });
}

// Llamamos a las funciones para activar las animaciones
blinkTitle();
fadeInImage();
hoverReward();

        // Obtener el elemento de audio
        const audio = document.getElementById('miAudio');

        // Reproducir el audio cuando la página se carga
        window.onload = () => {
            audio.play();
        };

        // Reproducir el audio en loop cuando se hace clic en cualquier parte de la página
        document.body.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
            }
        });


