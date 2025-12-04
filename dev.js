// ===== LOADING SCREEN FUNCTIONS =====
function createParticles() {
    const screen = document.querySelector('.loading-screen');
    for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.bottom = '0';
        p.style.animationDelay = Math.random() * 4 + 's';
        p.style.animationDuration = (Math.random() * 3 + 3) + 's';
        screen.appendChild(p);
    }
}

function createAboutParticles() {
    const aboutSection = document.getElementById('aboutSection');
    for (let i = 0; i < 40; i++) {
        const p = document.createElement('div');
        p.className = 'about-particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.top = Math.random() * 100 + '%';
        p.style.animationDelay = Math.random() * 6 + 's';
        p.style.animationDuration = (Math.random() * 4 + 4) + 's';
        aboutSection.appendChild(p);
    }
}

function createBackgroundParticles() {
    for (let i = 0; i < 50; i++) {
        const p = document.createElement('div');
        p.className = 'bg-particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.top = Math.random() * 100 + '%';
        p.style.animationDelay = Math.random() * 8 + 's';
        p.style.animationDuration = (Math.random() * 5 + 5) + 's';
        document.body.appendChild(p);
    }
}

function unlockLocks() {
    // Maze 1 completes at 4s, Maze 2 at 6.5s (1.5s delay + 5s)
    // Add small buffer to ensure boxes reach the end - but not too early
    setTimeout(() => document.getElementById('lock1').classList.add('unlocked'), 4200); // 4s + 0.2s buffer
    setTimeout(() => document.getElementById('lock2').classList.add('unlocked'), 6700); // 6.5s + 0.2s buffer
    // Lock 3 should NOT unlock
}

function show404() {
    setTimeout(() => {
        document.getElementById('errorPopup').classList.add('show');
    }, 9000);
}

function transitionToPortfolio() {
    const btn = document.querySelector('.hire-me-btn');
    btn.innerHTML = 'Loading...';
    btn.style.pointerEvents = 'none';

    const loadingScreen = document.querySelector('.loading-screen');
    const errorPopup = document.getElementById('errorPopup');

    loadingScreen.style.opacity = '0';
    errorPopup.style.opacity = '0';

    setTimeout(() => {
        loadingScreen.style.display = 'none';
        errorPopup.style.display = 'none';

        const portfolio = document.getElementById('portfolioContainer');
        portfolio.classList.add('active');

        document.body.style.overflow = 'auto';

        initThreeJS();
        initFireflies();
        initScrollAnimations();
        createAboutParticles();
        createBackgroundParticles();
        initPlatformAnimation();
        initProjectsAnimations();
    }, 1000);
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const aboutImage = document.querySelector('.about-image');
    const aboutContent = document.querySelector('.about-content');

    if (aboutImage) observer.observe(aboutImage);
    if (aboutContent) observer.observe(aboutContent);
}

// ===== PLATFORM ANIMATION =====
function initPlatformAnimation() {
    // Split text into words for animation
    function splitTextIntoWords(element) {
        const text = element.textContent;
        const words = text.split(/(\s+)/); // Split but keep spaces
        element.innerHTML = '';

        let wordIndex = 0;
        words.forEach((word, index) => {
            if (word.trim()) {
                const span = document.createElement('span');
                span.className = 'word';
                span.textContent = word;
                span.style.transitionDelay = `${wordIndex * 0.05 + 0.5}s`;
                element.appendChild(span);
                wordIndex++;
            } else {
                // Add spaces as text nodes
                element.appendChild(document.createTextNode(word));
            }
        });
    }

    // Apply word splitting to animated elements
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(element => {
        // Preserve highlight spans
        if (element.querySelector('.highlight')) {
            const highlightSpan = element.querySelector('.highlight');
            const highlightText = highlightSpan.textContent;
            const fullText = element.textContent;
            const parts = fullText.split(highlightText);

            element.innerHTML = '';

            // Split first part
            if (parts[0]) {
                const words = parts[0].split(/(\s+)/);
                let wordIndex = 0;
                words.forEach(word => {
                    if (word.trim()) {
                        const span = document.createElement('span');
                        span.className = 'word';
                        span.textContent = word;
                        span.style.transitionDelay = `${wordIndex * 0.05 + 0.5}s`;
                        element.appendChild(span);
                        wordIndex++;
                    } else {
                        element.appendChild(document.createTextNode(word));
                    }
                });
            }

            // Add highlight as single animated word
            const highlightWords = highlightText.split(/(\s+)/);
            const highlightContainer = document.createElement('span');
            highlightContainer.className = 'highlight word';
            highlightContainer.textContent = highlightText;
            highlightContainer.style.transitionDelay = `${element.querySelectorAll('.word').length * 0.05 + 0.5}s`;
            element.appendChild(highlightContainer);

        } else {
            splitTextIntoWords(element);
        }
    });

    const platformObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const panel = entry.target.querySelector('.platform-panel');
                if (panel) panel.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    const storyPlatform = document.querySelector('.story-platform');
    if (storyPlatform) platformObserver.observe(storyPlatform);
}

// ===== FIREFLY CURSOR EFFECT =====
const fireflies = [];
const fireflyCount = 12;
let cursorX = window.innerWidth / 2;
let cursorY = window.innerHeight / 2;

function initFireflies() {
    for (let i = 0; i < fireflyCount; i++) {
        const firefly = document.createElement('div');
        firefly.className = 'firefly';
        document.body.appendChild(firefly);

        const angle = (Math.PI * 2 * i) / fireflyCount;
        const radius = 40 + Math.random() * 40;

        fireflies.push({
            element: firefly,
            x: cursorX + Math.cos(angle) * radius,
            y: cursorY + Math.sin(angle) * radius,
            offsetX: Math.cos(angle) * radius,
            offsetY: Math.sin(angle) * radius,
            floatAngle: Math.random() * Math.PI * 2,
            floatSpeed: 0.015 + Math.random() * 0.015
        });
    }

    document.addEventListener('mousemove', (e) => {
        cursorX = e.clientX;
        cursorY = e.clientY;
    });

    animateFireflies();
}

function animateFireflies() {
    fireflies.forEach((f) => {
        f.floatAngle += f.floatSpeed;
        const floatX = Math.cos(f.floatAngle) * 15;
        const floatY = Math.sin(f.floatAngle) * 15;

        const targetX = cursorX + f.offsetX + floatX;
        const targetY = cursorY + f.offsetY + floatY;

        f.x += (targetX - f.x) * 0.03;
        f.y += (targetY - f.y) * 0.03;

        f.element.style.left = f.x + 'px';
        f.element.style.top = f.y + 'px';
    });

    requestAnimationFrame(animateFireflies);
}

// ===== THREE.JS BACKGROUND WITH CAMERA ROTATION =====
let scene, camera, renderer, geometry1, material1, mesh1;
let mouseX = 0, mouseY = 0;
let targetCameraRotation = 0;
let currentCameraRotation = 0;

function initThreeJS() {
    if (scene) return;

    const container = document.getElementById('heroCanvas');

    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.002);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 5);

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // First geometry - TorusKnot (center)
    geometry1 = new THREE.TorusKnotGeometry(1.5, 0.4, 100, 16);
    material1 = new THREE.MeshBasicMaterial({
        color: 0x32CD32,
        wireframe: true,
        transparent: true,
        opacity: 0.3
    });
    mesh1 = new THREE.Mesh(geometry1, material1);
    mesh1.position.set(0, 0, 0);
    scene.add(mesh1);

    // Add particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 700;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 30;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.02,
        color: 0xDC143C,
        transparent: true,
        opacity: 0.5
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    document.addEventListener('mousemove', (event) => {
        mouseX = event.clientX / window.innerWidth - 0.5;
        mouseY = event.clientY / window.innerHeight - 0.5;
    });


    // Scroll-based camera rotation to the left (Y-axis rotation)
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        if (scrollY > windowHeight * 0.5) {
            const scrollProgress = Math.min((scrollY - windowHeight * 0.5) / (windowHeight * 0.5), 1);
            // Rotate camera around Y-axis to look left (negative rotation)
            targetCameraRotation = -scrollProgress * Math.PI * 0.4; // ~72 degree rotation to the left
        } else {
            targetCameraRotation = 0;
        }
    });

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    animateThreeJS();

    setTimeout(() => {
        container.classList.add('visible');
    }, 100);
}

function animateThreeJS() {
    requestAnimationFrame(animateThreeJS);

    // Smooth Y-axis rotation to the left
    currentCameraRotation += (targetCameraRotation - currentCameraRotation) * 0.05;

    // Rotate camera around Y-axis (looking left) instead of circular motion
    // Keep camera at same position but rotate it
    camera.position.set(0, 0, 5);
    camera.rotation.y = currentCameraRotation;

    mesh1.rotation.x += 0.002;
    mesh1.rotation.y += 0.002;

    mesh1.rotation.x += mouseY * 0.05;
    mesh1.rotation.y += mouseX * 0.05;

    renderer.render(scene, camera);
}

// ===== PROJECTS SECTION =====

function initProjectsAnimations() {
    const projectsHeader = document.querySelector('.projects-header');
    const projectCards = document.querySelectorAll('.project-card');

    // Simple observer for header
    const headerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });

    if (projectsHeader) headerObserver.observe(projectsHeader);

    // Scroll-based project swap animation
    const projectSwapObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const card = entry.target;
            const cardIndex = Array.from(projectCards).indexOf(card);

            if (entry.isIntersecting) {
                // Card is entering viewport - scroll in
                card.classList.add('scroll-in');
                card.classList.remove('scroll-out');

                // Hide previous card if it exists
                if (cardIndex > 0) {
                    const prevCard = projectCards[cardIndex - 1];
                    prevCard.classList.add('scroll-out');
                    prevCard.classList.remove('scroll-in');
                }
            } else {
                // Card is leaving viewport
                if (entry.boundingClientRect.top < 0) {
                    // Scrolling down past this card
                    card.classList.add('scroll-out');
                    card.classList.remove('scroll-in');
                } else {
                    // Scrolling up, show this card again
                    card.classList.remove('scroll-out');
                    if (cardIndex > 0) {
                        card.classList.add('scroll-in');
                    }

                    // Show previous card when scrolling back up
                    if (cardIndex > 0) {
                        const prevCard = projectCards[cardIndex - 1];
                        prevCard.classList.remove('scroll-out');
                        if (cardIndex - 1 === 0) {
                            prevCard.classList.remove('scroll-in');
                        } else {
                            prevCard.classList.add('scroll-in');
                        }
                    }
                }
            }
        });
    }, {
        threshold: [0.3, 0.7],
        rootMargin: '-20% 0px -20% 0px'
    });

    // Observe all project cards
    projectCards.forEach(card => {
        if (card) projectSwapObserver.observe(card);
    });

    // Initialize all gallery slideshows
    initGallerySlideshow();
}

function initGallerySlideshow() {
    const galleries = document.querySelectorAll('.project-gallery, .photography-gallery');

    galleries.forEach((gallery, galleryIndex) => {
        const slides = gallery.querySelectorAll('.gallery-slide');
        const dots = gallery.querySelectorAll('.dot');
        const prevArrow = gallery.querySelector('.gallery-nav-arrow.prev');
        const nextArrow = gallery.querySelector('.gallery-nav-arrow.next');
        let currentSlide = 0;
        let slideInterval;

        // Check if this is the Axis project (has model-viewer)
        const isAxisProject = gallery.closest('#axisProject') !== null;
        const baseInterval = 5000; // 5 seconds for images
        const videoInterval = 15000; // 15 seconds for videos
        const modelViewerInterval = Infinity; // Pause for 3D model

        if (slides.length === 0) return;

        // Store gallery reference for global function
        gallery.dataset.galleryIndex = galleryIndex;
        gallery._currentSlide = 0;
        gallery._slides = slides;
        gallery._dots = dots;
        gallery._slideInterval = null;

        // Helper function to check if current slide has video or model-viewer
        function getSlideType(slideIndex) {
            const slide = slides[slideIndex];
            if (!slide) return 'image';

            if (slide.querySelector('model-viewer')) {
                return 'model-viewer';
            }
            if (slide.querySelector('video')) {
                return 'video';
            }
            return 'image';
        }

        // Helper function to get appropriate interval for current slide
        function getIntervalForSlide(slideIndex) {
            const slideType = getSlideType(slideIndex);
            if (slideType === 'model-viewer' && isAxisProject) {
                return modelViewerInterval; // Pause indefinitely
            }
            if (slideType === 'video') {
                return videoInterval; // 15 seconds for videos
            }
            return baseInterval; // 5 seconds for images
        }

        // Dot click handlers for this gallery
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlideForGallery(gallery, index);
                resetSlideIntervalForGallery();
            });
        });

        // Arrow click handlers
        if (prevArrow) {
            prevArrow.addEventListener('click', (e) => {
                e.stopPropagation();
                showSlideForGallery(gallery, currentSlide - 1);
                resetSlideIntervalForGallery();
            });
        }

        if (nextArrow) {
            nextArrow.addEventListener('click', (e) => {
                e.stopPropagation();
                showSlideForGallery(gallery, currentSlide + 1);
                resetSlideIntervalForGallery();
            });
        }

        function showSlideForGallery(targetGallery, index) {
            const targetSlides = targetGallery.querySelectorAll('.gallery-slide');
            const targetDots = targetGallery.querySelectorAll('.dot');

            targetSlides.forEach(slide => slide.classList.remove('active'));
            targetDots.forEach(dot => dot.classList.remove('active'));

            currentSlide = index;
            if (currentSlide >= targetSlides.length) currentSlide = 0;
            if (currentSlide < 0) currentSlide = targetSlides.length - 1;

            targetSlides[currentSlide].classList.add('active');
            targetDots[currentSlide].classList.add('active');

            // Update stored reference
            targetGallery._currentSlide = currentSlide;
        }

        function nextSlideForGallery() {
            showSlideForGallery(gallery, currentSlide + 1);
            // After changing slide, reset interval with appropriate timing
            resetSlideIntervalForGallery();
        }

        function startSlideIntervalForGallery() {
            clearInterval(slideInterval);

            const intervalTime = getIntervalForSlide(currentSlide);

            // If it's the 3D model slide for Axis, don't start interval (pause)
            if (intervalTime === Infinity) {
                return;
            }

            slideInterval = setInterval(nextSlideForGallery, intervalTime);
            gallery._slideInterval = slideInterval;
        }

        function resetSlideIntervalForGallery() {
            clearInterval(slideInterval);
            startSlideIntervalForGallery();
        }

        // Auto-play slideshow for this gallery
        startSlideIntervalForGallery();
    });
}



// ===== INITIALIZE ON LOAD =====
createParticles();
unlockLocks();
show404();
