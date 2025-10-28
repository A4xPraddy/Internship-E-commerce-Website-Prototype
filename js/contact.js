let form = document.querySelector(".form-group");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let { name, lastName, phno, msg, email } = e.target;
  let body = {
    name: name.value,
    phno: phno.value,
    email: email.value,
    lastName: lastName.value,
    msg: msg.values,
  };
  let data = await fetch("http://localhost:3003/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then((data) => data.json())
    .then((data) => data);
  form.reset();
  alert(data.message || "");
});
