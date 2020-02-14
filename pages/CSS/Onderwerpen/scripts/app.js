function styleChanger(cssText, iframe_el) {
    var text = document.getElementById(cssText);
    var iframe = document.getElementById(iframe_el);
    var style = iframe.contentWindow.document.getElementById("css")
    style.innerHTML = text.value
    console.log(style);
}

document.onload = () => {
    styleChanger('background-color_style', 'background-color_voorbeeld')
}