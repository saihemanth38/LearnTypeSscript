class StockItem {
  articleCode: number;
  articleName: string;
  hsnCode: number;
  Qty: number;
  packSize: number;
  netAmount: number;
  discAmount: number;
  tax: number;
  taxAmount:number;
  total: number;

  constructor(
    aCode: number,
    aName: string,
    hsn: number,
    qty: number,
    pSize: number,
    netamt: number,
    dAmount: number,
    tax: number
    taxAmount:number;
    total: number;
  ) {
    this.articleCode = aCode;
    this.articleName = aName;
    this.hsnCode = hsn;
    this.Qty = qty;
    this.packSize = pSize;
    this.netAmount = netamt;
    this.discAmount = dAmount;
    this.tax = tax;
    this.taxAmount = taxAmount;
    this.total = total;
  }
}
var stockItemData = new StockItems(123, "book", 23, 1, 1, 200, 0, 4);
console.log();
