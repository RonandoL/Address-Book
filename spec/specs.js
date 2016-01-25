describe('Contact', function() {
  it("creates a new contact with the given information", function() {
    var testContact = new Contact("Mollie", "Bootsma");
    expect(testContact.firstName).to.equal("Mollie");
    expect(testContact.lastName).to.equal("Bootsma");
    expect(testContact.address).to.eql([]);
  });

  it("adds the fullName method to all contacts", function() {
    var testContact = new Contact("Ronando","Long");
    expect(testContact.fullName()).to.equal("Ronando Long");
  });

});
