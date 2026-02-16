
const translations = {
    en: {
        dir: 'ltr',
        lang: 'en',
        css: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
        content: {
            'main-heading': "Sustainability Through the Ages",
            'main-subtitle': "Explore Intel's journey through time, discovering how our commitment to innovation has shaped a more sustainable future for technology and our planet.",
            'strategies-heading': "Our Strategies",
            'strategy-1-title': "RISE Strategy",
            'strategy-2-title': "Supply Chain",
            'strategy-3-title': "Digital Equity",
            'modalLabel1': "RISE Strategy Details",
            'modalLabel2': "Supply Chain Details",
            'modalLabel3': "Digital Equity Details",
            'footer-heading': "Subscribe to our Newsletter",
            'label-email': "Email address",
            'btn-subscribe': "Subscribe"
        }
    },
    ar: {
        dir: 'rtl',
        lang: 'ar',
        css: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css',
        content: {
            'main-heading': "الاستدامة عبر العصور",
            'main-subtitle': "اكتشف رحلة إنتل عبر الزمن، وتعرف على كيف ساهم التزامنا بالابتكار في تشكيل مستقبل أكثر استدامة للتكنولوجيا وكوكبنا.",
            'strategies-heading': "استراتيجياتنا",
            'strategy-1-title': "استراتيجية RISE",
            'strategy-2-title': "سلسلة التوريد",
            'strategy-3-title': "العدالة الرقمية",
            'modalLabel1': "تفاصيل استراتيجية RISE",
            'modalLabel2': "تفاصيل سلسلة التوريد",
            'modalLabel3': "تفاصيل العدالة الرقمية",
            'footer-heading': "اشترك في نشرتنا الإخبارية",
            'label-email': "عنوان البريد الإلكتروني",
            'btn-subscribe': "اشترك"
        }
    }
};

function toggleLanguage() {
    const htmlEl = document.documentElement;
    const currentLang = htmlEl.getAttribute('lang') || 'en';
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    const config = translations[newLang];

    // 1. Update HTML attributes
    htmlEl.setAttribute('lang', config.lang);
    htmlEl.setAttribute('dir', config.dir);

    // 2. Swap Bootstrap CSS
    const bootstrapLink = document.getElementById('bootstrap-css');
    if (bootstrapLink) {
        bootstrapLink.setAttribute('href', config.css);
    }

    // 3. Update Text Content
    for (const [id, text] of Object.entries(config.content)) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = text;
        }
    }

    // 4. Update Placeholders for Inputs
    if (newLang === 'ar') {
        document.getElementById('emailInput').placeholder = "name@example.com"; // Provide Arabic placeholder if desired
    } else {
        document.getElementById('emailInput').placeholder = "name@example.com";
    }

    // 5. Update Learn More Buttons (using class since there are multiple)
    const learnMoreBtns = document.querySelectorAll('.learn-more-btn');
    learnMoreBtns.forEach(btn => {
        btn.textContent = newLang === 'ar' ? "اعرف المزيد" : "Learn More";
    });

    // 6. Update Modal Close Buttons
    const closeBtns = document.querySelectorAll('.btn-close-modal');
    closeBtns.forEach(btn => {
        btn.textContent = newLang === 'ar' ? "إغلاق" : "Close";
    });

    // 7. Store Preference
    localStorage.setItem('lang', newLang);
}

// Check stored language on load
document.addEventListener('DOMContentLoaded', () => {
    const storedLang = localStorage.getItem('lang');
    if (storedLang === 'ar') {
        // Default is 'en', so toggle once to switch to 'ar'
        // But we need to check if it's already 'ar' to avoid double toggle 
        // (though default HTML has lang='en', so it should be fine).
        const currentLang = document.documentElement.getAttribute('lang') || 'en';
        if (currentLang !== 'ar') {
             toggleLanguage(); 
        }
    }
});
