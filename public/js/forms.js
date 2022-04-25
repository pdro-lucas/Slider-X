export const uploadData = (uploadForm, uploadUrl) => {
  const formData = new FormData(uploadForm);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  fetch(uploadUrl, {
    method: "POST",
    body: formData,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.error) {
        alert(data.error);
      } else {
        alert(data.message);
        window.location = "/admin";
      }
    });
};

export const updateData = (editForm, editUrl) => {
  const formData = new FormData(editForm);
  const file = editForm.querySelector("input[type=file]").files[0];

  const request = new XMLHttpRequest();

  formData.append("file", file, "file");

  request.onreadystatechange = function () {
    if (this.readyState != 4) return;
    if (this.status == 200) {
      const data = JSON.parse(this.responseText);
      console.log(data);
    }
  };

  request.open("PUT", editUrl);
  request.send(formData);
};
