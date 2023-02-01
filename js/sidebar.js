// 변수명은 낙타 표기법으로 작성한다.
const sidebarMenuButton = document.querySelector('.gnb-icon-button');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');
console.log(sidebarMenuButton, sidebar, overlay);

function openSidebar() {
  //is-active라는 클래스가 추가되면 보이고 제거되면 사라진다
  sidebar.classList.add('is-active');
  overlay.classList.add('is-active');
}

sidebarMenuButton.addEventListener('click',openSidebar);

function closeSidebar() {
  //overlay를 클릭했을 때 is-active라는 클래스를 제거
  sidebar.classList.remove('is-active');
  overlay.classList.remove('is-active');
}

overlay.addEventListener('click',closeSidebar);

//👀drawer-menu 부분
const drawerMenuButtonList = document.querySelectorAll('.drawer-menu-button');

function toggleDrawerMenu(){
  const drawerMenu = this.parentNode;
  drawerMenu.classList.toggle('is-open');
}

drawerMenuButtonList.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', toggleDrawerMenu)
})