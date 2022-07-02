window.onload = function () {
    var arrTel = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"];
    var arrBtn = document.getElementsByName('button');
    var tel = document.getElementById("id-input-tel");
    for (var i = 0; i < arrBtn.length; i++) {
        arrBtn[i].index = i;
        arrBtn[i].onclick = function () {
            tel.value += arrTel[this.index];
        };
    }
};