// Array de objetos que representan comentarios
let comentarios = [
    { nombre: "Ana", texto: "¡Excelente servicio! Muy recomendable." },
    { nombre: "Luis", texto: "Lugar muy limpio y bien organizado." },
    { nombre: "María", texto: "El personal es cordial y el trato es muy amable." }
];

// Función para mostrar los comentarios en la página
function mostrarComentarios() {
    let lista = document.getElementById('commentsList');
    lista.innerHTML = ''; // Limpiar la lista existente

    comentarios.forEach(comentario => {
        let item = document.createElement('li');
        item.className = 'comment-item';
        item.innerHTML = `
            <strong>${comentario.nombre}</strong>
            <p>${comentario.texto}</p>
        `;
        lista.appendChild(item); // Agregar el <li> a la lista
    });
}

// Función para agregar un nuevo comentario
function agregarComentario(event) {
    event.preventDefault(); // Evitar el comportamiento por defecto del formulario

    let nombreInput = document.getElementById('username');
    let textoInput = document.getElementById('commentText');

    // Validar la entrada del nombre
    if (nombreInput.value.trim() === '') {
        alert('Por favor, ingresa un nombre.');
        return;
    }

    // Validar la entrada del comentario
    if (textoInput.value.trim() === '') {
        alert('Por favor, ingresa un comentario.');
        return;
    }

    let nuevoComentario = {
        nombre: nombreInput.value.trim(),
        texto: textoInput.value.trim()
    };

    comentarios.push(nuevoComentario); // Agregar el nuevo comentario al array
    mostrarComentarios(); // Actualizar la lista de comentarios

    nombreInput.value = ''; // Limpiar los campos del form
    textoInput.value = '';
}

// Añadir el manejador del formulario
document.getElementById('commentForm').addEventListener('submit', agregarComentario);

// Llamar a la función para mostrar comentarios cuando la página cargue
mostrarComentarios();
