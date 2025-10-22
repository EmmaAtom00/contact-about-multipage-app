// Update current time every second
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });

    const timeElement = document.getElementById('currentTime');
    if (timeElement) {
        timeElement.textContent = Date.now();
    }
}

// Initialize time update
document.addEventListener('DOMContentLoaded', () => {
    updateTime();
    setInterval(updateTime, 1000);
});