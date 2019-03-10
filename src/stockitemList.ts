class StockItemList {
  articleCode: number[];
  articleName: string[];
  Qty: number[];
  Mrp: number[];
  costPrice: number[];
  tax: number[];

  constructor(
    aCode: number[],
    aName: string[],
    qty: number[],
    mrp: number[],
    costPrice: number[],
    tax: number[]
  ) {
    this.articleCode = aCode;
    this.articleName = aName;
    this.Qty = qty;
    this.Mrp = mrp;
    this.costPrice = costPrice;
    this.tax = tax;
  }
}
