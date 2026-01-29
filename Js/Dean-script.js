document.addEventListener('DOMContentLoaded', function () {
    // Data for Former Deans
    const formerDeansData = [
        {
            name: 'Prof. Rajeev Sijariya',
            image: 'Images/Faculty/Dean/Former/rajeevsijaria.jpg',
            tenure: '11/05/2023 - 13/03/2024',
            bioUrl: 'https://www.jnu.ac.in/content/rajeevsijariya'
        },
        {
            name: 'Prof. Arvind Kumar',
            image: 'Images/Faculty/Dean/Former/KumarArvind.png',
            tenure: '04/05/2021 - 03/05/2023',
            bioUrl: 'https://www.jnu.ac.in/content/kumararvind',
        },
        {
            name: 'Prof. Unnat P. Pandit',
            image: 'Images/Faculty/Dean/Former/UnnatPandit_0.jpg',
            tenure: '31/07/2020 - 03/05/2021',
            bioUrl: 'https://www.jnu.ac.in/content/unnatppandit',
        },
        {
            name: 'Prof. Heeraman Tiwari',
            image: 'Images/Faculty/Dean/Former/heeramantiwari.png',
            tenure: '01/01/2019 - 31/07/2020',
            bioUrl: 'https://www.jnu.ac.in/content/htiwari',
        },
        {
            name: 'Prof. Krishnendu Ghosh Dastidar',
            image: 'Images/Faculty/Dean/Former/dastidar-photo.jpg',
            tenure: '05/01/2018 - 01/01/2019',
            bioUrl: 'https://www.jnu.ac.in/content/kgd0302',
        },
    ];

    // Function to populate the Former Deans section
    function populateFormerDeans(containerId, data) {
        const container = document.getElementById(containerId);
        if (!container) return;

        let deansHTML = '';
        data.forEach(dean => {
            const bioLink = dean.bioUrl && dean.bioUrl !== '#' ?
                `<a href="${dean.bioUrl}" target="_blank"></a>` : '';

            deansHTML += `
                <div class="bg-white rounded-xl shadow-lg p-6 text-center flex flex-col justify-center transform hover:scale-105 transition-transform duration-300">
                    <a href="${dean.bioUrl || '#'}" target="_blank">
                        <img class="w-32 h-32 rounded-full mx-auto mb-4 object-fill border-4 border-transparent hover:border-blue-200 transition-all " src="${dean.image}" alt="Photo of ${dean.name}" loading="lazy">
                    </a>
                    <h3 class="text-xl font-bold text-blue-800">${dean.name}</h3>
                    <p class="text-md font-semibold text-blue-600"><strong>Tenure:</strong> ${dean.tenure}</p>       
                    ${bioLink}
                </div>
            `;
        });
        container.innerHTML = deansHTML;
    }

    // Call the function to populate the former deans section
    populateFormerDeans('Former-Dean-container', formerDeansData);
});