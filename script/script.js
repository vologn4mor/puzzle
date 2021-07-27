function scrolled() {
  var pageY = window.pageYOffset;
  if(pageY > 0 && pageY < 1700) {
    colorMenu(1);
    return;
  }
  if(pageY > 1700 && pageY < 3200){
    colorMenu(3);
    return;
  }
  if(pageY > 3200 && pageY < 5000){
    colorMenu(5);
    return;
  }
  if(pageY > 5000){
    colorMenu(7);
    return;
  }
}

function colorMenu(id) {
  var menu = document.getElementById('secondBlockMenu').childNodes;
  let value = id - 2;
  if(id != 1 && menu[value].innerText[0] == "—"){
    menu[value].innerText = menu[value].innerText.slice(1);
    menu[value].classList.remove('blue');
  }
  value = id + 2;
  if(id != 7 && menu[value].innerText[0] == "—"){
    menu[value].innerText = menu[value].innerText.slice(1);
    menu[value].classList.remove('blue');
  }
  if(menu[id].innerText[0] != "—"){
    menu[id].innerHTML = "—" + menu[id].innerText;
    menu[id].classList.add('blue');
  }
}

function randomRotateAndOpacity() {
  document.getElementById('firstLine').style.opacity = Math.floor(Math.random() * (1 - 0.2 + 1) ) + 0.2;
  document.getElementById('secondLine').style.opacity = Math.floor(Math.random() * (1 - 0.2 + 1) ) + 0.2;
  document.getElementById('thirdLine').style.opacity = Math.floor(Math.random() * (1 - 0.2 + 1) ) + 0.2;
  document.getElementById('firstLine').style.rotate = Math.floor(Math.random() * (3 - (-3) + 1) ) + (-3) + "deg";
  document.getElementById('secondLine').style.rotate = Math.floor(Math.random() * (3 - (-3) + 1) ) + (-3) + "deg";
  document.getElementById('thirdLine').style.rotate = Math.floor(Math.random() * (3 - (-3) + 1) ) + (-3) + "deg";
  setTimeout(randomRotateAndOpacity, 1000);
}
