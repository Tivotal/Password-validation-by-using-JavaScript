/* Created by Tivotal */

let passInput = document.querySelector(".input-box input");
let eyeIcon = document.querySelector(".input-box i");
let requirementList = document.querySelectorAll(".requirement-list li");

//password requirement array with corresponding expression and index
let requirements = [
  //at least 8 characters length
  { regex: /.{8,}/, index: 0 },

  //at least 1 uppercase letter
  { regex: /[A-Z]/, index: 1 },

  //at least 1 lowercase letter
  { regex: /[a-z]/, index: 2 },

  //at least 1 number
  { regex: /[0-9]/, index: 3 },

  //at least 1 symbol
  { regex: /[^A-Za-z0-9]/, index: 4 },
];

passInput.addEventListener("keyup", (e) => {
  //looping through requirement array
  requirements.forEach((item) => {
    //checking if password matches with item regex
    let isValid = item.regex.test(e.target.value);

    //getting respective li item of the object item index
    let requirementItem = requirementList[item.index];

    //updating icon of requirement item based on isValid value
    if (isValid) {
      requirementItem.classList.add("valid");
      //getting first child of requirement item , which returns the icon
      requirementItem.firstElementChild.className = "fas fa-check";
    } else {
      requirementItem.classList.remove("valid");
      requirementItem.firstElementChild.className = "fas fa-circle";
    }
  });
});

eyeIcon.addEventListener("click", () => {
  //toggle password input type between password & text
  passInput.type = passInput.type === "password" ? "text" : "password";

  //updating eye icon based on input type
  eyeIcon.className = `fas fa-eye${
    passInput.type === "password" ? "" : "-slash"
  }`;
});
