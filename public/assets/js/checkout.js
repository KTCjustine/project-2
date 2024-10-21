const email = document.querySelector("#email");
const fullName = document.querySelector("#full-name");
const address = document.querySelector("#address");
const phoneNumber = document.querySelector("#phone-number");

const textFields = [fullName, address, email, phoneNumber];

textFields.forEach((fields) => {
  fields.addEventListener("input", function () {
    if (fields === email) {

      if (fields.value.includes("@") && fields.value.includes(".")) {
        fields.style.border = "1px solid green";
      } else {
        fields.style.border = "1px solid red";
      }

    } else if (fields === phoneNumber) {

        fields.value = fields.value.replace(/[^0-9]/g, "");
        if (fields.value.length >= 10) {
          fields.style.border = "1px solid green";
        } else {
          fields.style.border = "1px solid red";
        }

    } else {

      if (fields.value.length > 0) {
        fields.style.border = "1px solid green";
      } else {
        fields.style.border = "1px solid red";
      }

    }
  });
});


const checkbox = document.querySelector("#check");
const checkOutButton = document.querySelector("#checkout-btn");

function isChecked() {
    if (checkbox.checked) {
        checkOutButton.disabled = false;
        checkOutButton.classList.add("enable-btn");
    } else {
        checkOutButton.disabled = true;
        checkOutButton.classList.remove("enable-btn");
    }
}

checkbox.addEventListener('change', isChecked);


