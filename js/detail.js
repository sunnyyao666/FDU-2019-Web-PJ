
    var f5 = true;

    document.getElementById("add-to-cart").onclick = function () {
        if (f5) alert("成功加入购物车！");
        else alert("加入购物车失败");
    };

    var box = document.getElementById("box");
    var small = document.getElementById("small");
    var mask = document.getElementById("shadow");
    var bigBox = document.getElementById("showDetails");
    var big = document.getElementById("big");
    mask.style.width = small.width / 2 + "px";
    mask.style.height = small.height / 2 + "px";
    bigBox.style.marginLeft = small.width + 10 + "px";
    bigBox.style.width = big.width / 2 + "px";
    bigBox.style.height = big.height / 2 + "px";

    document.getElementById("img-shadow").onmouseenter = function () {
        mask.style.display = "block";
        bigBox.style.display = "block";
    };

    document.getElementById("img-shadow").onmouseleave = function () {
        mask.style.display = "none";
        bigBox.style.display = "none";
    };

    document.getElementById("img-shadow").onmousemove = function (ev) {
        var x = ev.pageX - box.offsetLeft - mask.offsetWidth / 2;
        var y = ev.pageY - box.offsetParent.offsetTop - mask.offsetHeight / 2;
        if (x < 0) x = 0;
        if (x > small.width - mask.offsetWidth) x = small.width - mask.offsetWidth;
        if (y < 0) y = 0;
        if (y > small.height - mask.offsetHeight) y = small.height - mask.offsetHeight;
        mask.style.left = x + "px";
        mask.style.top = y + "px";
        big.style.left = -big.width / small.width * x + "px";
        big.style.top = -big.height / small.height * y + "px";
    };