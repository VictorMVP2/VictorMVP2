let editMode = false;

function toggleEditMode() {
    editMode = !editMode;
    document.querySelectorAll('.edit-buttons').forEach(button => {
        button.style.display = editMode ? 'block' : 'none';
    });
    document.querySelector('.color-picker').style.display = 'none'; // Ocultar el selector de colores en modo edición
    document.querySelector('.edit-button').style.display = editMode ? 'none' : 'block';

    document.querySelectorAll('[contenteditable]').forEach(el => {
        if (editMode) {
            el.setAttribute('contenteditable', 'true');
            el.classList.add('editing');
        } else {
            el.setAttribute('contenteditable', 'false');
            el.classList.remove('editing');
        }
    });
}

function saveChanges() {
    toggleEditMode();
}

function cancelEdit() {
    toggleEditMode();
}

function cambiarColorBorde(color) {
    document.getElementById('profile-pic').style.borderColor = color; // Cambia el color del borde de la foto de perfil
}

function changeProfilePic() {
    const url = prompt("Ingrese la URL de la nueva imagen de perfil:");
    if (url) {
        document.getElementById('profile-pic').src = url;
    }
    document.querySelector('.color-picker').style.display = 'block'; // Mostrar el selector de colores
}

function editSection(sectionId) {
    if (editMode) {
        document.getElementById(sectionId).focus();
    }
}
