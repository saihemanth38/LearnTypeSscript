import { Address } from "./address";
class Customer {
  firstName: string;
  lastName: string;
  mobileNo: number;
  address: Address;
  constructor(fName: string, lName: string, mNumber: number, address: Address) {
    this.firstName = fName;
    this.lastName = lName;
    this.mobileNo = mNumber;
    this.address = address;
  }
}
var addressData = new Address(
  "23/333-1",
  "RamanaiduPeta",
  "Sv Degree College",
  "Machilipatnam",
  521001,
  "AndhraPradesh"
);
var customerObj = new Customer("Sai", "Hemanth", 8185820115, addressData);
console.log(customerObj.firstName);
console.log(customerObj.lastName);
console.log(customerObj.mobileNo);
console.log(customerObj.address.doorNo);
console.log(customerObj.address.street);
console.log(customerObj.address.landmark);
console.log(customerObj.address.city);
console.log(customerObj.address.pinCode);
console.log(customerObj.address.state);
