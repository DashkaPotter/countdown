function christmasCountdown(){
    const christmasDate = new Date ("December 25,2023 00:00");
    const now = new Date();
    const diff = christmasDate - now;

    const msInSeconds = 1000;  // в одной секунде  милисекунд - 1.000
    const msInMinutes = 60*1000; // милисекунд в минуте 60.000
    const msInHours = 60*60*1000; // милисекунд в часе 3 600 000
    const msInDays = 24*60*60*1000 // милисекунд в днях 86 400 000

    const displayDays = Math.floor(diff/msInDays) ; //делим разницу на колво милисекунд в дне
    const displayHours = Math.floor((diff%msInDays)/ msInHours);
    const displayMinutes = Math.floor((diff%msInHours)/msInMinutes);
    const displaySeconds = Math.floor((diff%msInMinutes)/msInSeconds)

    document.querySelector('.days').textContent = displayDays;
    document.querySelector('.hours').textContent = displayHours;
    document.querySelector('.minutes').textContent = displayMinutes;
    document.querySelector('.seconds').textContent = displaySeconds;

    if(diff<=0){
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minutes').textContent = 0;
        document.querySelector('.seconds').textContent = 0;
        clearInterval(timerId);
        merryChristmas();
    }
}

let timerId = setInterval(christmasCountdown,1000);

function merryChristmas(){
    const heading = document.querySelector('.heading');
    heading.textContent ='MERRY CHRISTMAS!!! HO-HO-HO';
    heading.classList.add('heading2')
}


//player

const prev = document.querySelector('.prev');
const play = document.querySelector('.play');
const next = document.querySelector('.next');
const audio = document.querySelector('.audio');
const songName = document.querySelector('.songName');

const songs = [
    {name: `Last Christmas - Wham`,
    path: 'Last Christmas.mp3'},
    {name: `All I Want For Christmas - Mariah Carey`,
    path: 'All I Want For Christmas Is You.mp3'},
    {name: `Jingle Bells Rock - Bobby Helms`,
    path: 'Jingle Bell Rock.mp3'},
    {name: `Let it snow! - Dean Martin`,
    path: 'Let It Snow .mp3'},

];

let i = 0;

play.addEventListener('click', () => {
        
    if(audio.paused) {
        audio.play();
        play.innerHTML = `<i class="fas fa-pause"></i>`;
    }

    else{
        audio.pause();
        play.innerHTML = `<i class="fas	fa-play"></i>`;
    }
})

next.addEventListener('click', () => {
    i++;
    if(i > songs.length - 1) {
        i = 0;
    }

    audio.src = songs[i].path;
    songName.textContent = songs[i].name;
    play.innerHTML = `<i class="fas fa-pause"></i>`;
    //play.classList.add('pause');
    playSong();
})

prev.addEventListener('click', () => {
    i--;
    if(i < 0) {
        i = songs.length - 1;
    }

    audio.src = songs[i].path;
    songName.textContent = songs[i].name;
    play.innerHTML = `<i class="fas fa-pause"></i>`;
    //play.classList.add('pause');
    playSong();
})

function playSong() {
    if(audio.paused){
        audio.play();
    }
}

audio.addEventListener('ended', () => {
    i++;

    audio.src = songs[i].path;
    songName.textContent = songs[i].name;

    if(i > songs.length) {
        i = 0;
    }
    else if(audio.paused) {
        audio.play();
        play.innerHTML = `<i class="fas fa-pause"></i>`;
        //play.classList.toggle('pause');
    }
    
    play.innerHTML = `<i class="fas fa-pause"></i>`;
    //play.classList.toggle('pause');
})

//progress bar

const progressBar = document.querySelector('.progressBar');
const progress = document.querySelector('.progress');

audio.addEventListener('timeupdate', updateProgress);

function updateProgress(e) {
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`
}

progressBar.addEventListener('click', setProgress);

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}



particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 400,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#fff"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "https://cdn.glitch.global/075cd734-3cb8-4d9a-b36f-589c63d75e61/snow.png?v=1665413600168",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 8.3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 20,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 50,
            "color": "#ffffff",
            "opacity": 0.6,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "bottom",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 300,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode":  "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 150,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 200,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.2
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
})