const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    
    this.classList.toggle('bi-moon');

    const isDarkMode = this.classList.toggle('bi-brightness-high-fill');

    if(isDarkMode){
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }else{
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
        
    }
})
