setInterval(function () {
  today = new Date();
  hex = "#" + (today.getHours() < 10 ? '0' : '') + today.getHours() + "" + (today.getMinutes() < 10 ? '0' : '') + today.getMinutes() + "" + (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
  // console.log('#' + new Date().toISOString().substr(11, 8).replace(/:/g, ''))
  document.querySelector("#clock").innerHTML = hex;
  document.body.style.backgroundColor = hex;
}, 1)

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
  social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
  social_panel_container.classList.remove('visible')
});