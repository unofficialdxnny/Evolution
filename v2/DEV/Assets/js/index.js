const splash = document.querySelector('.splash');
const logoPaths = document.querySelectorAll("#logo path");

window.addEventListener('DOMContentLoaded', () => {
    // Reveal content after splash animation
    if (splash) {
        setTimeout(() => {
            splash.classList.add('display-none');
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }, 4500);
    } else {
        // Fallback if no splash is present
        document.body.style.overflow = 'auto';
        const content = document.querySelector('.content');
        if (content) {
            content.style.opacity = '1';
            content.style.transform = 'translateY(0)';
        }
    }
});

// For debugging: Log path lengths if needed
if (logoPaths.length > 0) {
    logoPaths.forEach((path, i) => {
        console.log(`Path ${i} length: ${path.getTotalLength()}`);
    });
}
