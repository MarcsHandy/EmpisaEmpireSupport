// Enhanced cyberpunk effects
document.addEventListener('DOMContentLoaded', () => {
    // Add glitch effect to all terminal cards randomly
    const cards = document.querySelectorAll('.terminal-card');
    cards.forEach(card => {
        setInterval(() => {
            if (Math.random() > 0.7) {
                card.classList.add('glitch-effect');
                setTimeout(() => {
                    card.classList.remove('glitch-effect');
                }, 200);
            }
        }, 3000);
    });

    // Matrix-rain style cursor trail
    document.addEventListener('mousemove', (e) => {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.left = `${e.pageX}px`;
        trail.style.top = `${e.pageY}px`;
        document.body.appendChild(trail);
        setTimeout(() => {
            trail.remove();
        }, 1000);
    });
});

// Form submission with cyberpunk effects
const supportForm = document.getElementById('supportForm');
supportForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const responseTerminal = document.getElementById('formResponse');
    responseTerminal.innerHTML = `
        <div class="cyber-response">
            <p>> TRANSMISSION_COMPLETE</p>
            <p>> RECEIVED_FROM: ${document.getElementById('email').value}</p>
            <p>> RESPONSE_WILL_BE_SENT_TO_NODE</p>
            <div class="progress-bar">
                <div class="progress-fill"></div>
            </div>
        </div>
    `;
    
    // Animate progress bar
    const fill = document.querySelector('.progress-fill');
    let width = 0;
    const interval = setInterval(() => {
        width += 10;
        fill.style.width = `${width}%`;
        if (width >= 100) {
            clearInterval(interval);
            responseTerminal.innerHTML += `<p>> STATUS: REQUEST_ARCHIVED</p>`;
        }
    }, 100);
});