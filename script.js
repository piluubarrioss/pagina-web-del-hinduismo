```javascript
/* =========================================
   MENÚ PARA CELULAR
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* =========================================
   INFORMACIÓN DE LAS FIGURAS
========================================= */

const informacion = {

    buda: {
        numero: "01 · FIGURA DESTACADA",
        titulo: "Buda",
        texto:
        "Siddhartha Gautama, conocido como Buda, fue un maestro espiritual de la antigua India. Sus enseñanzas dieron origen al budismo y se centraron en comprender el sufrimiento, alcanzar la liberación y desarrollar una vida basada en la sabiduría y la compasión."
    },

    budai: {
        numero: "02 · FIGURA DESTACADA",
        titulo: "Bu Dai",
        texto:
        "Bu Dai es una figura tradicional del budismo chino que suele representarse como un hombre sonriente y de gran tamaño. Es conocido popularmente como el Buda sonriente, aunque no representa al Buda histórico Siddhartha Gautama."
    },

    ganesha: {
        numero: "03 · FIGURA DESTACADA",
        titulo: "Ganesha",
        texto:
        "Ganesha es una de las deidades más conocidas del hinduismo. Se representa con cuerpo humano y cabeza de elefante. Es asociado tradicionalmente con la sabiduría, el conocimiento y la superación de obstáculos."
    },

    kali: {
        numero: "04 · FIGURA DESTACADA",
        titulo: "Kali",
        texto:
        "Kali es una importante diosa del hinduismo. Su imagen puede resultar intensa y representa aspectos relacionados con el tiempo, la transformación y la destrucción de fuerzas negativas. También se la relaciona con la protección y el poder."
    }

};


/* =========================================
   ABRIR VENTANA DE INFORMACIÓN
========================================= */

function mostrarInfo(figura) {

    const modal = document.getElementById("modal");

    const modalNumber = document.getElementById("modalNumber");
    const modalTitle = document.getElementById("modalTitle");
    const modalText = document.getElementById("modalText");

    const datos = informacion[figura];

    modalNumber.textContent = datos.numero;
    modalTitle.textContent = datos.titulo;
    modalText.textContent = datos.texto;

    modal.classList.add("active");

}


/* =========================================
   CERRAR VENTANA
========================================= */

function cerrarInfo() {

    const modal = document.getElementById("modal");

    modal.classList.remove("active");

}


/* =========================================
   CERRAR AL HACER CLICK AFUERA
========================================= */

window.addEventListener("click", function(event) {

    const modal = document.getElementById("modal");

    if (event.target === modal) {

        cerrarInfo();

    }

});


/* =========================================
   CERRAR MENÚ DESPUÉS DE SELECCIONAR
========================================= */

const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

    });

});
```
