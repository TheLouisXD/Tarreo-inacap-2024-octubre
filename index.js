const scriptURL = 'https://script.google.com/macros/s/AKfycbzaAp-ZslFYeXmv0_dfT2KMbouoE418LxJaV_DCZVoikB2g1cOWrSTGD5sk-0ogZxxk/exec';

const form = document.forms['form'];

const btn = document.querySelector('.submit');

form.addEventListener('submit', e => {
    btn.classList.add('button--loading')
    e.preventDefault()
    fetch(scriptURL, {method : 'POST', body: new FormData(form)})
    .then(Response => swal("Ingreso con exito", "Los datos han sido enviados", "success"))
    .then(() => {window.location.reload(); })
    .catch(error => console.error('Error', error.message))
    
})


