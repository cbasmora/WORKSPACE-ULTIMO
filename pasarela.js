document.addEventListener('DOMContentLoaded', function () {
    // Array de imágenes
    var images = ['Diseñop1.jpg', 'Diseñop2.jpg', 'Diseñop3.jpg', 'Diseñop4.jpg'];

    var slider = document.getElementById('slider');
    var currentIndex = 0;

    // Función para cambiar la imagen automáticamente
    function autoSlide() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    }

    // Función para actualizar el contenido del slider
    function updateSlider() {
        var transformValue = -currentIndex * 100 + '%';
        slider.style.transform = 'translateX(' + transformValue + ')';
    }

    // Intervalo para cambiar automáticamente la imagen cada 3 segundos (puedes ajustar el tiempo según tus preferencias)
    setInterval(autoSlide, 5000);

    // Inicializar el slider con las imágenes
    images.forEach(function (image) {
        var imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.alt = 'Imagen';
        slider.appendChild(imgElement);
    });
});
