// Theme Toggle
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme);

// Visitor Counter
// REPLACE THIS URL AFTER TERRAFORM DEPLOYMENT
const API_URL = 'https://YOUR_API_GATEWAY_URL/count'; 

async function updateCounter() {
    try {
        // In a real scenario, this would be a POST to increment, or the GET would increment
        // Assuming GET increments for simplicity in this demo
        const response = await fetch(API_URL);
        const data = await response.json();
        document.getElementById('counter').innerText = data.count;
    } catch (error) {
        console.error('Error fetching visitor count:', error);
        document.getElementById('counter').innerText = 'Error';
    }
}

// updateCounter(); // Uncomment after setting API_URL
document.getElementById('counter').innerText = "Coming Soon"; // Placeholder
