function manejarClick(idBoton) {
    const button = document.getElementById(idBoton);

    button.addEventListener('click', function() {
        button.style.backgroundColor = 'red'; 

        const asientoReservado = document.createElement('div'); 
        asientoReservado.textContent = `Asiento ${idBoton} reservado`;

        document.getElementById('seleccionados').appendChild(asientoReservado); // Agregar el div al contenedor
    });
}

// Aplicar la función a cada botón
const asientos = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'A11', 'A12',
                 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11', 'B12',
                 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10',
                 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10'];

asientos.forEach(asiento => {
    manejarClick(asiento); // Llamar a la función para cada asiento
});
