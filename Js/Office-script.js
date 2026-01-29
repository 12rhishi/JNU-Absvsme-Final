
document.addEventListener('DOMContentLoaded', function () {
    // Existing code for Associated Faculty
    const associatedContainer = document.querySelector('#associated-faculty .grid');

    const associatedFacultyData = [
        // ... (your existing associatedFacultyData array) ...
    ];

    function populateFaculty(container, data, defaultTitle) {
        // ... (your existing populateFaculty function) ...
    }

    populateFaculty(associatedContainer, associatedFacultyData, 'Professor');

    // --- NEW CODE FOR OFFICE STAFF ---
    const officeStaffContainer = document.querySelector('#Office-staff .grid');

    const officeStaffData = [
        // Example data for office staff
        { name: 'Hitesh Verma', image: 'Images/OfficeStaff/Hitesh.jpg', title: 'Junior Assistant' },
        { name: 'Som Nath', image: 'Images/OfficeStaff/SomNath.png', title: 'Computer Operator' },
        { name: 'Amar', image: 'Images/OfficeStaff/Amar.jpg', title: 'MTS' },
        { name: 'Bhupendra Singh Bisht', image: 'Images/OfficeStaff/Bhupendra.png', title: 'Computer Operator' }
    ];

    function populateOfficeStaff(container, data) {
        let staffHTML = '';
        data.forEach(staff => {
            staffHTML += `
                <div class="bg-white rounded-xl shadow-lg p-6 text-center flex flex-col justify-between transform hover:scale-105 transition-transform duration-300">
                    <div>
                        <img class="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-transparent hover:border-blue-200 transition-all" src="${staff.image}" alt="Photo of ${staff.name}">
                        <h3 class="text-xl font-bold text-blue-800">${staff.name}</h3>
                        <p class="text-md font-semibold text-blue-600 mt-1">${staff.title}</p>
                    </div>
                </div>
            `;
        });
        container.innerHTML = staffHTML;
    }

    // Call the new function to populate the office staff section
    if (officeStaffContainer) {
        populateOfficeStaff(officeStaffContainer, officeStaffData);
    }

});
