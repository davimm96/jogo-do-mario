const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

const jump = () => {
    mario.classList.add("jump")

    setTimeout(() => {
        mario.classList.remove("jump")
    },500)
}

function handleKeydown(event) {
    if (event.keyCode === 38) { // tecla de seta para cima
        jump()
    }
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    
    //console.log(pipePosition)
    //Quando o usuario perder
    if(pipePosition < 144 && pipePosition > 0 && marioPosition < 109){
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`
        
        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = "./images/game-over.png"
        mario.style.width = "75px"
        mario.style.marginLeft = "50px"

        clearInterval(loop)
    }
}, 10)

document.addEventListener("keydown", handleKeydown)
