// -------------------------- DOM ELEMENTS ------------------------
const emailInput = document.querySelector("#emailInput");
const emailBtn = document.querySelector("#emailBtn");
const emailErrorMsg = document.querySelector("#emailErrorMsg");
const emailSuccessMsg = document.querySelector("#emailSuccessMsg");
const addNewMailBtn = document.querySelector("#addNewMailBtn");
const playBtn = document.querySelector("#playBtn");
const playerResult = document.querySelector("#playerResult");
const pcResult = document.querySelector("#pcResult");
const resultMsg = document.querySelector("#resultMsg");
// -------------------------- / DOM ELEMENTS ------------------------

// ------------------ Arrays ------------------------
let validEmails = ["some@mail.com", "other@mail.com", "example@mail.com"];
// ------------------ / Arrays ------------------------

//---------------------- FUNCTIONS ----------------------------
// Check if the inputed mail is inside the valid e-mails array Function
function checkMail(mail, database) {
  let regex = /\w+@\w+.\w+/g;
  // check if the input is an real e-mail
  if (regex.test(emailInput.value)) {
    //restart normal values off output messages
    emailSuccessMsg.classList.remove("mt__msg--show");
    emailErrorMsg.classList.remove("mt__msg--show");
    let valid = false;
    for (let i = 0; i < database.length; i++) {
      if (mail === database[i]) {
        valid = true;
      }
    }
    //set the message to output
    if (valid) {
      emailSuccessMsg.classList.add("mt__msg--show");
    } else {
      emailErrorMsg.classList.add("mt__msg--show");
    }
  }
}
//---------------------- / FUNCTIONS ----------------------------

//function to ad an e-mail to the valid ones
function addNewMail(mail, database) {
  database.push(mail);
  emailErrorMsg.classList.remove("mt__msg--show");
}

// -------------------------- Event Listeners --------------------
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

//----------------------------------------------------------------

// -------------------------- / Event Listeners --------------------
