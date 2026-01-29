document.addEventListener('DOMContentLoaded', function () {
    const associatedContainer = document.querySelector('#associated-faculty .grid');

    const associatedFacultyData = [
        { name: 'Prof. Ajay Kumar Dubey', image: 'Images/Faculty/Associated_Faculty/akdubey.jpg', emails: ['akdubey@mail.jnu.ac.in', 'ajaydubey.jnu@gmail.com'], ProfileUrl: 'https://www.jnu.ac.in/content/akdubey' },
        { name: 'Dr. Arun Srivastava', image: 'Images/Faculty/Associated_Faculty/arun.png', emails: ['a_srivastava@mail.jnu.ac.in', 'srivastava02@hotmail.com'], ProfileUrl: 'https://www.jnu.ac.in/content/a_srivastava' },
        { name: 'Prof. Bhupinder Zutshi', image: 'Images/Faculty/Associated_Faculty/bzutshi.jpg', emails: ['b_zutshi@mail.jnu.ac.in', 'bzutshi@gmail.com'] },
        { name: 'Prof. Girish Nath Jha', image: 'Images/Faculty/Associated_Faculty/girish.jpg', emails: ['girishjha@jnu.ac.in', 'girishjha@gmail.com'], ProfileUrl: 'https://www.jnu.ac.in/content/girishjha' },
        { name: 'Prof. Gulshan Sachdeva', image: 'Images/Faculty/Associated_Faculty/2 Gulshan Sachdeva.jpg', emails: ['gulshanjnu@gmail.com', 'gulshan@mail.jnu.ac.in'], ProfileUrl: 'https://www.jnu.ac.in/content/gulshan' },
        { name: 'Prof. Jayant Tripathi', image: 'Images/Faculty/Associated_Faculty/jtripathi.jpg', emails: ['jktripathi@mail.jnu.ac.in', 'jktrip@yahoo.com'], ProfileUrl: 'https://www.jnu.ac.in/content/jktripathi' },
        { name: 'Prof. Kaushal K. Sharma', image: 'Images/Faculty/Associated_Faculty/KaushalSharma.jpg', emails: ['kaushalkumar@mail.jnu.ac.in'] },
        { name: 'Prof. Krishnendu Ghosh Dastidar', image: 'Images/Faculty/Associated_Faculty/dastidar-photo.jpg', emails: ['krishnendu.dastidar@gmail.com', 'kgd0302@mail.jnu.ac.in', 'kgd12@yahoo.com'], ProfileUrl: 'https://www.jnu.ac.in/content/kgd0302' },
        { name: 'Prof. Madhav Govind', image: 'Images/Faculty/Associated_Faculty/Madhav Govind.png', emails: ['m_govind@mail.jnu.ac.in', 'mgovind11@gmail.com'], ProfileUrl: 'https://www.jnu.ac.in/content/m_govind' },
        { name: 'Prof. Milap Punia', image: 'Images/Faculty/Associated_Faculty/mpunia.jpg', emails: ['punia@mail.jnu.ac.in', 'milap.jnu@gmail.com'], ProfileUrl: 'https://www.jnu.ac.in/content/punia' },
        { name: 'Prof. P.K. Joshi', image: 'Images/Faculty/Associated_Faculty/pkjoshi.jpg', emails: ['pkjoshi@mail.jnu.ac.in', 'pkjoshi27@hotmail.com'], ProfileUrl: 'https://www.jnu.ac.in/content/pkjoshi' },
        { name: 'Prof. Paulraj Rajamani', image: 'Images/Faculty/Associated_Faculty/prajamani.jpg', emails: ['paulrajr@mail.jnu.ac.in'], ProfileUrl: 'https://www.jnu.ac.in/content/paulrajr' },
        { name: 'Prof. Pradipta K. Chaudhury', image: 'Images/Faculty/Associated_Faculty/pradipta.jpg', emails: ['pradipta@mail.jnu.ac.in'] },
        { name: 'Prof. Ravikesh', image: 'Images/Faculty/Associated_Faculty/ravikesh.png', emails: ['ravikesh@mail.jnu.ac.in', 'ravikesh@gmail.com'], ProfileUrl: 'https://www.jnu.ac.in/content/ravikesh' },
        { name: 'Prof. Saumen Chattopadhyay', image: 'Images/Faculty/Associated_Faculty/saumen.jpg', emails: ['saumen@mail.jnu.ac.in', 'saumen@jnu.ac.in'], ProfileUrl: 'https://www.jnu.ac.in/content/saumen' },
        { name: 'Dr. Sudesh Yadav', image: 'Images/Faculty/Associated_Faculty/sudesh.png', emails: ['syadav@mail.jnu.ac.in', 'sudesh27@hotmail.com'], ProfileUrl: 'https://www.jnu.ac.in/content/syadav' },
        { name: 'Prof. T.V. Vijay Kumar', image: 'Images/Faculty/Associated_Faculty/Photo_TVVK.jpg', emails: ['tvvk@mail.jnu.ac.in', 'tvvijaykumar@hotmail.com'], ProfileUrl: 'https://www.jnu.ac.in/content/tvvk' },
        { name: 'Prof. Umesh Kulshrestha', image: 'Images/Faculty/Associated_Faculty/umesh.png', emails: ['umesh@mail.jnu.ac.in', 'umeshkulshrestha@gmail.com'], ProfileUrl: 'https://www.jnu.ac.in/content/umesh' },
        { name: 'Dr. Usha Mina', image: 'Images/Faculty/Associated_Faculty/UshaMina.jpg', emails: ['ushamina@mail.jnu.ac.in', 'praush2@gmail.com'], ProfileUrl: 'https://www.jnu.ac.in/content/ushamina' }
    ];

    function populateFaculty(container, data, defaultTitle) {
        let facultyHTML = '';
        data.forEach(faculty => {
            const emailLinks = faculty.emails.map(email =>
                `<a href="mailto:${email}" class="text-gray-600 hover:text-blue-500 block truncate"><i class="fas fa-envelope fa-fw mr-2"></i>${email}</a>`
            ).join('');
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
                        <div class="mt-4 pt-4 border-t border-gray-200">
                            <div class="text-xs text-left space-y-1">
                                ${emailLinks}
                            </div>
                        </div>
                    </div>
                `;
        });
        container.innerHTML = facultyHTML;
    }

    populateFaculty(associatedContainer, associatedFacultyData, 'Professor');

});