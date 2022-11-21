    let popup = document.getElementById('popup'),
        background = document.getElementById('popup_background'),
        popupbtn = document.querySelector('.mybtn_popup'),
        popupClose = document.querySelector('.img_popup');

    popupbtn.onclick = function() {
        popup.style.display = "block";
        background.style.display = "block";
    };
    popupClose.onclick = function() {
        popup.style.display = "none";
        background.style.display = "none";
    }
    // window.onclick = function(e) {
    //     if (e.target == background) {
    //         popup.style.display = "none";
    //         background.style.display = "none";
    //     }
    // }
    // const btn = document.querySelector('.btn > span');
    // btn.addEventListener('click', function() {
    //     btn.innerHTML =
    //         (btn.innerHTML == 'Отправить'), btn.innerHTML = 'Ваш запрос отправлен';
    // })