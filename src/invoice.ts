import { StockItem } from './stockItemList';
class Invoice {
  supplierName: string;
  gstNo: any;
  survyNo: number;
  state: string;
  fax: number;
  stockItemList: StockItem[];

  constructor(
    sName: string,
    gst: any,
    survy: number,
    state: string,
    fax: number,
    stockList: StockItem[]
  ) {
    this.supplierName = sName;
    this.gstNo = gst;
    this.survyNo = survy;
    this.state = state;
    this.fax = fax;
    this.stockItemList = stockList;
  }
}
var stockItem1 = new StockItem(8901399005305, "Santoor Soap SVR4'S", 3401, 2,1,172.68,
0.00,18.00,31.08,203.76);
var stockItem2 = new StockItem(8901399005305, "Santoor Soap SVR4'S", 3401, 2, 1, 172.68,
  0.00, 18.00, 31.08, 203.76);
var stockItem3 = new StockItem(8901399005305, "Santoor Soap SVR4'S", 3401, 2, 1, 172.68,
  0.00, 18.00, 31.08, 203.76);
var stockItem4 = new StockItem(8901399005305, "Santoor Soap SVR4'S", 3401, 2, 1, 172.68,
  0.00, 18.00, 31.08, 203.76);
var stockItem5 = new StockItem(8901399005305, "Santoor Soap SVR4'S", 3401, 2, 1, 172.68,
  0.00, 18.00, 31.08, 203.76);
var stockItem6 = new StockItem(8901399005305, "Santoor Soap SVR4'S", 3401, 2, 1, 172.68,
  0.00, 18.00, 31.08, 203.76);
var stockItem7 = new StockItem(8901399005305, "Santoor Soap SVR4'S", 3401, 2, 1, 172.68,
  0.00, 18.00, 31.08, 203.76);
var stockItem8 = new StockItem(8901399005305, "Santoor Soap SVR4'S", 3401, 2, 1, 172.68,
  0.00, 18.00, 31.08, 203.76);
var stockItem9 = new StockItem(8901399005305, "Santoor Soap SVR4'S", 3401, 2, 1, 172.68,
  0.00, 18.00, 31.08, 203.76);
var stockItem10 = new StockItem(8901399005305, "Santoor Soap SVR4'S", 3401, 2, 1, 172.68,
  0.00, 18.00, 31.08, 203.76);
  var stockItemList = [stockItem1, stockItem2, stockItem3, stockItem4, stockItem5, stockItem6,
                      stockItem7, stockItem8, stockItem9, stockItem10]
var invoiceDetails = new Invoice(
  "Metro",
  "12a12a121212",
  1234,
  "Hyderabad",
  989898, stockItemList
  
);
console.log(invoiceDetails.supplierName);
console.log(invoiceDetails.gstNo);
console.log(invoiceDetails.state);
console.log(invoiceDetails.fax);
console.log(invoiceDetails.survyNo);
var si01 : StockItem = invoiceDetails.stockItemList[0];
var si02: StockItem = invoiceDetails.stockItemList[1];
var si03: StockItem = invoiceDetails.stockItemList[2];
var si04: StockItem = invoiceDetails.stockItemList[3];
var si05: StockItem = invoiceDetails.stockItemList[4];
var si06: StockItem = invoiceDetails.stockItemList[5];
var si07: StockItem = invoiceDetails.stockItemList[6];
var si08: StockItem = invoiceDetails.stockItemList[7];
var si09: StockItem = invoiceDetails.stockItemList[8];
var si10: StockItem = invoiceDetails.stockItemList[9];
articleCode: number;
articleName: string;
hsnCode: number;
Qty: number;
packSize: number;
netAmount: number;
discAmount: number;
tax: number;
taxAmount: number;
total: number;
console.log(si01.articleCode + " " + si01.articleName + " " + si01.hsnCode+ 
  " " + si01.Qty + " " + si01.packSize+" "+si01.);

