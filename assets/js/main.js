const classModoDark = document.querySelector('#night');
const iconLua = document.querySelector('.fa-moon');
const iconGit = document.querySelector('.git');

iconLua.addEventListener('click', (e) =>{
    const el = e.target;
    
    if (el.classList.contains('fa-moon')){
        modoEscuro(); 
    }

    else{
        modoClaro();
    }
})



function modoEscuro(){
    classModoDark.classList.add('modoDark');
    iconGit.classList.remove('git');
    iconGit.classList.add('gitLight');
    iconLua.classList.remove('dark', 'fa-moon');
    iconLua.classList.add('sol', 'fa-sun');
    iconLua.setAttribute('title', 'Ativar modo Claro');

} 

function modoClaro(){
    classModoDark.classList.remove('modoDark');
    iconGit.classList.remove('gitLight');
    iconGit.classList.add('git');
    iconLua.classList.remove('sol', 'fa-sun');
    iconLua.classList.add('dark', 'fa-moon');
    iconLua.setAttribute('title', 'Ativar modo Escuro');
    
}
