const emailInput = document.querySelector("#emailInput");
const emailBtn = document.querySelector("#emailBtn");
const emailErrorMsg = document.querySelector("#emailErrorMsg");
const emailSuccessMsg = document.querySelector("#emailSuccessMsg");
const addNewMailBtn = document.querySelector("#addNewMailBtn");

let validEmails = ["some@mail.com", "other@mail.com", "example@mail.com"];

function checkMail(mail, database) {
  let regex = /\w+@\w+.\w+/g;
  if (regex.test(emailInput.value)) {
    emailSuccessMsg.classList.remove("mt__msg--show");
    emailErrorMsg.classList.remove("mt__msg--show");
    let valid = false;
    for (let i = 0; i < database.length; i++) {
      if (mail === database[i]) {
        valid = true;
      }
    }
    if (valid) {
      emailSuccessMsg.classList.add("mt__msg--show");
    } else {
      emailErrorMsg.classList.add("mt__msg--show");
    }
  }
}

function addNewMail(mail, database) {
  database.push(mail);
  emailErrorMsg.classList.remove("mt__msg--show");
}

emailBtn.addEventListener("click", () => {
  checkMail(emailInput.value, validEmails);
});
emailInput.addEventListener("keydown", (key) => {
  if (key.key === "Enter") {
    checkMail(emailInput.value, validEmails);
  }
});

addNewMailBtn.addEventListener("click", () => {
  addNewMail(emailInput.value, validEmails);
});
