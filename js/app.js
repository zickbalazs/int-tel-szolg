let navBtn = document.querySelector('button'),
    linkek = document.querySelector('nav').querySelector('div'),
    _switch = false;
    arrows = document.querySelectorAll('i'),
    questions = document.querySelectorAll('.question');

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
        EventFire(span[i-1].click,'click')
    });
    
}
for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', ()=>{
        let div = document.querySelector(`.a${i+1}`);
        if (div.style.display==""){
            div.style.display="none";
        }
        if (div.style.display=="none"){
            div.style.display="block";
            div.style.opacity = "100%";
            arrows[i+1].style.transform="rotate(180deg)"
        }
        else if (div.style.display=="block"){
            div.style.display="none";
            div.style.opacity = "0%";
            arrows[i+1].style.transform="rotate(0deg)"
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