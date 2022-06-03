(function () {
  // Open modal with a specific image by id
  function CreateModalImage() {
    const myModal = new bootstrap.Modal(
      document.getElementById("exampleModal")
    );
    const tableTitle = document.querySelectorAll(".table-title");
    const modalBody = document.querySelector(".modal-body");
    const modalFooterContent = document.querySelector(".modal-footer-content");
    const modalTitle = document.querySelector(".modal-title");

    function setImageInModalBody(imageId) {
      const res = fetch(
        `https://slider-x-production.up.railway.app/api/image/${imageId}`
      )
        .then((data) => data.json())
        .then((dataImage) => {
          modalBody.style.backgroundImage = `url(${dataImage[0].image_location})`;
          modalTitle.innerHTML = `
            Titulo: ${dataImage[0].title !== "" ? dataImage[0].title : "null"}
          `;
          modalFooterContent.innerHTML = `
            Data de envio: ${new Date(dataImage[0].date).toLocaleString()} - ${
            dataImage[0].image_name
          }
          `;
        });
    }

    if (!tableTitle) {
      return;
    }

    tableTitle.forEach((title) => {
      title.addEventListener("click", function (event) {
        const imageId = event.target.dataset.id;
        modalBody.style.backgroundImage = "";
        modalTitle.innerHTML = "";
        modalFooterContent.innerHTML = "";
        myModal.show();
        setImageInModalBody(imageId);
      });
    });
  }

  CreateModalImage();

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
            location.reload();
          });
      });
    });
  }

  // Filter data in table
  function filterData(e) {
    const inputStr = e.target.value.toLowerCase();
    const table = document.getElementById("table");
    const rows = table.rows;
    for (let i = 1; i < rows.length; i++) {
      const firstCol = rows[i].cells[1].textContent.toLowerCase();
      const thirdCol = rows[i].cells[3].textContent.toLowerCase();
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
