var menu_btn = document.querySelector('#menuBtn');
var menu = document.querySelector('.menu ul');
var menuItems = document.querySelectorAll('.menu ul li a');

menu_btn.addEventListener('click', function(){
  menu_btn.classList.toggle('active');
  menu.classList.toggle('active');
});
for(i = 0; i < menuItems.length; i++){
  menuItems[i].addEventListener('clik', function(){
    menu_btn.classList.remove('active');
    menu.classList.remove('active');
  })
}
function markMenuItem(menuItem){
  for(var i = 0; i < menuItems.length; i++){
    menuItems[i].classList.remove('active')
  }
  menuItem.classList.add('active');
}