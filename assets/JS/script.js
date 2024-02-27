var sliders = document.querySelectorAll('.slider_diferente');
var mostraResultados = document.querySelectorAll('.aparecer');

sliders.forEach((slider, index) => {
    slider.addEventListener('input', () => {
        var valor = Number(slider.value);
        mostraResultados[index].innerHTML = `Valor = ${valor}`;
    });
});