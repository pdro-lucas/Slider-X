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
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  fetch(editUrl, {
    method: "PUT",
    body: JSON.stringify(data),
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
