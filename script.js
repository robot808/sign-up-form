const email = document.getElementById("email");
const passwords = document.querySelectorAll("input[type='password']");

email.addEventListener("change", event => {
  if (event.target.value) event.target.className = "populated"
  else event.target.className = "";
});

passwords.forEach(element => {
  element.addEventListener("change", () => {
    let password = document.querySelector("#password");
    if (passwords[0].value != passwords[1].value) password.className = "nomatch"
    else password.className = "";
  });
});