
function moveBg(e) {
    const rect = e.target.getBoundingClientRect();
    e.target.style.setProperty('--x', (e.clientX - rect.x) / rect.width * 100);
    e.target.style.setProperty('--y', (e.clientY - rect.y) / rect.height * 100);
}
document.querySelector("button").addEventListener('pointermove', moveBg);


let x;
function intro() {
    let i = 4; 
    let $b = document.querySelector("button");
    $b.style.setProperty( "--a", '100%' );
    x = setInterval(() => {
        $b.style.setProperty( 
            "--x", ((Math.cos(i) + 2) / 3.6) * 100
        );
        $b.style.setProperty( 
            "--y", ((Math.sin(i) + 2) / 3.6) * 100
        );
        i+= 0.03;
        if( i > 11.5 ) {
            clearInterval(x);
            $b.style.setProperty( "--a", '' );
        }
    },16);
}

function redirect() {
    // Obtener el valor ingresado en el input y eliminar espacios al principio y al final
    var inputValue = document.getElementById('userInput').value.trim().toLowerCase();

    // Mostrar en la consola el valor ingresado para verificar
    console.log("Valor ingresado: " + inputValue);

    // Redirigir según el valor ingresado
    if (inputValue === 'mabel' || inputValue === 'mab' || inputValue === 'mabelu' || inputValue === 'meibol' || inputValue === 'mabelita' || inputValue === 'mabeluu' || inputValue === 'mobol' || inputValue === 'sleepy') {
        window.location.href = 'Mabel.html'; 
    } else if (inputValue === 'salas' || inputValue === 'salasky' || inputValue === 'marco' || inputValue === 'marco salas' || inputValue === 'sal') {
        window.location.href = 'Salas.html'; 
    } 
    else if (inputValue === 'yami' || inputValue === 'yamile' || inputValue === 'yamile contreras' || inputValue === 'yumi') {
        window.location.href = 'Yami.html'; 
    } 
    else if (inputValue === 'cris' || inputValue === 'cristhel' || inputValue === 'cristhel mozo' || inputValue === 'ayumi') {
        window.location.href = 'Cristhel.html'; 
    } else {
        alert('Lo siento, no te conozco 😭');
    }
}
$('.txt').html(function(i, html) {
    var chars = $.trim(html).split("");
  
    return '<span>' + chars.join('</span><span>') + '</span>';
  });