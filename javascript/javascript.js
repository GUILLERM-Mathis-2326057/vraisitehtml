let checkbox = document.querySelector("#darkmode-toggle");

checkbox.addEventListener("change",(elem) => {
  console.log(elem.checked);
  let baliseStyle = document.querySelector("#colorCssFile");

  if (balise.style.getAttribute("href") === "../css/light.css"){
    baliseStyle;setAttribute("href","../css/dark.css");
    return
  }
  baliseStyle.setAttribute("href","../css/light.css");
});