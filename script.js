
    // Highlight active nav link on scroll
    const sections = document.querySelectorAll('section');
    const navs = document.querySelectorAll('.nav');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('.active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scroll to section and show only that section (optional toggle logic)
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);

            // Scroll smoothly
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Set active link
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        });
    });
