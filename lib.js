const tbody = document.querySelector("tbody");
const template = document.querySelector("template");
const table = document.querySelector("table");
const loader = document.querySelector(".loader");

export const createTable = (data) => {
  data.forEach(({ name, score, id }) => {
    const newStudentRow = template.content.cloneNode(true);
    const newStudentTDs = newStudentRow.querySelectorAll("td");

    newStudentTDs[0].textContent = id;
    newStudentTDs[1].textContent = name;
    newStudentTDs[2].textContent = score;
    tbody.appendChild(newStudentRow);
  });
};

export const displayTable = () => {
  loader.classList.add('is-hidden');
  table.classList.remove('is-hidden');
}