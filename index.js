const text = document.querySelector('.second-text')

const textLoad = ()=>{
    setTimeout(()=>{
        text.textContent  = "Student"
    }, 0)
    setTimeout(()=>{
        text.textContent  = "Developer"
    }, 4000)
    setTimeout(()=>{
        text.textContent  = "Gamer"
    }, 8000)
    
}

textLoad();
setInterval(textLoad, 12000)