let btn = document.getElementById('drop-menu');
let dMenu = document.getElementById('DMenu');
btn.onclick = function (e) {
    //Функция отменяет стандартное событие 
    e.preventDefault;
    this.classList.toggle('drop-menu-active');
    dMenu.classList.toggle('UpDrop');
};
dMenu.onclick = function () {
    dMenu.classList.remove('UpDrop');
    btn.classList.remove('drop-menu-active');
    // console.log('filed');
};
