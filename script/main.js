const navLeftImg = document.querySelector('.nav-left__img');
const menuDropLeft = document.querySelector('.menu-drop-down-left');

navLeftImg.addEventListener('click', ()=>{
    if (menuDropLeft.classList.contains('hide')){
        menuDropLeft.classList.remove('hide');
    }else{
        menuDropLeft.classList.add('hide');
    }
})