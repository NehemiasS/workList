document.addEventListener('DOMContentLoaded',function(){
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const table = document.getElementById('table');
    const btn = document.getElementById('add');

    btn.onclick = function(){
        console.log('title:', title.value);
        console.log('description:', description.value);
    };

    function addTodo() {
        if ( title.value === '' || description.value === ''){
            console.error(' Titulo y descripcion requeridos');
        }else{
            console.log('todo bien');
        }
    };

})