const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const body = document.body;
const counterElement = document.getElementById('counter');

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
// Example: const API_URL = 'https://abc12345.execute-api.us-east-1.amazonaws.com/prod/visitors';
const API_URL = 'https://REPLACE_WITH_YOUR_API_ID.execute-api.us-east-1.amazonaws.com/prod/visitors'; 

async function updateCounter() {
    try {
        // Optimistic display or waiting for fetch
        // In a real scenario, you'd fetch POST to increment, or GET if you just want to read.
        // We will assume the API increments on POST or GET. Let's try POST.
        
        // Note: For this challenge, often a simple GET triggers the increment or a POST.
        // I will assume POST for incrementing as it's cleaner Restful practice, but simple GET is okay too.
        // Let's use simple fetch which defaults to GET. If the lambda increments on event, it works.
        // If we need POST:
        /*
        const response = await fetch(API_URL, {
             method: 'POST'
        });
        */
        
        // For now, let's assume the Lambda is simple and just runs on invocation.
        // If your API is set to GET triggers:
        if (API_URL.includes('REPLACE')) {
             counterElement.innerText = "Set API URL";
             return;
        }

        const response = await fetch(API_URL);
        const data = await response.json();
        
        // Expecting { "count": 123 } or similar
        // Adjust based on your Lambda response structure.
        // Let's assume the body is the count or { "count": N }
        
        if (data.count) {
             counterElement.innerText = data.count;
        } else {
             counterElement.innerText = data; // Fallback if direct number
        }

    } catch (error) {
        console.error('Error fetching visitor count:', error);
        counterElement.innerText = "Error";
    }
}

// Call on load
document.addEventListener('DOMContentLoaded', updateCounter);
