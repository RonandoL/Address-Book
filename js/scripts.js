// Business Logic
// Constructor for Contact
function Contact(firstName,lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = [];
}

// Prototype for fullName: concatonating firstName + lastName
Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// Constructor for Address
function Address(street, city, state, zip) {  // parameters
  this.street = street;                       // properties
  this.city = city;
  this.state = state;
  this.zip = zip;
}

// Ptototype for Address
Address.prototype.fullAddress = function() {
  return this.street + ", " + this.city + ", " + this.state + ", " +this.zip;
}

// User Interface Logic
$(document).ready(function() {
  $("form.contactForm").submit(function(event) {


    var inputtedFirstName = $("input.firstName").val();

    var inputtedLastName = $("input.lastName").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $("input.firstName").val();
    $("input.lastName").val();

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });


    event.preventDefault();
  });
});
