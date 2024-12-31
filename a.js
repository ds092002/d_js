const libphonenumber = require('libphonenumber-js');

const phoneNumber = libphonenumber.parsePhoneNumberFromString('+919624165363');

if (phoneNumber) {
  console.log("\nPhone Number's location (National format):\n");
  console.log(phoneNumber.format('NATIONAL'));
} else {
  console.log("Invalid phone number.");
}
