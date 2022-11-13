var progress = 0;
document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        var allElement = $("*");
        var length = allElement.length;
        for (var i = 0; i < length; i++) {
            set_element(allElement[i], length)
        }
    }
}

function set_element(element, totalElement) {
    var precentage = 100 / totalElement;
    if ($(element).length == 1) {
        $("#fill").animate({
            width: progress + precentage + "%"
        }, 10, function () {
            if (document.getElementById("fill").style.width == "100%") {
                $(".main").fadeOut(50);
            }
        });
        progress = progress + precentage;
    }
}