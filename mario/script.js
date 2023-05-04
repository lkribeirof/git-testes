const mario = document.querySelector('.mario');

const pipe = document.querySelector('.pipe');

const cloud = document.querySelector('.cloud');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        
        mario.classList.remove('jump');

    }, 500);

}




const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    const cloudPosition = cloud.offsetLeft;

    const died = document.querySelector(".died");

    
    console.log(marioPosition);
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 ){

        

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        
        cloud.style.animation = 'none';
        cloud.style.left = `${cloudPosition}px`;

        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './img/gg.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '35px';
        mario.classList.add('died');
        mario.style.animation = '';
        
        mario.style.bottom = '-100px';

        died.addEventListener("animationstart", () => {
            console.log("animação começada");

        var audioDeath = new Audio ("./audio/SMdeath.mp3");

        audioDeath.play();

        });

        bt-restart.addEventListener("onclick", () => {

            iniciar-game.classList.add('reset');
    
    
        }
        );

        

        // game-board.classList.add('iniciar-game');
       

        clearInterval(loop);
    }
    
    
}, 10);

   

document.addEventListener('keydown', jump);








