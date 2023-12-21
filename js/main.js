var elInp = document.querySelector("#inp")
var elTitle = document.querySelector("#text")
function push() {
  if(elInp.value % 7 == 0 && elInp.value % 3 == 0) {
    elTitle.textContent = "7-ga va 3-ga bo'linadi"
  }else if(elInp.value % 8 == 0 && elInp.value % 4 == 0 && elInp.value % 6 == 0 && elInp.value % 3 == 0) {
    elTitle.textContent = "3, 4, 6 va 8-ga bo'linadi"
  }else if(elInp.value % 6 == 0 && elInp.value % 9 == 0) {
    elTitle.textContent = "8-ga va 4-ga bo'linadi"
  }else if(elInp.value % 9 == 0) {
    elTitle.textContent = "9-ga bo'linadi"
  }else if(elInp.value % 8 == 0) {
    elTitle.textContent = "8-ga bo'linadi"
  }else if(elInp.value % 7 == 0) {
    elTitle.textContent = "7-ga bo'linadi"
  }else if(elInp.value % 6 == 0) {
    elTitle.textContent = "6-ga bo'linadi"
  }else if(elInp.value % 5 == 0) {
    elTitle.textContent = "5-ga bo'linadi"
  }else if(elInp.value % 4 == 0) {
    elTitle.textContent = "4-ga bo'linadi"
  }else if(elInp.value % 3 == 0) {
    elTitle.textContent = "3-ga bo'linadi"
  }else if(elInp.value % 2 == 0) {
    elTitle.textContent = "2-ga bo'linadi"
  }else {
    elTitle.textContent = "Bo'linmaydi!"
  }
}