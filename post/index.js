const form = document.getElementById("myForm");
const statusText = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  // place holder for the api endpoint
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    body: formData,
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    statusText.innerHTML = "SUCCESS";
  } else {
    statusText.innerHTML = "FAILED";
  }
});
