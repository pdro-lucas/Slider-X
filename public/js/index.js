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
  const button = document.querySelector(".delete-button");
  if (button) {
    button.addEventListener("click", (e) => {
      const id = button.getAttribute("data-id");

      fetch(`/api/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          location.reload();
        });
    });
  }
})();
