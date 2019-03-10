import { Address } from "./address";
class Company {
  companyName: string;
  mobileNo: number;
  gstNo: any;
  address: Address;

  constructor(cname: string, mno: number, gst: any, address: Address) {
    this.companyName = cname;
    this.mobileNo = mno;
    this.gstNo = gst;
    this.address = address;
  }
}
var addressObj = new Address(
  "23/333-1",
  "Ramanaidupeta",
  "Sv Degree College",
  "Machilipatnam",
  521001,
  "AndhraPradesh"
);
var companyObj = new Company(
  "RightInvoices",
  9999999999,
  "1212121211",
  addressObj
);
console.log(companyObj.companyName);
console.log(companyObj.mobileNo);
console.log(companyObj.gstNo);
console.log(companyObj.address.doorNo);
console.log(companyObj.address.street);
console.log(companyObj.address.landmark);
console.log(companyObj.address.city);
console.log(companyObj.address.pinCode);
console.log(companyObj.address.state);
