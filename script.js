// JavaScript for mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

const mobileAboutButton = document.getElementById('mobile-about-button');
const mobileAboutMenu = document.getElementById('mobile-about-menu');

const mobileProgramsButton = document.getElementById('mobile-programs-button');
const mobileProgramsMenu = document.getElementById('mobile-programs-menu');

const mobileFacultyButton = document.getElementById('mobile-faculty-button');
const mobileFacultyMenu = document.getElementById('mobile-faculty-menu');

const mobilePeopleButton = document.getElementById('mobile-people-button');
const mobilePeopleMenu = document.getElementById('mobile-people-menu');

const mobileStudentButton = document.getElementById('mobile-student-button');
const mobileStudentMenu = document.getElementById('mobile-student-menu');

const mobileLibraryButton = document.getElementById('mobile-library-button');
const mobileLibraryMenu = document.getElementById('mobile-library-menu');

const mobileAdmissionButton = document.getElementById('mobile-admission-button');
const mobileAdmissionMenu = document.getElementById('mobile-admission-menu');

const mobileMoreButton = document.getElementById('mobile-more-button');
const mobileMoreMenu = document.getElementById('mobile-more-menu');


mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Toggle 'About ABVSME' dropdown in mobile menu
if (mobileAboutButton) {
    mobileAboutButton.addEventListener('click', () => {
        mobileAboutMenu.classList.toggle('hidden');
        mobileAboutButton.querySelector('svg').classList.toggle('rotate-180');
    });
}


// Toggle 'Programs' dropdown in mobile menu
if (mobileProgramsButton) {
    mobileProgramsButton.addEventListener('click', () => {
        mobileProgramsMenu.classList.toggle('hidden');
        mobileProgramsButton.querySelector('svg').classList.toggle('rotate-180');
    });
}


// Toggle 'Faculty' dropdown in mobile menu
if (mobileFacultyButton) {
    mobileFacultyButton.addEventListener('click', () => {
        mobileFacultyMenu.classList.toggle('hidden');
        mobileFacultyButton.querySelector('svg').classList.toggle('rotate-180');
    });
}


// Toggle 'Student' dropdown in mobile menu
if (mobileStudentButton) {
    mobileStudentButton.addEventListener('click', () => {
        mobileStudentMenu.classList.toggle('hidden');
        mobileStudentButton.querySelector('svg').classList.toggle('rotate-180');
    });
}


// Toggle 'Library' nested dropdown in mobile menu
if (mobileLibraryButton) {
    mobileLibraryButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent parent dropdown from closing
        mobileLibraryMenu.classList.toggle('hidden');
        mobileLibraryButton.querySelector('svg').classList.toggle('rotate-180');
    });
}


// Toggle 'Admission' nested dropdown in mobile menu
if (mobileAdmissionButton) {
    mobileAdmissionButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent parent dropdown from closing
        mobileAdmissionMenu.classList.toggle('hidden');
        mobileAdmissionButton.querySelector('svg').classList.toggle('rotate-180');
    });
}


// Toggle 'More' dropdown in mobile menu
if (mobileMoreButton) {
    mobileMoreButton.addEventListener('click', () => {
        mobileMoreMenu.classList.toggle('hidden');
        mobileMoreMenu.querySelector('svg').classList.toggle('rotate-180');
    });
}


// Close mobile menu and submenus when a link is clicked
if (mobileMenu) {
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            if (mobileMoreMenu) mobileMoreMenu.classList.add('hidden');
            if (mobileMoreButton) mobileMoreButton.querySelector('svg').classList.remove('rotate-180');
            if (mobileAboutMenu) mobileAboutMenu.classList.add('hidden');
            if (mobileAboutButton) mobileAboutButton.querySelector('svg').classList.remove('rotate-180');
            if (mobileProgramsMenu) mobileProgramsMenu.classList.add('hidden');
            if (mobileProgramsButton) mobileProgramsButton.querySelector('svg').classList.remove('rotate-180');
            if (mobileFacultyMenu) mobileFacultyMenu.classList.add('hidden');
            if (mobileFacultyButton) mobileFacultyButton.querySelector('svg').classList.remove('rotate-180');
            if (mobileStudentMenu) mobileStudentMenu.classList.add('hidden');
            if (mobileStudentButton) mobileStudentButton.querySelector('svg').classList.remove('rotate-180');
            if (mobileLibraryMenu) mobileLibraryMenu.classList.add('hidden');
            if (mobileLibraryButton) mobileLibraryButton.querySelector('svg').classList.remove('rotate-180');
            if (mobileAdmissionMenu) mobileAdmissionMenu.classList.add('hidden');
            if (mobileAdmissionButton) mobileAdmissionButton.querySelector('svg').classList.remove('rotate-180');
        });
    });
}


// Accessibility Features (Font Size and Contrast)
let currentFontSize = 16; // Base font size for body
const bodyElement = document.body;

function changeFontSize(direction) {
    if (direction === 1) { // Increase
        currentFontSize = Math.min(24, currentFontSize + 2);
    } else if (direction === -1) { // Decrease
        currentFontSize = Math.max(12, currentFontSize - 2);
    } else { // Reset
        currentFontSize = 16;
    }
    bodyElement.style.fontSize = `${currentFontSize}px`;
}

function changeContrast(color) {
    console.log(`Changing contrast to ${color}`);
}

// JavaScript for Top Bar Hide/Show on Scroll
const topBar = document.getElementById('top-bar');
let lastScrollY = window.scrollY;
const scrollThreshold = 50;

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY && window.scrollY > scrollThreshold) {
        if (topBar) topBar.style.transform = 'translateY(-100%)';
    } else {
        if (topBar) topBar.style.transform = 'translateY(0)';
    }
    lastScrollY = window.scrollY;
});


// =====================================================================
// Scroll to Top Button Logic
// =====================================================================
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

if (scrollToTopBtn) {
    window.onscroll = function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollToTopBtn.classList.remove('hidden');
        } else {
            scrollToTopBtn.classList.add('hidden');
        }
    };

    scrollToTopBtn.onclick = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
}

// =====================================================================
// NEW: MBA Courses Page and Generic Page Logic
// =====================================================================
document.addEventListener('DOMContentLoaded', () => {
    // --- Logic for Course Page Tabs ---
    const courseTabs = document.querySelectorAll('.course-tab-button');
    const courseContents = document.querySelectorAll('.course-tab-content');

    if (courseTabs.length > 0 && courseContents.length > 0) {
        // Set default tab on page load
        courseTabs[0].classList.add('active');
        courseContents[0].classList.remove('hidden');

        courseTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Deactivate all tabs and hide all content
                courseTabs.forEach(t => t.classList.remove('active'));
                courseContents.forEach(c => c.classList.add('hidden'));

                // Activate clicked tab and show its content
                tab.classList.add('active');
                const targetContentId = tab.dataset.target;
                const targetContent = document.getElementById(targetContentId);
                if (targetContent) {
                    targetContent.classList.remove('hidden');
                }
            });
        });
    }

    // --- Logic for Accordions (used for electives) ---
    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const icon = button.querySelector('svg');

            content.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');
        });
    });

});


// =====================================================================
// Smooth Scrolling for On-Page Anchor Links
// =====================================================================
document.addEventListener('DOMContentLoaded', function () {
    // Select all anchor links that start with '#'
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    for (let link of smoothScrollLinks) {
        link.addEventListener('click', function (e) {
            let targetId = this.getAttribute('href');

            // Make sure it's a valid on-page link and not just '#'
            if (targetId && targetId.length > 1) {
                let targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Prevent the default jump-to-section behavior
                    e.preventDefault();

                    // Scroll smoothly to the target element
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    }
});


// Add this section to handle the click event for the People menu
if (mobilePeopleButton) {
    mobilePeopleButton.addEventListener('click', () => {
        mobilePeopleMenu.classList.toggle('hidden');
        mobilePeopleButton.querySelector('svg').classList.toggle('rotate-180');
    });
}

// ...

// Update the mobile menu close function to hide the new People menu as well
if (mobileMenu) {
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            // ... (keep existing code)
            if (mobilePeopleMenu) mobilePeopleMenu.classList.add('hidden');
            if (mobilePeopleButton) mobilePeopleButton.querySelector('svg').classList.remove('rotate-180');
        });
    });
}

// Script for tab functionality        
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Deactivate all buttons and hide all content
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.add('hidden'));

            // Activate the clicked button and show its corresponding content
            button.classList.add('active');
            const targetContentId = button.dataset.target;
            const targetContent = document.getElementById(targetContentId);
            if (targetContent) {
                targetContent.classList.remove('hidden');
            }
        });
    });
});


const batch2024Data = [
    {
        index: 0,
        name: "Abhyarthana Jena",
        major: "Finance & Marketing",
        image: "Images/Batch MBA 2024-26/Abhyarthana Jena.jpeg",
        linkedin: "https://www.linkedin.com/in/abhyarthana-jena1212",
        objective: "Motivated MBA candidate seeking to apply strong financial acumen, analytical thinking, and strategic problem-solving skills to support organizational decision-making. With hands-on experience in corporate finance, derivatives, data analytics, and financial modelling and valuation , I aim to contribute to high-impact projects that enhance operational efficiency, promote sustainability-driven practices, and support long-term value creation for the company."
    }, {
        index: 1,
        name: "Ankush Yadav",
        major: "Finance & Marketing",
        image: "Images/Batch MBA 2024-26/Ankush Yadav.jpeg",
        linkedin: "https://www.linkedin.com/in/ankush-yadav-a8a2a11a1?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        objective: "Become a Financial researcher and analyst"
    }, {
        index: 2,
        name: "Vidhi Sharma",
        major: "Major=HR, Minor= Marketing",
        image: "Images/Batch MBA 2024-26/Vidhi Sharma.jpg",
        linkedin: "https://www.linkedin.com/in/vidhi-sharma-818a57358?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        objective: "Seeking a dynamic HR role focused on Employee Engagement and Internal Communications, where I can apply my MBA skillset in Human Resources and my marketing acumen to effectively communicate organizational values and foster a high-performance culture."
    }, {
        index: 3,
        name: "SHIVANGI SINGH",
        major: "FINANCE AND MARKETING",
        image: "Images/Batch MBA 2024-26/shivangi singh.jpeg",
        linkedin: "https://www.linkedin.com/in/shivangi-singh-a15870270",
        objective: "To enhance my finance expertise and analytical skills to contribute to strategic decision-making, optimize financial performance, and support sustainable business growth."
    }, {
        index: 4,
        name: "Ananya rastogi",
        major: "Finance and IT",
        image: "Images/Batch MBA 2024-26/ananya rastogi.jpg",
        linkedin: "https://www.linkedin.com/in/ananya-rastogi-721a63315?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        objective: "To build a future ready finance career by integrating advanced financial expertise with evolving IT capabilities to drive innovation, strengthen analytical outcomes, and support long-term organizational growth."
    }, {
        index: 5,
        name: "Divya Sharma",
        major: "Finance And IT",
        image: "Images/Batch MBA 2024-26/Divya Sharma.jpg",
        linkedin: "https://www.linkedin.com/in/divyasharma1312",
        objective: "MBA graduate in Finance and IT with commerce background, seeking to leverage financial analytics and data-driven insights for strategic decision-making and business growth."
    }, {
        index: 6,
        name: "Yashika Choudhary",
        major: "Major: IT  Minor: Human Resource",
        image: "Images/Batch MBA 2024-26/Yashika Choudhary.jpg",
        linkedin: "https://www.linkedin.com/in/yashika-choudhary-/",
        objective: "To apply my HR knowledge and data analytics skills to create efficient, data-driven HR processes that strengthen onboarding, employee engagement, and overall organizational performance."
    }, {
        index: 7,
        name: "Aviral Pratap Singh Chauhan",
        major: "Major marketing and minor strategic management",
        image: "Images/Batch MBA 2024-26/Aviral Pratap Singh Chauhan.jpg",
        linkedin: "https://www.linkedin.com/in/aviral-pratap-singh-chauhan-6a70531b3",
        objective: "Seeking a business-focused marketing role where I can apply strategic planning, market analysis, and creative problem-solving to support sustainable growth and strengthen competitive advantage."
    }, {
        index: 8,
        name: "Keshav Sharma",
        major: "Marketing and IT",
        image: "Images/Batch MBA 2024-26/Keshav Sharma.jpeg",
        linkedin: "https://www.linkedin.com/in/keshav-sharma-a65462203?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        objective: "To secure a challenging marketing role where I can apply my analytical abilities, IT proficiency, and strategic mindset to contribute to effective marketing initiatives and organizational growth."
    }, {
        index: 9,
        name: "Ritik Rawat",
        major: "Finance",
        image: "Images/Batch MBA 2024-26/ritik rawat.jpeg",
        linkedin: "https://www.linkedin.com/in/ritik-rawat-8a828b276?trk=contact-info",
        objective: "To secure a challenging and rewarding role in corporate finance utilizing my specialized MBA knowledge in financial analysis, valuation, and strategic planning to drive business growth and achieve organizational objectives. "
    }, {
        index: 10,
        name: "Anshul Yadav",
        major: "IT & Finance",
        image: "Images/Batch MBA 2024-26/Anshul Yadav.jpg",
        linkedin: "https://www.linkedin.com/in/anshulyadav3008?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        objective: "Looking for an analyst role focused on financial analysis, data interpretation, and technology-enabled solutions to drive efficient business outcomes and strategic decisions."
    }, {
        index: 11,
        name: "Yuktika Duggal",
        major: "IT & Finance",
        image: "Images/Batch MBA 2024-26/Yuktika Duggal.jpg",
        linkedin: "https://www.linkedin.com/in/yuktika-duggal-2949b8202/",
        objective: "To build a career in finance and business analytics, applying data-driven insights, financial modelling, and strategic thinking to support organizational growth, digital transformation, and value-creation across global business functions."
    }, {
        index: 12,
        name: "Nishank Singh Parihar",
        major: "Marketing and Strategic Management",
        image: "Images/Batch MBA 2024-26/Nishank.png",
        linkedin: "http://linkedin.com/in/nishank-singh-parihar-247446188",
        objective: "Versatile professional experienced in government communications, public policy, and large-scale Project management. At the Capacity Building Commission, contributed to the Rashtriya Karmayogi initiative training 7,00,000+ civil servants and coordinated with 69 ministries. Former Junior Consultant to the Minister of Law & Justice with strong skills in stakeholder management, strategic communication, and policy analysis. Experience includes Internship at ONGC focusing on strategic planning and joint ventures, and the Udaan Fellowship as a political analyst contributing to winning 40 of 62 constituencies in the UP Elections."
    }, {
        index: 13,
        name: "Pranav P",
        major: "Marketing and HR",
        image: "Images/Batch MBA 2024-26/Pranav P.jpg",
        linkedin: "https://www.linkedin.com/in/pranav-p-a93212352",
        objective: "Aspiring business leader seeking to leverage analytical skills and strategic thinking in a dynamic corporate environment to make establish a career in a dynamic and progressive organization where my skills can contribute to the company’s goals and achievements and also aid my own personal and professional goals."
    }, {
        index: 14,
        name: "Hester J M",
        major: "MBA",
        image: "Images/Batch MBA 2024-26/Hester J M.jpg",
        linkedin: "https://www.linkedin.com/in/hesterjm",
        objective: "To develop advanced financial expertise, drive data backed strategic decisions, and contribute meaningfully to high impact roles while growing as a disciplined, future ready leader."
    }, {
        index: 15,
        name: "RAJAT VERMA",
        major: "Marketing and Strategy",
        image: "Images/Batch MBA 2024-26/RAJAT VERMA.jpg",
        linkedin: "",
        objective: "To build a career in marketing by applying my MBA expertise in branding, analytics, and communication to create effective strategies that boost customer reach, loyalty, and overall organizational performance."
    }, {
        index: 16,
        name: "Rishit Raina",
        major: "Marketing And Human Resources",
        image: "Images/Batch MBA 2024-26/Rishit Raina.jpeg",
        linkedin: "",
        objective: "To apply strong marketing insights and people-management skills to drive brand growth, enhance customer engagement, and contribute effectively to organisational development and strategic decision-making."
    }, {
        index: 17,
        name: "Pulkita",
        major: "IT and HR",
        image: "Images/Batch MBA 2024-26/pulkita thakran.jpg",
        linkedin: "https://www.linkedin.com/in/pulkita-thakran16",
        objective: "To develop a long-term career in HR by supporting talent management, policy implementation, and employee engagement, while continuously learning and advancing to higher professional responsibilities."
    }, {
        index: 18,
        name: "Isha Salhotra",
        major: "Marketing and Finance",
        image: "Images/Batch MBA 2024-26/Isha Salhotra.jpeg",
        linkedin: "https://www.linkedin.com/in/isha-salhotra-3b9aaa327",
        objective: "To obtain a challenging position in a reputable organization where I can apply my analytical, managerial, and communication skills to contribute to business growth while continuously learning and developing my professional abilities"
    }, {
        index: 19,
        name: "Harshita Rai",
        major: "Marketing (major) Strategy (minor)",
        image: "Images/Batch MBA 2024-26/Harshita Rai.jpg",
        linkedin: "https://www.linkedin.com/in/harai134",
        objective: "MBA candidate specializing in Strategy and Marketing. I combine creative problem-solving with steady, thoughtful leadership to turn complex challenges into long-term growth. I am committed to work that creates genuine value for organizations and communities."
    }, {
        index: 20,
        name: "Nandini",
        major: "Major Finance, minor IT",
        image: "Images/Batch MBA 2024-26/Nandini.jpg",
        linkedin: "https://www.linkedin.com/in/nandini5389?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        objective: "Seeking a challenging role in Finance IT, leveraging my MBA skills to drive innovative financial solutions, optimize processes, and contribute to organizational growth."
    }, {
        index: 21,
        name: "Ankita singh",
        major: "Finance",
        image: "Images/Batch MBA 2024-26/Ankita Singh.jpeg",
        linkedin: "https://www.linkedin.com/in/ankita-singh-865132327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        objective: "To start my career in a dynamic organization where I can learn, grow, and gain practical experience that will help me in both professional development and future entrepreneurial pursuits"
    }, {
        index: 22,
        name: "sanika herlekar",
        major: "marketing, finance",
        image: "Images/Batch MBA 2024-26/sanika.jpeg",
        linkedin: "http://linkedin.com/in/sanika-herlekar",
        objective: "To build a career in marketing with a strong analytical approach, combining creative problem-solving with financial understanding to develop effective campaigns, improve ROI, and support long-term brand growth."
    }, {
        index: 23,
        name: "Khubaib Khalid Khan",
        major: "Finance, IT",
        image: "Images/Batch MBA 2024-26/Khubaib Khalid Khan.jpeg",
        linkedin: "https://in.linkedin.com/in/khubaib-khalid-khan-16823423b",
        objective: "Seeking a finance role where I can apply strong analytical skills, financial modelling, and research abilities to support data-driven decision-making and organizational growth."
    }, {
        index: 24,
        name: "Naitik Raj",
        major: "Finance and marketing",
        image: "Images/Batch MBA 2024-26/Naitik Raj.jpeg",
        linkedin: "https://www.linkedin.com/in/naitik-raj-836358194?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        objective: "To obtain a growth-oriented position in a reputable organization where I can apply my skills, learn continuously and contribute effectively to team and company goals."
    }, {
        index: 25,
        name: "Chaitanya",
        major: "Finance Marketing",
        image: "Images/Batch MBA 2024-26/Chaitanya.jpg",
        linkedin: "https://www.linkedin.com/in/chaitanya-undefined-51b286355?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        objective: "Contribute something in the field of Finance and Marketing."
    }, {
        index: 26,
        name: "Riteka Rao",
        major: "Finance",
        image: "Images/Batch MBA 2024-26/riteka rao.jpg",
        linkedin: "https://www.linkedin.com/in/riteka-rao",
        objective: "MBA finance student focused on mastering financial analysis,portfolio management, and investment strategies, aiming to contribute effectively to financial decision-making and organizational success. "
    }, {
        index: 27,
        name: "Aman Sharma",
        major: "Major - Marketing ,  Minor - IT",
        image: "Images/Batch MBA 2024-26/Aman sharma 2025 - Aman Sharma.jpeg",
        linkedin: "https://www.linkedin.com/in/aman-sharma77",
        objective: "MBA graduate skilled in marketing strategy, branding, and data-driven insights. Seeking roles blending creative marketing, analytics, and emerging data science tools to drive measurable business growth"
    }, {
        index: 28,
        name: "Mokshika Arya",
        major: "Marketing",
        image: "Images/Batch MBA 2024-26/Mokshika.jpg",
        linkedin: "https://www.linkedin.com/in/mokshika-arya",
        objective: " To explore and develop my skills in marketing by contributing to tasks related to communication, research, and customer understanding. I aim to learn from practical experience, support team projects, and add value through sincere and consistent effort. "
    }, {
        index: 29,
        name: "Jetty Narasimha",
        major: "Marketing and Information Technology",
        image: "Images/Batch MBA 2024-26/Narasimha Jetty.jpeg",
        linkedin: "https://www.linkedin.com/in/narasimha-jetty-208b37325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        objective: "Interested working in building brand management and developing the product sales through various techniques and critical thinking and strategies."
    }, {
        index: 30,
        name: "ESLAVATH THIRUPATHI",
        major: "MBA(MARKETING &HR)",
        image: "Images/Batch MBA 2024-26/Eslavath Thirupathi.jpg",
        linkedin: "https://www.linkedin.com/in/eslavath-thirupathi-27a695347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        objective: " Wanted to grow professionally   through continuous learning and Challenging Positions in Life   Utilize my leadership and good communication skills for  Growth of the Organization and Playing proactive role in problem solving, decision making and Strategic management ensuring good co-ordination with the team and strengthening team's efforts"
    },];


// =====================================================================
// Student Profile Modal Logic
// =====================================================================
function openStudentModal(index) {
    // Note: batch2024Data is defined in the appended student_data code
    const student = batch2024Data.find(s => s.index === index);
    if (!student) return;

    document.getElementById('modal-name').textContent = student.name;
    document.getElementById('modal-image').src = student.image;
    document.getElementById('modal-image').alt = student.name;
    // Using string concat for innerHTML to be safe with PowerShell here-strings
    document.getElementById('modal-major').innerHTML = '<i class="fas fa-graduation-cap mr-1"></i> ' + student.major;
    document.getElementById('modal-objective').textContent = student.objective;

    const linkedinContainer = document.getElementById('modal-linkedin');
    if (student.linkedin) {
        linkedinContainer.innerHTML = '<a href="' + student.linkedin + '" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"><i class="fab fa-linkedin fa-lg mr-2"></i>Connect on LinkedIn</a>';
    } else {
        linkedinContainer.innerHTML = '';
    }

    document.getElementById('studentModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeStudentModal() {
    document.getElementById('studentModal').classList.add('hidden');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        closeStudentModal();
    }
});


// =====================================================================
// Social Media Sidebar Hide/Show Logic
// =====================================================================
function hideSocialSidebar() {
    const sidebar = document.getElementById('social-sidebar');
    if (sidebar) {
        sidebar.classList.add('hidden-mobile');
        // Store user preference in localStorage
        localStorage.setItem('socialSidebarHidden', 'true');
    }
}

// Check if user previously hid the sidebar on page load
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('social-sidebar');
    const wasHidden = localStorage.getItem('socialSidebarHidden');

    // Only apply hidden state on mobile devices
    if (sidebar && wasHidden === 'true' && window.innerWidth <= 768) {
        sidebar.classList.add('hidden-mobile');
    }
});

// =====================================================================
// UI/UX Enhancements - Lazy Loading for Images
// =====================================================================
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px' // Start loading 50px before image enters viewport
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        lazyImages.forEach(img => img.classList.add('loaded'));
    }
});

// =====================================================================
// Enhanced Scroll to Top Button
// =====================================================================
if (scrollToTopBtn) {
    let scrollTimeout;

    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);

        scrollTimeout = setTimeout(() => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.remove('hidden');
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
                setTimeout(() => {
                    if (!scrollToTopBtn.classList.contains('show')) {
                        scrollToTopBtn.classList.add('hidden');
                    }
                }, 300);
            }
        }, 100); // Debounce scroll events
    });

    scrollToTopBtn.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
}

// =====================================================================
// Read More / Read Less Functionality for About Section
// =====================================================================
document.addEventListener('DOMContentLoaded', () => {
    const readMoreBtn = document.getElementById('read-more-btn');
    const aboutText = document.getElementById('about-text');

    if (readMoreBtn && aboutText) {
        readMoreBtn.addEventListener('click', () => {
            aboutText.classList.toggle('line-clamp-3');

            if (aboutText.classList.contains('line-clamp-3')) {
                readMoreBtn.textContent = 'Read More';
            } else {
                readMoreBtn.textContent = 'Read Less';
            }
        });
    }
});
