//0302 - Interfaces do DOM 1

const links = document.querySelectorAll('.link');

function ativarElemento(elemento: HTMLElement) {
    elemento.style.color = 'red';
    elemento.style.border = '2px solid red';
}

links.forEach((item) => {
    if (item instanceof HTMLElement) {
        ativarElemento(item);
    }
});
