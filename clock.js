function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Determine AM or PM
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 => 12
    hours = String(hours).padStart(2, '0');

    const currentTime = `${hours}:${minutes}:${seconds} ${ampm}`;

    const clockElement = document.getElementById('clock');
    if (clockElement) {
        clockElement.textContent = currentTime;
    }
}

// Initial call
updateClock();

// Update clock every second
setInterval(updateClock, 1000);
