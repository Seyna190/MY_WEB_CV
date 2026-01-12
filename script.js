const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const body = document.body;

// --- Theme Toggle ---
function switchTheme(e) {
    if (e.target.checked) {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

// Check for saved user preference, if any, on load of the website
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    body.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

// --- Visitor Counter ---
// REPLACE THIS URL WITH YOUR DEPLOYED API GATEWAY URL
const API_URL = 'https://ek5ytoxnz1.execute-api.us-east-1.amazonaws.com';

async function updateCounter() {
    try {
        if (API_URL.includes('REPLACE')) {
            const counterElement = document.getElementById('counter');
            if (counterElement) counterElement.innerText = "Set API URL";
            return;
        }

        const response = await fetch(API_URL);
        const data = await response.json();

        const counterElement = document.getElementById('counter');
        if (counterElement) {
            if (data.count) {
                counterElement.innerText = data.count;
            } else {
                counterElement.innerText = data;
            }
        }

    } catch (error) {
        console.error('Error fetching visitor count:', error);
        const counterElement = document.getElementById('counter');
        if (counterElement) counterElement.innerText = "Error";
    }
}

document.addEventListener('DOMContentLoaded', updateCounter);
