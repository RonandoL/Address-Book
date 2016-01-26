describe('Contact', function() {
  it("creates a new contact with the given information", function() {
    var testContact = new Contact("Mollie", "Bootsma");
    expect(testContact.firstName).to.equal("Mollie");
    expect(testContact.lastName).to.equal("Bootsma");
    expect(testContact.address).to.eql([]);
  });

  // Prototype
  it("adds the fullName method to all contacts", function() {
    var testContact = new Contact("Ronando","Long");
    expect(testContact.fullName()).to.equal("Ronando Long");
  });

});

describe('Address', function() {
  it("creates a new address with the given specifications", function() {
    var testAddress = new Address("123 Main St", "Test City","Test State", 12345);
    expect(testAddress.street).to.equal("123 Main St");
    expect(testAddress.city).to.equal("Test City");
    expect(testAddress.state).to.equal("Test State");
    expect(testAddress.zip).to.equal(12345);
  });

  // Prototype
  it("adds the fullAddress method to all addresses", function() {
    var testAddress = new Address("123 Main St", "Test City","Test State", 12345);
    expect(testAddress.fullAddress()).to.equal("123 Main St, Test City, Test State, 12345");
  });

});
