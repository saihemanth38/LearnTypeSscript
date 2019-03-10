class PurchaseItems {
  stockName: string[];
  mrp: number;
  costPrice: number;
  tax: number[];
  amount: number;

  constructor(
    stock: string[],
    mrprs: number,
    cost: number,
    tax: number[],
    amount: number
  ) {
    this.stockName = stock;
    this.mrp = mrprs;
    this.costPrice = cost;
    this.tax = tax;
    this.amount = amount;
  }
}
var stockArray = ["Samsung", "Nokia", "RedMi"];
var taxArray = [4, 8, 16];
var obj = new PurchaseItems(stockArray, 100, 80, taxArray, 180);
console.log(obj.stockName);
console.log(obj.mrp);
console.log(obj.costPrice);
console.log(obj.tax);
console.log(obj.amount);
console.log(obj.stockName[0]);
console.log(obj.stockName[1]);
console.log(obj.stockName[2]);
console.log(obj.tax[0] + "%");
console.log(obj.tax[1] + "%");
console.log(obj.tax[2] + "%");
