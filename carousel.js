document.addEventListener('DOMContentLoaded', function() {
    var videoCarousel = document.querySelector('.video-carousel');
    var videos = [];
    var currentIndex = 0; // Suivre l'index de la vidéo en cours

    // Simuler les fichiers vidéo dans le dossier /vhs
    var videoFiles = [
        'vhs2.mp4',
        'vhs.mp4',
        'vhs3.mp4',
        'vhs4.mp4',
        'vhs5.mp4',
        'vhs6.mp4',
        'vhs7.mp4',
        'vhs8.mp4',
        'vhs9.mp4',
        // Ajoutez ici les noms de vos fichiers vidéo
    ];

    // Charger les vidéos
    videoFiles.forEach(function(file) {
        var videoElement = document.createElement('video');
        videoElement.src = `${file}`;
        videoElement.controls = false; // Désactiver les contrôles pour une lecture automatique
        videoElement.className = 'video-item';
        videoElement.addEventListener('ended', nextVideo); // Écouter l'événement 'ended'
        videos.push(videoElement);
        videoCarousel.appendChild(videoElement);
    });

    // Afficher et jouer la première vidéo
    if (videos.length > 0) {
        playVideo(0);
    }

    // Fonction pour jouer une vidéo spécifique
    function playVideo(index) {
        videos.forEach(video => {
            video.pause();
            video.classList.remove('active');
        });
        videos[index].classList.add('active');
        videos[index].play();
    }

    // Fonction pour jouer la vidéo suivante
    function nextVideo() {
        currentIndex = (currentIndex + 1) % videos.length; // Boucle à la première vidéo après la dernière
        playVideo(currentIndex);
    }

    // Écouter les clics pour changer de vidéo manuellement (maintenant joue la suivante)
    videoCarousel.addEventListener('click', function(e) {
        if (e.target.tagName === 'VIDEO') {
            nextVideo();
        }
    });
});