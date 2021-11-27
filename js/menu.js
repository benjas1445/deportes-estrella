const contenit = document.querySelector('.contenit');
const menu = document.querySelector('.menu-navegacion');

console.log(menu)
console.log(contenit)

contenit.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')
      && e.target != menu && e.target != contenit   ){
        
        menu.classList.toggle("spread")
    }
    })