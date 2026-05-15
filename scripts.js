// ==================== TRANSLATIONS ====================
const translations = {
    fr: {
        nav_home: "_Accueil",
        nav_about: "_Apropos",
        nav_exp: "_Expériences",
        nav_projects: "_Projets",
        nav_skills: "_Compétences",
        nav_contact: "_Contact",

        hero_title: "Développeur Full Stack | Administrateur Réseau et Système",
        hero_desc: "Je transforme des lignes de code en solutions qui résolvent des problèmes réels. Basé au Bénin, je crée pour le monde.",
        stat_projects: "Projets",
        stat_internship: "Stage pro",
        stat_techs: "Technos",
        btn_projects: "Voir mes projets",
        btn_contact: "Me contacter",

        about_title: "_Qui_suis_je",
        about_text: "À 21 ans, j'ai déjà conçu plusieurs plateformes web utilisées par des professionnels. Ma passion ? Démocratiser la tech à travers des outils simples et puissants. Je ne code pas juste pour coder - je code pour impacter. Polyvalent, je maîtrise aussi bien le développement web que l'administration réseau et la maintenance informatique.",
        info_birth: "_naissance",
        info_location: "_localisation",
        info_nationality: "_nationalité",
        info_nationality_val: "Béninoise",
        lang_very_good: "Très bien",
        lang_good: "Bien",
        lang_very_good2: "Très bien",

        exp_title: "_Expériences",
        exp_badge: "Stage",
        exp_role: "Stagiaire Développeur Web",
        exp_project_label: "Projet :",
        exp_project_name: "Système de gestion de biens immobiliers",
        exp_task1: "Conception et développement d'une application web de gestion des biens immobiliers multi-utilisateurs",
        exp_task2: "Mise en place d'un système d'authentification sécurisé avec gestion des rôles (administrateurs, propriétaires, clients)",
        exp_task3: "Développement en HTML, CSS, PHP, MySQL",
        exp_task4: "Tests, correction de bugs et documentation technique",
        exp_more: "D'autres expériences à venir...",

        projects_title: "_Projets",
        tab_network: "Réseau",
        badge_personal: "Projet perso",
        badge_improvement: "Amélioration",
        badge_practical: "Exercice pratique",
        features_title: "Fonctionnalités clés :",
        skills_demonstrated: "Compétences démontrées :",
        link_demo: "Live demo",
        link_code: "Code source",

        gn_desc: "Application web full-stack de gestion scolaire complète avec trois espaces distincts — administrateur, professeur et élève — bulletins PDF automatiques et système de réclamations.",
        gn_f1: "3 rôles : Admin, Professeur, Élève",
        gn_f2: "Saisie et calcul automatique des notes",
        gn_f3: "Génération de bulletins PDF",
        gn_f4: "Système de réclamations complet",
        gn_f5: "Import Excel des utilisateurs",
        gn_f6: "Archivage des années scolaires",
        gn_f7: "API REST + Auth Sanctum",

        immo_title: "Plateforme de Gestion Immobilière",
        immo_desc: "Application complète de gestion de biens immobiliers avec paiement de loyers en ligne et messagerie temps réel.",
        immo_f1: "Paiement de loyers en ligne",
        immo_f2: "Suivi des transactions et historique",
        immo_f3: "Messagerie sécurisée temps réel",
        immo_f4: "Dashboard Administrateur",
        immo_f5: "Dashboard Propriétaire",
        immo_f6: "Dashboard Client",
        immo_f7: "Interface responsive mobile",

        ats_desc: "Système de gestion de candidatures simplifié avec architecture MVC et dashboard admin.",
        ats_f1: "Dashboard administrateur",
        ats_f2: "Filtre de recherche avancé",
        ats_f3: "Architecture MVC simplifiée",
        ats_f4: "Adaptation PC / mobile",
        ats_f5: "Gestion des offres d'emploi",

        wiki_title: "Wiki IT Interne",
        wiki_desc: "Base de connaissances collaborative pour centraliser les procédures et solutions IT.",
        wiki_f1: "Dashboard administrateur",
        wiki_f2: "Filtre de recherche",
        wiki_f3: "Articles par catégories",
        wiki_f4: "Interface responsive",
        wiki_f5: "Gestion des utilisateurs",

        eco_title: "EcoTech Africa — Réseau Multi-Sites",
        eco_desc: "Conception et configuration d'un réseau d'entreprise interconnectant 3 sites (Cotonou, Porto-Novo, Parakou) avec centralisation des services au siège.",
        eco_f1: "Plan d'adressage VLSM",
        eco_f2: "WAN PPP + authentification CHAP",
        eco_f3: "Routage dynamique OSPF",
        eco_f4: "VLAN 10 / 20 + inter-VLAN",
        eco_f5: "Services DHCP, DNS, Web centralisés",
        eco_f6: "NAT pour accès Internet multi-sites",
        eco_f7: "Administration distante SSH/Telnet",

        infra_title: "Infrastructure Multisite Avancée",
        infra_desc: "Architecture réseau complète avec siège, agence distante, zone serveur et poste d'administration distant. Plan d'adressage sur 172.20.0.0/16 avec VLSM optimisé.",
        infra_f1: "VLSM sur 172.20.0.0/16",
        infra_f2: "DNS, DHCP, Web, FTP, Mail, Syslog",
        infra_f3: "Serveur NTP + synchronisation globale",
        infra_f4: "AAA / Authentification centralisée",
        infra_f5: "Mise à jour IOS via TFTP",
        infra_f6: "Administration SSH distante",
        infra_f7: "Sécurité : bannière, logs, port security",

        skills_title: "_Compétences",
        skills_web: "Développement Web & Applications",
        skills_network: "Réseaux & Systèmes",
        skills_maintenance: "Maintenance Informatique",
        skills_tools: "Outils & Logiciels",
        skill_db: "Bases de données :",
        skill_security: "Sécurité :",
        skill_admin: "Administration :",
        skill_simulation: "Simulation :",
        skill_equipment: "Équipements :",
        skill_systems: "Systèmes :",
        skill_hardware: "Matériel :",
        skill_software: "Logiciel :",
        skill_network_label: "Réseau :",
        skill_versioning: "Versioning :",
        skill_management: "Gestion :",
        skill_office: "Bureautique :",
        sk_auth: "Authentification",
        sk_roles: "Gestion des rôles",
        sk_appsec: "Sécurité applicative",
        sk_dashboards: "Tableaux de bord",
        sk_stats: "Statistiques",
        sk_charts: "Graphiques",
        sk_network_junior: "Réseau (junior)",
        sk_ipconfig: "Configuration IP",
        sk_routing: "Routage",
        sk_cisco: "Cisco (bases CCNA)",
        sk_netsec: "Notions sécurité réseau",
        sk_hosting: "Hébergements",
        sk_osinstall: "Installation OS",
        sk_config: "Configuration",
        sk_assembly: "Montage",
        sk_maintenance: "Maintenance",
        sk_troubleshoot: "Dépannage",
        sk_softtrouble: "Dépannage logiciel",
        sk_periph: "Gestion périphériques",
        sk_networking: "Mise en réseau d'ordinateurs",

        parcours_title: "_Parcours",
        parcours_1_title: "Licence 3 — Administration des Réseaux Informatiques",
        parcours_1_school: "ENEAM de Gbégamey, Cotonou",
        parcours_2_title: "Licence 2 — Informatique de Gestion",
        parcours_2_school: "ENEAM de Gbégamey, Cotonou",
        parcours_3_title: "Licence 1 — Informatique de Gestion",
        parcours_3_school: "ENEAM de Gbégamey, Cotonou",
        parcours_4_title: "Baccalauréat Scientifique — Série D",
        parcours_4_school: "Collège « La Plénitude » d'Atrokpocodji — Mention Assez Bien",

        entrepr_title: "_Entrepreneuriat",
        entrepr_heading: "Importation & Vente de produits",
        entrepr_desc: "Activité entrepreneuriale dans l'importation et la vente de divers produits :",
        entrepr_prod1: "Coques de téléphones",
        entrepr_prod2: "Montres",
        entrepr_prod3: "Accessoires divers",
        entrepr_task1: "Gestion de stock et approvisionnement",
        entrepr_task2: "Relation client et service après-vente",
        entrepr_task3: "Commerce en ligne et négociation",

        contact_title: "_Contact",
        form_name: "_Nom",
        form_message: "_Message",
        form_submit: "envoyer_message();",

        footer_about: "Administrateur Réseau junior | Développeur Full Stack créant des solutions digitales innovantes.",
        footer_nav: "_Navigation",
        footer_rights: "© 2026 ESPOH - Tous droits réservés",
    },

    en: {
        nav_home: "_Home",
        nav_about: "_About",
        nav_exp: "_Experience",
        nav_projects: "_Projects",
        nav_skills: "_Skills",
        nav_contact: "_Contact",

        hero_title: "Full Stack Developer | Network & System Administrator",
        hero_desc: "I turn lines of code into solutions that solve real problems. Based in Benin, building for the world.",
        stat_projects: "Projects",
        stat_internship: "Internship",
        stat_techs: "Technologies",
        btn_projects: "View my projects",
        btn_contact: "Contact me",

        about_title: "_Who_am_I",
        about_text: "At 21, I have already built several web platforms used by professionals. My passion? Making tech accessible through simple yet powerful tools. I don't code just to code — I code to make an impact. Versatile, I master both web development and network administration.",
        info_birth: "_born",
        info_location: "_location",
        info_nationality: "_nationality",
        info_nationality_val: "Beninese",
        lang_very_good: "Very good",
        lang_good: "Good",
        lang_very_good2: "Very good",

        exp_title: "_Experience",
        exp_badge: "Internship",
        exp_role: "Web Developer Intern",
        exp_project_label: "Project:",
        exp_project_name: "Real estate property management system",
        exp_task1: "Design and development of a multi-user web application for real estate property management",
        exp_task2: "Implementation of a secure authentication system with role management (admins, owners, clients)",
        exp_task3: "Development in HTML, CSS, PHP, MySQL",
        exp_task4: "Testing, bug fixing and technical documentation",
        exp_more: "More experience coming soon...",

        projects_title: "_Projects",
        tab_network: "Network",
        badge_personal: "Personal project",
        badge_improvement: "Improvement",
        badge_practical: "Practical exercise",
        features_title: "Key features:",
        skills_demonstrated: "Skills demonstrated:",
        link_demo: "Live demo",
        link_code: "Source code",

        gn_desc: "Full-stack web application for complete school management with three distinct spaces — admin, teacher and student — automatic PDF report cards and a complaint system.",
        gn_f1: "3 roles: Admin, Teacher, Student",
        gn_f2: "Grade entry and automatic calculation",
        gn_f3: "PDF report card generation",
        gn_f4: "Complete complaint workflow",
        gn_f5: "Excel import for users",
        gn_f6: "School year archiving",
        gn_f7: "REST API + Sanctum Auth",

        immo_title: "Real Estate Management Platform",
        immo_desc: "Complete real estate management app with online rent payment and real-time messaging.",
        immo_f1: "Online rent payment",
        immo_f2: "Transaction tracking and history",
        immo_f3: "Secure real-time messaging",
        immo_f4: "Admin Dashboard",
        immo_f5: "Owner Dashboard",
        immo_f6: "Client Dashboard",
        immo_f7: "Mobile responsive interface",

        ats_desc: "Simplified applicant tracking system with MVC architecture and admin dashboard.",
        ats_f1: "Admin dashboard",
        ats_f2: "Advanced search filter",
        ats_f3: "Simplified MVC architecture",
        ats_f4: "PC / mobile responsive",
        ats_f5: "Job offer management",

        wiki_title: "Internal IT Wiki",
        wiki_desc: "Collaborative knowledge base to centralize IT procedures and solutions.",
        wiki_f1: "Admin dashboard",
        wiki_f2: "Search filter",
        wiki_f3: "Articles by category",
        wiki_f4: "Responsive interface",
        wiki_f5: "User management",

        eco_title: "EcoTech Africa — Multi-Site Network",
        eco_desc: "Design and configuration of a corporate network connecting 3 sites (Cotonou, Porto-Novo, Parakou) with centralized services at headquarters.",
        eco_f1: "VLSM IP addressing plan",
        eco_f2: "WAN PPP + CHAP authentication",
        eco_f3: "Dynamic OSPF routing",
        eco_f4: "VLAN 10 / 20 + inter-VLAN",
        eco_f5: "Centralized DHCP, DNS, Web services",
        eco_f6: "NAT for multi-site Internet access",
        eco_f7: "Remote administration SSH/Telnet",

        infra_title: "Advanced Multi-Site Infrastructure",
        infra_desc: "Complete network architecture with headquarters, remote branch, server zone and remote admin workstation. IP addressing on 172.20.0.0/16 with optimized VLSM.",
        infra_f1: "VLSM on 172.20.0.0/16",
        infra_f2: "DNS, DHCP, Web, FTP, Mail, Syslog",
        infra_f3: "NTP server + global time sync",
        infra_f4: "AAA / Centralized authentication",
        infra_f5: "IOS update via TFTP",
        infra_f6: "Remote SSH administration",
        infra_f7: "Security: banner, logs, port security",

        skills_title: "_Skills",
        skills_web: "Web Development & Applications",
        skills_network: "Networks & Systems",
        skills_maintenance: "IT Maintenance",
        skills_tools: "Tools & Software",
        skill_db: "Databases:",
        skill_security: "Security:",
        skill_admin: "Administration:",
        skill_simulation: "Simulation:",
        skill_equipment: "Equipment:",
        skill_systems: "Systems:",
        skill_hardware: "Hardware:",
        skill_software: "Software:",
        skill_network_label: "Network:",
        skill_versioning: "Versioning:",
        skill_management: "Management:",
        skill_office: "Office tools:",
        sk_auth: "Authentication",
        sk_roles: "Role management",
        sk_appsec: "Application security",
        sk_dashboards: "Dashboards",
        sk_stats: "Statistics",
        sk_charts: "Charts",
        sk_network_junior: "Network (junior)",
        sk_ipconfig: "IP Configuration",
        sk_routing: "Routing",
        sk_cisco: "Cisco (CCNA basics)",
        sk_netsec: "Network security basics",
        sk_hosting: "Hosting",
        sk_osinstall: "OS Installation",
        sk_config: "Configuration",
        sk_assembly: "Assembly",
        sk_maintenance: "Maintenance",
        sk_troubleshoot: "Troubleshooting",
        sk_softtrouble: "Software troubleshooting",
        sk_periph: "Peripheral management",
        sk_networking: "Computer networking",

        parcours_title: "_Education",
        parcours_1_title: "Bachelor's 3 — Computer Network Administration",
        parcours_1_school: "ENEAM de Gbégamey, Cotonou",
        parcours_2_title: "Bachelor's 2 — Management Information Systems",
        parcours_2_school: "ENEAM de Gbégamey, Cotonou",
        parcours_3_title: "Bachelor's 1 — Management Information Systems",
        parcours_3_school: "ENEAM de Gbégamey, Cotonou",
        parcours_4_title: "Scientific Baccalaureate — Series D",
        parcours_4_school: "Collège « La Plénitude » d'Atrokpocodji — With Merit",

        entrepr_title: "_Entrepreneurship",
        entrepr_heading: "Import & Product Sales",
        entrepr_desc: "Entrepreneurial activity in importing and selling various products:",
        entrepr_prod1: "Phone cases",
        entrepr_prod2: "Watches",
        entrepr_prod3: "Various accessories",
        entrepr_task1: "Inventory and supply management",
        entrepr_task2: "Customer relations and after-sales service",
        entrepr_task3: "Online commerce and negotiation",

        contact_title: "_Contact",
        form_name: "_Name",
        form_message: "_Message",
        form_submit: "send_message();",

        footer_about: "Junior Network Administrator | Full Stack Developer building innovative digital solutions.",
        footer_nav: "_Navigation",
        footer_rights: "© 2026 ESPOH - All rights reserved",
    }
};

// ==================== LANGUAGE SWITCHER ====================
let currentLang = localStorage.getItem('lang') || 'fr';

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);

    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            el.textContent = t[key];
        }
    });

    // Update html lang attribute
    document.documentElement.lang = lang;

    // Update button label: show the OTHER language
    const label = document.getElementById('langLabel');
    if (label) label.textContent = lang === 'fr' ? 'EN' : 'FR';
}

document.addEventListener('DOMContentLoaded', function () {

    // Apply saved language on load
    applyLanguage(currentLang);

    // Language switcher click
    const langSwitcher = document.getElementById('langSwitcher');
    if (langSwitcher) {
        langSwitcher.addEventListener('click', () => {
            const newLang = currentLang === 'fr' ? 'en' : 'fr';
            applyLanguage(newLang);
        });
    }

    // ==================== MOBILE MENU ====================
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('toggle');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            burger.classList.remove('toggle');
        });
    });

    // ==================== SMOOTH SCROLL ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ==================== SCROLL REVEAL ====================
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section, .project-card, .skill-category, .timeline-item, .hobby-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });

    // ==================== TABS PROJETS ====================
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
        });
    });

    // ==================== CONTACT FORM ====================
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const btn = this.querySelector('.submit-btn');
            const originalText = btn.textContent;
            btn.textContent = currentLang === 'fr' ? 'envoi_en_cours...' : 'sending...';
            btn.disabled = true;
            const data = new FormData(this);
            try {
                const response = await fetch(this.action, {
                    method: 'POST',
                    body: data,
                    headers: { 'Accept': 'application/json' }
                });
                if (response.ok) {
                    window.location.href = 'merci.html';
                } else {
                    btn.textContent = currentLang === 'fr' ? 'erreur, réessayer' : 'error, try again';
                    btn.disabled = false;
                }
            } catch {
                btn.textContent = currentLang === 'fr' ? 'erreur, réessayer' : 'error, try again';
                btn.disabled = false;
            }
        });
    }
});

// ==================== LIGHTBOX ====================
function openLightbox(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
});
