export class Address {
  doorNo: string;
  street: string;
  landmark: any;
  city: string;
  pinCode: number;
  state: string;

  constructor(
    door: string,
    street: string,
    landmark: any,
    city: string,
    pin: number,
    state: string
  ) {
    this.doorNo = door;
    this.street = street;
    this.landmark = landmark;
    this.city = city;
    this.pinCode = pin;
    this.state = state;
  }
}
