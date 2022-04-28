import { updateData, uploadData } from "./forms.js";

(function () {
  // Upload form submit
  const uploadForm = document.getElementById("uploadForm");
  if (uploadForm) {
    const uploadUrl = uploadForm.action;
    uploadForm.addEventListener("submit", (e) => {
      e.preventDefault();
      uploadData(uploadForm, uploadUrl);
    });
  }

  // Edit form submit
  const editForm = document.getElementById("updateForm");
  if (editForm) {
    const editUrl = editForm.action;
    editForm.addEventListener("submit", (e) => {
      e.preventDefault();
      updateData(editForm, editUrl);
    });
  }

  // Delete image from database and file system
  const button = document.querySelectorAll(".delete-button");
  if (button) {
    button.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = e.target.dataset.id;
        fetch(`/api/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            location.reload();
          });
      });
    });
  }

  // create a function to filter data in the table. Remove blank spaces and convert to lowercase
  function filterData(e) {
    const inputStr = e.target.value.toLowerCase();
    const table = document.getElementById("table");
    const rows = table.rows;
    for (let i = 1; i < rows.length; i++) {
      const firstCol = rows[i].cells[0].textContent.toLowerCase();
      const thirdCol = rows[i].cells[2].textContent.toLowerCase();
      if (!firstCol.includes(inputStr) && !thirdCol.includes(inputStr)) {
        rows[i].style.display = "none";
      }
    }

    // if the input is empty, show all the rows
    if (inputStr === "") {
      for (let i = 1; i < rows.length; i++) {
        rows[i].style.display = "";
      }
    }

    // if the input is not empty, hide the header row
    if (inputStr !== "") {
      rows[0].style.display = "none";
    }

    // if the input is empty, show the header row
    if (inputStr === "") {
      rows[0].style.display = "";
    }
  }

  const inputFilter = document.getElementById("filter");
  const itemsFound = document.getElementById("itemsFound");
  if (inputFilter) {
    inputFilter.addEventListener("keyup", (e) => filterData(e));
  }
})();
