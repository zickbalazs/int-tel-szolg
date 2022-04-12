let navBtn = document.querySelector('button'),
    linkek = document.querySelector('nav').querySelector('div'),
    _switch = false;
    arrows = document.querySelectorAll('i');
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

for (let i = 1; i < arrows.length; i++) {
    arrows[i].addEventListener('click', ()=>{
        let div = document.querySelector(`.a${i}`);
        if (div.style.display==""){
            div.style.display="none";
        }
        if (div.style.display=="none"){
            div.style.display="block";
            div.style.opacity = "100%";
            arrows[i].style.transform="rotate(180deg)"
        }
        else if (div.style.display=="block"){
            div.style.display="none";
            div.style.opacity = "0%";
            arrows[i].style.transform="rotate(0deg)"
        }
    });
}


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