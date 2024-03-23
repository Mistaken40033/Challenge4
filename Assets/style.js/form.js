const themeSwitcher = document.querySelector('#theme-switcher');

let mode = 'dark';

themeSwitcher.addEventListener('fullscreenchange',function(){
    if (mode === 'dark') {
        mode= 'light';
        themeSwitcher.setAttribute('class', 'light');
        }
    else {
        mode = 'dark';
        themeSwitcher.setAttribute('class', 'dark');
    }
});