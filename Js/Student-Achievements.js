// =============================
// Scrollable Student Tables
// =============================

// Data
const placedStudents = [
  { name: "Shishir Pandey", company: "Corizo" },
  { name: "Ashutosh Singh", company: "Launched" },
  { name: "Shravan Keshari", company: "Skyra Techscape Pvt Ltd" },
  { name: "Aakash", company: "Stellara Edutech" },
  { name: "Aashutosh Singh", company: "Stellara Edutech" },
  { name: "Tejasvi", company: "TopperRank" },
  { name: "Aniket", company: "Unlox" },
  { name: "Shravan Keshari", company: "Unlox" },
  { name: "Yash Kumar", company: "Unlox" },
  { name: "Aakash", company: "Volume9" },
  { name: "Abhishek Tiwari", company: "Volume9" },
  { name: "Aniket", company: "Volume9" },
  { name: "Shravan Keshari", company: "Volume9" },
  { name: "Shashir Pandey", company: "Marut Air" }
];

const internshipStudents = [
  { name: "Ananya Rastogi", company: "Aadesh Foundation" },
  { name: "Ankita Singh", company: "Aadesh Foundation" },
  { name: "Divya Sharma", company: "Aadesh Foundation" },
  { name: "Isha Salhotra", company: "Aadesh Foundation" },
  { name: "Keshav Sharma", company: "Aadesh Foundation" },
  { name: "Pulkita", company: "Aadesh Foundation" },
  { name: "Ananya Rastogi", company: "CoreFit Care" },
  { name: "Ankush Ydav", company: "CoreFit Care" },
  { name: "Anshul Yadav", company: "CoreFit Care" },
  { name: "Divya Sharma", company: "CoreFit Care" },
  { name: "Isha Salhotra", company: "CoreFit Care" },
  { name: "Keshav Sharma", company: "CoreFit Care" },
  { name: "Nandini", company: "CoreFit Care" },
  { name: "Pulkita ", company: "CoreFit Care" },
  { name: "Vidhi Sharma", company: "CoreFit Care" },
  { name: "Yuktika Duggal", company: "CoreFit Care" },
  { name: "Ananya Rastogi", company: "Den Publications" },
  { name: "Ananya Singh", company: "Den Publications" },
  { name: "Ankita Singh", company: "Den Publications" },
  { name: "Aviral Pratap Singh", company: "Den Publications" },
  { name: "Divya Sharma", company: "Den Publications" },
  { name: "Mokshika Arya", company: "Den Publications" },
  { name: "Pulkita Thakran", company: "Den Publications" },
  { name: "Shivangi Singh", company: "Den Publications" },
  { name: "Yashika Choudhary", company: "Den Publications" },
  { name: "Vidhi Sharma", company: "Scrabble" },
  { name: "Vidhi Sharma", company: "IAA" },
  { name: "Sanika Herlekar", company: "IAA" }
];
// Utility function to render paginated tables
function setupScrollableTable(data, tbodyId, upBtnId, downBtnId) {
  const tbody = document.getElementById(tbodyId);
  const upBtn = document.getElementById(upBtnId);
  const downBtn = document.getElementById(downBtnId);

  let startIndex = 0;
  const rowsPerPage = 5;

  function renderTable() {
    tbody.innerHTML = "";
    const pageData = data.slice(startIndex, startIndex + rowsPerPage);
    pageData.forEach((student, idx) => {
  const row = document.createElement("tr");
  row.className = "border-b";
  row.innerHTML = `
    <td class="py-2 px-4 text-center">${startIndex + idx + 1}.</td>
    <td class="py-2 px-4">${student.name}</td>
    <td class="py-2 px-4 text-gray-600">${student.company}</td>
  `;
  tbody.appendChild(row);
});

    // Disable buttons when at limits
    upBtn.disabled = startIndex === 0;
    downBtn.disabled = startIndex + rowsPerPage >= data.length;
  }

  upBtn.addEventListener("click", () => {
    if (startIndex > 0) {
      startIndex -= rowsPerPage;
      renderTable();
    }
  });

  downBtn.addEventListener("click", () => {
    if (startIndex + rowsPerPage < data.length) {
      startIndex += rowsPerPage;
      renderTable();
    }
  });

  renderTable(); // initial render
}

// Initialize both tables
document.addEventListener("DOMContentLoaded", () => {
  setupScrollableTable(placedStudents, "placed-students-tbody", "placed-scroll-up", "placed-scroll-down");
  setupScrollableTable(internshipStudents, "internship-students-tbody", "internship-scroll-up", "internship-scroll-down");
});
