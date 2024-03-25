// const toggleSwitch = document.querySelector('#theme-switch input[type="checkbox"]');
// const currentTheme = localStorage.getItem('.theme');

// let mode= 'dark';

// themeSwitcher.addEventListener('click',function(){
// // if(currentTheme){
// //   document.documentElement.setAttribute('dark',currentTheme);

//   if(currentTheme ==='dark'){
//     mode = 'light';
//     container.setAttribute ('class', 'light');
//     // toggleSwitch.checked = true;
//   }
//   else {
//     mode = 'dark'
//     container.setAttribute('class','dark')
//   }
// });

const toggleSwitch = document.getElementById('toggleSwitch');
const body = document.body;

toggleSwitch.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    if(mode === 'dark') {
    mode = 'light';
    container.setAttribute ('class', 'light');
  }
  else {
    mode = 'dark';
    container.setAttribute('class','dark');
  }
});







// function switchTheme(e){
//   if(e.target.checked){
//     document.documentElement.setAttribute('data-theme', 'dark');
//     localStorage.setItem('theme','dark');
//   }
//   else{
//     document.documentElement.setAttribute('data-theme', 'light');
//     localStorage.setItem('theme', 'light');
//   }

//   toggleSwitch.addEventListener('charge', switchTheme, false);
//   }
// });