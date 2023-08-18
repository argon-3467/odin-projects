function flipDashboard() {
  let leftSidebar = document.querySelector('.left');
  let rightsidebar = document.querySelector('.right');
  leftSidebar.classList.remove('left');
  leftSidebar.classList.add('right');
  rightsidebar.classList.remove('right');
  rightsidebar.classList.add('left');
}
