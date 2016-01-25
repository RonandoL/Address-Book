function Contact(firstName,lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = [];
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

$(document).ready(function() {
  $("form.ggg").submit(function(event) {


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
