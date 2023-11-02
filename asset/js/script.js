

// faq section js 
const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

    const currentlyActiveAccordionItemHeader = document.querySelector(
      ".accordion-item-header.active"
    );
    if (
      currentlyActiveAccordionItemHeader &&
      currentlyActiveAccordionItemHeader !== accordionItemHeader
    ) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});


// contact form validation 
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let institute = document.getElementById('institute');
let address = document.getElementById('address');
let message = document.getElementById('message');
let form = document.querySelector('form'); //for target form
let count = 0; //for validation

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let fnameChr = fname.value.split(""); //for char of first name
  let lnameChr = lname.value.split(""); //for char of last name

  //empty value validation
  if (fname.value == "" || email.value == "" || message.value == "") {
    alert("Some Field Are Required*");
    count = 0;
    return;
  }
  else {
    //name character validation
    if ((fnameChr[0].charCodeAt() >= 65 && fnameChr[0].charCodeAt() <= 90) || (fnameChr[0].charCodeAt() >= 97) && fnameChr[0].charCodeAt() <= 122) {
      count = 1;
    }
    else {
      alert('Number Or Space At The Beginning Of The Name FieldIs Not Acceptable');
      count = 0;
      return;
    }
  }

  //name length validation
  if (fnameChr.length > 25 || lnameChr.length > 25) {
    alert("Name Is Too Long (Character limit : 25 char)\nYour First Name Character Length is: " + fnameChr.length + "\nYour First Name Character Length is: " + lnameChr.length);
    count = 0;
    return;
  }
  else {
    count = 1;
  }

  //for email validation
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.value.match(validRegex)) {
    count = 1;
  }
  else {
    alert("Invalid email address!");
    count = 0;
    return;
  }

  //send message 
  if (count == 1) {
    // email js 
    var params = {
      from_name:fname.value,
      fname: fname.value,
      lname: lname.value,
      email: email.value,
      phone: phone.value,
      institute: institute.value,
      address: address.value,
      message: message.value,
    };
    var serviceID = "service_2o8yv3t";
    var templateID = "template_vqtypjm";
    emailjs.send(serviceID, templateID, params)
      .then(res => {
        alert("Message send successfully");
      })
      .catch((err) => console.log(err));

    form.reset();
  }
  else {
    alert("Message not Send !")
  }



})
