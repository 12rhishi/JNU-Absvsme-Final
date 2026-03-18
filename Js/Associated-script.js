document.addEventListener('DOMContentLoaded', function () {
    const associatedContainer = document.querySelector('#associated-faculty .grid');

    const associatedFacultyData = [
        {
            name: 'Dr. Sanjeev Sanyal',
            image: 'Images/Faculty/Associated_Faculty/sanjeevsanyal.jpg',
            title: 'Member, Economic Advisory Council to the Prime Minister'
        },
        {
            name: 'Prof. Shailendra Raj Mehta',
            image: 'Images/Faculty/Associated_Faculty/shailendrarajmehta.jpeg',
            title: 'O.P. Jindal Distinguished University Professor'
        },
        {
            name: 'Prof. Unnat P Pandit',
            image: 'Images/Faculty/Associated_Faculty/UnnatPandit_0.jpg',
            title: 'Controller General, DPIT, MoC&I'
        },
        {
            name: 'Prof. Vijita Singh Aggarwal',
            image: 'Images/Faculty/Associated_Faculty/Vijita-Aggarwal.webp',
            title: 'Guru Gobind Singh Indraprastha University'
        },
        {
            name: 'Prof. Shveta Singh',
            image: 'Images/Faculty/Associated_Faculty/Shveta-singh.jpg',
            title: 'IIT Delhi'
        },
        {
            name: 'Prof. Neerja Pande',
            image: 'Images/Faculty/Associated_Faculty/Neerja_Pande.jpg',
            title: 'Indian Institute of Management, Lucknow'
        },
        {
            name: 'Dr. Sunil Shukla',
            image: 'Images/Faculty/Associated_Faculty/Sunil Shukla.jpg',
            title: 'Director General, Entrepreneurship Development Institute of India, Ahmedabad'
        },
        {
            name: 'Prof. Shoba Sivasankaran',
            image: 'Images/Faculty/Associated_Faculty/Sivasankaran.jpeg',
            title: 'Centre for French and Francophone Studies, School of Language Literature and Culture Studies'
        },
        {
            name: 'Prof. Rajan Yadav',
            image: 'Images/Faculty/Associated_Faculty/rajanyadav.jpg',
            title: 'Delhi School of Management, Delhi Technological University'
        },
        {
            name: 'Prof. Krishnendu Ghosh Dastidar',
            image: 'Images/Faculty/Dean/Former/dastidar-photo.jpg',
            title: 'Centre for Economic Studies and Planning, School of Social Sciences'
        },
        {
            name: 'Prof. Vir Bahadur Singh',
            image: 'Images/Faculty/Associated_Faculty/Vir_Bahadur_Singh.jpg',
            title: 'School of Computer & Systems Sciences'
        },
        {
            name: 'Prof. Manoj Kumar Jena',
            image: 'Images/Faculty/Associated_Faculty/manojkjena.jpg',
            title: 'Centre for the Study of Social Systems, School of Social Sciences'
        },
        {
            name: 'Prof. Arvind Kumar Mishra',
            image: 'Images/Faculty/Associated_Faculty/arvindmishra.jpg',
            title: 'Zakir Husain Centre for Educational Studies, School of Social Sciences'
        },
        {
            name: 'Dr. Saurabh Kumar Sharma',
            image: 'Images/Faculty/Associated_Faculty/saurabhsharma.jpg',
            title: 'School of Computer & Systems Sciences'
        }
    ];

    function populateFaculty(container, data, defaultTitle) {
        let facultyHTML = '';
        data.forEach(faculty => {
            const title = faculty.title || defaultTitle;
            const imageLink = faculty.ProfileUrl ?
                `<a href="${faculty.ProfileUrl}" target="_blank">
                        <img class="w-32 h-32 rounded-full mx-auto mb-4 object-fill border-4 border-transparent hover:border-blue-200 transition-all" src="${faculty.image}" alt="Photo of ${faculty.name}">
                    </a>` :
                `<img class="w-32 h-32 rounded-full mx-auto mb-4 object-fill border-4 border-transparent hover:border-blue-200 transition-all" src="${faculty.image}" alt="Photo of ${faculty.name}">`;

            facultyHTML += `
                    <div class="bg-white rounded-xl shadow-lg p-6 text-center flex flex-col justify-between transform hover:scale-105 transition-transform duration-300">
                        <div>
                            ${imageLink}
                            <h3 class="text-xl font-bold text-blue-800">${faculty.name}</h3>
                            <p class="text-md font-semibold text-blue-600 mt-1">${title}</p>
                        </div>
                    </div>
                `;
        });
        container.innerHTML = facultyHTML;
    }

    populateFaculty(associatedContainer, associatedFacultyData, 'Professor');

});
