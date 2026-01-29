const currentFacultyContainer = document.getElementById('visiting-faculty-container');
const pastFacultyContainer = document.getElementById('past-visiting-faculty-container');

// Data for Current Honorary Visiting Professors
const currentVisitingFacultyData = [
    { name: 'Amogh Rai', image: 'Images/Faculty/Visiting_Faculty/Amogh Rai.jpg', position: ' Executive Director at Sanrachna', bioUrl: 'Files/Visiting_faculty/amoghrai.pdf' },
    { name: 'Shamika Ravi', image: 'Images/Faculty/Visiting_Faculty/Shamika Ravi.jpg', position: 'Nonresident Senior Fellow, Brookings Institution Washington D.C', bioUrl: 'Files/Visiting_faculty/shamikaravi.pdf' },
    { name: 'Deepak Bagla', image: 'Images/Faculty/Visiting_Faculty/Deepak-Bagla.jpg', position: 'Managing Director and CEO', bioUrl: 'Files/Visiting_faculty/deepakbagla.pdf' },
    { name: 'Prabuddha Ganguli', image: 'Images/Faculty/Visiting_Faculty/Prabuddha Ganguli.jpg', position: 'Author', bioUrl: 'Files/Visiting_faculty/prabuddhaganguli.pdf' },
    { name: 'M. Sathyakumar', image: 'Images/Faculty/Visiting_Faculty/M Sathya.jpg', position: 'Professor', bioUrl: 'Files/Visiting_faculty/mskumar.pdf' },
    { name: 'Mudit Narain', image: 'Images/Faculty/Visiting_Faculty/Mudit Narain.jpg', position: 'Program Director at the Atal Innovation Mission, NITI Aayog', bioUrl: 'Files/Visiting_faculty/muditnarain.pdf' },
    { name: 'Pulki Mittal', image: 'Images/Faculty/Visiting_Faculty/Pulki Mittal.jpg', position: 'Professor', bioUrl: 'Files/Visiting_faculty/pulkimittal.pdf' },
    { name: 'Madhu Vij', image: 'Images/Faculty/Visiting_Faculty/madhuvij.jpg', position: 'Professor', bioUrl: '#' },
    { name: 'Kavita Sharma', image: 'Images/Faculty/Visiting_Faculty/kavitasharma.jpg', position: 'Professor', bioUrl: '#' },
];

// Data for Past Honorary Visiting Faculty
const pastVisitingFacultyData = [
    { name: 'Prof. P. K. Jain', image: 'Images/Faculty/Visiting_Faculty/Past/pk-jain.jpg', position: 'Department of Management Studies, IIT Delhi', bioUrl: '#' },
    { name: 'Dr.Prasad Kaipa', image: 'Images/Faculty/Visiting_Faculty/Past/prasad.jpeg', position: 'Academic Dean, Hindu Community Institute', bioUrl: '#' },
    { name: 'Prof. DR. GVR SHASTRI ', image: 'Images/Faculty/Visiting_Faculty/Past/gvrshashtri.jpg', position: 'Senior Economist & Author', bioUrl: '#' },
    { name: 'Prof. Vivek Singh', image: 'Images/Faculty/Visiting_Faculty/Past/viveksingh.jpeg', position: 'Intel Fellow and director of the Computational Imaging Department', bioUrl: '#' },
    { name: 'Prof. Unnat P. Pandit', image: 'Images/Faculty/Visiting_Faculty/Past/UnnatPandit_0.jpg', position: 'NITI Ayog', bioUrl: '#' },
    { name: 'Prof. Dr.Shailendra Singh', image: 'Images/Faculty/Visiting_Faculty/Past/prof-shailendra-singh.png', position: 'Director, IIM Ranchi', bioUrl: '#' },
    { name: 'Prof. Murali Subramanian', image: 'Images/Faculty/Visiting_Faculty/Past/murali.jpeg', position: 'Group Head of Core Serice, London Stock Exchange', bioUrl: '#' },
    { name: 'Prof. Dr Binod Khadria', image: 'Images/Faculty/Visiting_Faculty/Past/binodkhadria.jpg', position: 'Professor, Zakir Husain Centre for Educational Studies', bioUrl: '#' },
    { name: 'Prof. Shailendra Raj Mehta', image: 'Images/Faculty/Visiting_Faculty/Past/shailendrarajmehta.jpeg', position: 'President of MICA', bioUrl: '#' },
    { name: 'Prof. Sanjeev Sanyal', image: 'Images/Faculty/Visiting_Faculty/Past/sanjeevsanyal.jpg', position: 'Indian economist', bioUrl: '#' },
    { name: 'Prof. Dheeraj Sharma', image: 'Images/Faculty/Visiting_Faculty/Past/Dheeraj.png', position: 'Director of Indian Institute of Management Rohtak', bioUrl: '#' },
    { name: 'Prof. G Ramesh', image: 'Images/Faculty/Visiting_Faculty/Past/ramesh-g.jpeg', position: 'Centre for Public Policy (CPP) at the Indian Institute of Management Bangalore (IIMB)', bioUrl: '#' },
    { name: 'Prof. Gargi Kaul', image: 'Images/Faculty/Visiting_Faculty/Past/gargikaul.jpeg', position: '(ret.) Indian Audit and Account Services', bioUrl: '#' },
    { name: 'Prof. Parikshat Singh Manhas', image: 'Images/Faculty/Visiting_Faculty/Past/parikshatsingh.jpeg', position: 'Professor, Business School, Central University Jammu', bioUrl: '#' },
    // Add more past faculty data here
];

function populateFaculty(container, data) {
    if (!container) return;
    let facultyHTML = '';
    data.forEach(faculty => {
        const bioLink = faculty.bioUrl && faculty.bioUrl !== '#' ?
            `<a href="${faculty.bioUrl}" target="_blank"></a>` : '';

        facultyHTML += `
                <div class="bg-white rounded-xl shadow-lg p-6 text-center flex flex-col justify-center transform hover:scale-105 transition-transform duration-300">
                    <a href="${faculty.bioUrl}" target="_blank">
                        <img class="w-32 h-32 rounded-full mx-auto mb-4 object-cover" src="${faculty.image}" alt="Photo of ${faculty.name}" loading="lazy">
                    </a>
                    <h3 class="text-xl font-bold text-blue-800">${faculty.name}</h3>
                    <p class="text-md font-semibold text-blue-600 mt-1">${faculty.position}</p>
                    ${bioLink}
                </div>
            `;
    });
    container.innerHTML = facultyHTML;
}

// Populate both sections on page load
populateFaculty(currentFacultyContainer, currentVisitingFacultyData);
populateFaculty(pastFacultyContainer, pastVisitingFacultyData);