var formFields = {
  name: document.getElementById("name"),
  username: document.getElementById("username"),
  email: document.getElementById("email"),
};

let formToSubmit = document.getElementById("contact-form");

formToSubmit.addEventListener("submit", (event) => {
  event.preventDefault();
  var fieldsFilled = true;
  for (const [key, val] of Object.entries(formFields)) {
    if (val.value === "") {
      fieldsFilled = false;
    }
  }
  if (fieldsFilled === true) {
    console.log("======== Form Submission ========");
    console.log(formFields.name.value);
    console.log(formFields.username.value);
    console.log(formFields.email.value);
    resetToDefaults(formFields);
  }
});
function resetToDefaults(formFields) {
  formFields.name.value = null;
  formFields.username.value = null;
  formFields.email.value = null;
}
