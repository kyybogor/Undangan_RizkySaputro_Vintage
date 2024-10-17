function showContent() {
    document.getElementById('invitation-container').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';

    var music = document.getElementById('background-music');
music.play();

 document.getElementById('music-controls').style.display = 'flex';
}

document.getElementById('play-pause-btn').addEventListener('click', function() {
    var music = document.getElementById('background-music');
    if (music.paused) {
        music.play();
        this.textContent = 'Pause';
    } else {
        music.pause();
        this.textContent = 'Play';
    }
});

document.getElementById('volume-slider').addEventListener('input', function() {
    var music = document.getElementById('background-music');
    music.volume = this.value;
});

document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();

    if (name && email) {
        alert(`Terima kasih, ${name}! RSVP Anda telah diterima.`);
        form.reset();
    } else {
        alert('Silakan isi semua kolom yang wajib.');
    }

});

function copyText(elementId) {
    const textElement = document.getElementById(elementId);
    
    const tempInput = document.createElement('input');
    tempInput.value = textElement.textContent;
    
    document.body.appendChild(tempInput);
    
    tempInput.select();
    
    document.execCommand('copy');
    
    document.body.removeChild(tempInput);
    
    alert('Teks telah disalin ke clipboard!');
}

document.getElementById('message-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const message = document.getElementById('message').value;

    alert('Pesan Anda telah dikirim: \n\n' + message);

    document.getElementById('message').value = '';
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const barsIcon = menuToggle.querySelector('.fa-bars');
    const xmarkIcon = menuToggle.querySelector('.fa-xmark');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('show');
        barsIcon.style.display = menu.classList.contains('show') ? 'none' : 'block';
        xmarkIcon.style.display = menu.classList.contains('show') ? 'block' : 'none';
    });
});


function showContent() {
    document.getElementById('invitation-container').style.display = 'none';
    
    var mainContent = document.getElementById('main-content');
    mainContent.style.display = 'block';


    setTimeout(function() {
        mainContent.classList.add('slide-in');
    }, 10); 

    var music = document.getElementById('background-music');
    music.play();


    document.getElementById('music-controls').style.display = 'flex';
}

document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    const iconBars = this.querySelector('.fa-bars');
    const iconXmark = this.querySelector('.fa-xmark');
    
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        iconBars.style.display = 'none';
        iconXmark.style.display = 'inline';
    } else {
        menu.classList.add('hidden');
        iconBars.style.display = 'inline';
        iconXmark.style.display = 'none';
    }
});


document.querySelectorAll('#menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        if (window.innerWidth <= 600) {
            document.getElementById('menu').classList.add('hidden');
            document.querySelector('#menu-toggle .fa-bars').style.display = 'inline';
            document.querySelector('#menu-toggle .fa-xmark').style.display = 'none';
        }
    });
});

const sprinkleContainer = document.querySelector('.sprinkle-container');
function createSprinkle() {
    const sprinkle = document.createElement('div');
    sprinkle.classList.add('sprinkle');
    sprinkle.style.left = `${Math.random() * 100}%`;
    sprinkle.style.top = `${Math.random() * 100}%`;
    sprinkleContainer.appendChild(sprinkle);
    setTimeout(() => {
        sprinkle.remove();
    }, 2000);
}

function sprinkleEffect() {
    setInterval(createSprinkle, 300);
}

document.addEventListener('DOMContentLoaded', sprinkleEffect);

