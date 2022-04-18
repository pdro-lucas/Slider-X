import { updateData, uploadData } from "./editForm.js";

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
})();
