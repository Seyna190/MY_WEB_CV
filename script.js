const translations = {
    'en': {
        'name': 'Who Is This Diva',
        'role': 'Cloud Engineer & AWS Enthusiast',
        'about_title': 'About Me',
        'about_text': 'Passionate Cloud Engineer with a strong focus on AWS technologies. Dedicated to building scalable, secure, and efficient cloud infrastructure. Currently participating in the Cloud Resume Challenge to showcase my skills in serverless architecture, IaC with Terraform, and frontend development.',
        'exp_title': 'Experience',
        'job_title': 'Cloud Engineer Intern',
        'job_date': '2023 - Present',
        'job_desc_1': 'Deploying serverless architectures using AWS Lambda and API Gateway.',
        'job_desc_2': 'Managing Infrastructure as Code (IaC) with Terraform.',
        'job_desc_3': 'Optimizing database performance with DynamoDB.',
        'edu_title': 'Certifications & Education',
        'cert_1': 'AWS Certified Cloud Practitioner',
        'cert_2': 'AWS Certified Solutions Architect - Associate',
        'in_progress': 'In Progress',
        'skills_title': 'Skills',
        'lang_title': 'Languages',
        'lang_es': 'Spanish',
        'lang_ca': 'Catalan',
        'lang_en': 'English',
        'native': 'Native',
        'pro_proficiency': 'Professional Working Proficiency',
        'footer_text': 'Built with <i class="fas fa-heart"></i> and AWS Serverless',
        'visitor_label': 'Visitor Count: '
    },
    'es': {
        'name': 'Who Is This Diva',
        'role': 'Ingeniera Cloud & Entusiasta de AWS',
        'about_title': 'Sobre Mí',
        'about_text': 'Ingeniera Cloud apasionada con un fuerte enfoque en tecnologías AWS. Dedicada a construir infraestructuras en la nube escalables, seguras y eficientes. Actualmente participando en el Cloud Resume Challenge para mostrar mis habilidades en arquitectura serverless, IaC con Terraform y desarrollo frontend.',
        'exp_title': 'Experiencia',
        'job_title': 'Becaria de Ingeniería Cloud',
        'job_date': '2023 - Actualidad',
        'job_desc_1': 'Despliegue de arquitecturas serverless usando AWS Lambda y API Gateway.',
        'job_desc_2': 'Gestión de Infraestructura como Código (IaC) con Terraform.',
        'job_desc_3': 'Optimización del rendimiento de bases de datos con DynamoDB.',
        'edu_title': 'Certificaciones y Educación',
        'cert_1': 'AWS Certified Cloud Practitioner',
        'cert_2': 'AWS Certified Solutions Architect - Associate',
        'in_progress': 'En Progreso',
        'skills_title': 'Habilidades',
        'lang_title': 'Idiomas',
        'lang_es': 'Español',
        'lang_ca': 'Catalán',
        'lang_en': 'Inglés',
        'native': 'Nativo',
        'pro_proficiency': 'Competencia Profesional Completa',
        'footer_text': 'Hecho con <i class="fas fa-heart"></i> y AWS Serverless',
        'visitor_label': 'Visitas: '
    },
    'ca': {
        'name': 'Who Is This Diva',
        'role': 'Enginyera Cloud & Entusiasta de AWS',
        'about_title': 'Sobre Mi',
        'about_text': 'Enginyera Cloud apassionada amb un fort enfocament en tecnologies AWS. Dedicada a construir infraestructures al núvol escalables, segures i eficients. Actualment participant en el Cloud Resume Challenge per mostrar les meves habilitats en arquitectura serverless, IaC amb Terraform i desenvolupament frontend.',
        'exp_title': 'Experiència',
        'job_title': 'Becària d\'Enginyeria Cloud',
        'job_date': '2023 - Actualitat',
        'job_desc_1': 'Desplegament d\'arquitectures serverless utilitzant AWS Lambda i API Gateway.',
        'job_desc_2': 'Gestió d\'Infraestructura com a Codi (IaC) amb Terraform.',
        'job_desc_3': 'Optimització del rendiment de bases de dades amb DynamoDB.',
        'edu_title': 'Certificacions i Educació',
        'cert_1': 'AWS Certified Cloud Practitioner',
        'cert_2': 'AWS Certified Solutions Architect - Associate',
        'in_progress': 'En Progrés',
        'skills_title': 'Habilitats',
        'lang_title': 'Idiomes',
        'lang_es': 'Espanyol',
        'lang_ca': 'Català',
        'lang_en': 'Anglès',
        'native': 'Natiu',
        'pro_proficiency': 'Competència Professional Completa',
        'footer_text': 'Fet amb <i class="fas fa-heart"></i> i AWS Serverless',
        'visitor_label': 'Visites: '
    },
    'fr': {
        'name': 'Who Is This Diva',
        'role': 'Ingénieure Cloud & Passionnée AWS',
        'about_title': 'À Propos',
        'about_text': 'Ingénieure Cloud passionnée avec un fort intérêt pour les technologies AWS. Dédiée à la construction d\'infrastructures cloud évolutives, sécurisées et efficaces. Actuellement participante au Cloud Resume Challenge pour démontrer mes compétences en architecture serverless, IaC avec Terraform et développement frontend.',
        'exp_title': 'Expérience',
        'job_title': 'Stagiaire Ingénieur Cloud',
        'job_date': '2023 - Présent',
        'job_desc_1': 'Déploiement d\'architectures serverless utilisant AWS Lambda et API Gateway.',
        'job_desc_2': 'Gestion de l\'Infrastructure as Code (IaC) avec Terraform.',
        'job_desc_3': 'Optimisation des performances de base de données avec DynamoDB.',
        'edu_title': 'Certifications & Éducation',
        'cert_1': 'AWS Certified Cloud Practitioner',
        'cert_2': 'AWS Certified Solutions Architect - Associate',
        'in_progress': 'En Cours',
        'skills_title': 'Compétences',
        'lang_title': 'Langues',
        'lang_es': 'Espagnol',
        'lang_ca': 'Catalan',
        'lang_en': 'Anglais',
        'native': 'Natif',
        'pro_proficiency': 'Compétence Professionnelle',
        'footer_text': 'Fait avec <i class="fas fa-heart"></i> et AWS Serverless',
        'visitor_label': 'Visites: '
    }
};

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Check if element has children mostly text or html (like footer) 
            // For simple implementation, innerHTML to allow icons in footer
            if (element.tagName === 'P' || element.tagName === 'SPAN' || element.tagName.startsWith('H')) {
                element.innerHTML = translations[lang][key];
            }
        }
    });
}

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
const API_URL = 'https://ek5ytoxnz1.execute-api.us-east-1.amazonaws.com/prod/visitors';

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
