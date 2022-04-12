let navBtn = document.querySelector('button'),
    linkek = document.querySelector('nav').querySelector('div'),
    _switch = false;
navBtn.addEventListener('click', ()=>{
    if (_switch){
        linkek.style.height = "0";
        linkek.style.display = "none";    
    }
    else{
        linkek.style.height = "100%";
        linkek.style.display = "block";    
    }
    _switch=!_switch
});

window.addEventListener('resize', ()=>{
    if (window.screen.width>679){
        linkek.style.display="flex";
        linkek.style.height="100%";
    }
    else{
        linkek.style.height = "0";
        linkek.style.display = "none"; 
        _switch=false;
    }
})