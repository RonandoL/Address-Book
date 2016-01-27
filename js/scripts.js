// Business Logic
// Constructor for Contact
function Contact(firstName,lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];
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
  return this.street + ", " + this.city + ", " + this.state + ", " + this.zip;
}

function resetFields() {
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");
}

// User Interface Logic
$(document).ready(function() {
  $("#add-address").click(function() {  // append new address field to the form
    $("#new-addresses").append('<div class="new-address">' +
                                 '<div class="form-group">' +
                                   '<label for="new-street">Street</label>' +
                                   '<input type="text" class="form-control new-street">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-city">City</label>' +
                                   '<input type="text" class="form-control new-city">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-state">State</label>' +
                                   '<input type="text" class="form-control new-state">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-state">Zip</label>' +
                                   '<input type="text" class="form-control new-zip">' +
                                 '</div>' +
                               '</div>');

  });

  // create new Contact object.
  $("form.contactForm").submit(function(event) {  // form .submit section
    var firstName = $("input.firstName").val();
    var lastName = $("input.lastName").val();
    var newContact = new Contact(firstName, lastName);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    // form Address section to collect and use the inputted address data
    // tells the page to display the address data

    $(".new-address").each(function() {  // loop through the address form fields to grab the inputs
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var inputtedZip = $(this).find("input.new-zip").val();
      var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState, inputtedZip);
      newContact.addresses.push(newAddress);
    });
    resetFields();
    //create Address objects, and push them onto the contact object's addresses array property.
        // .each() - if we want to loop through all of the elements in a jQuery selection, we use the .each() method. It's a lot like forEach() for arrays, but instead of taking a parameter that each element is assigned to, we use the this keyword to refer to the current element.
        // the find() method, will look through all of the child elements of the selected element for any elements that match the criteria passed as an argument. find() will look at children, their children, and so on, Since our inputs are nested within form-group <div>s.

    $(".contact").last().click(function() {   // .contact click listener callback function
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>")
      });
    });

    event.preventDefault();
  });
});





//
