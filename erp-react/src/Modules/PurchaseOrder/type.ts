// 1. One row of items being bought --Details
export interface PurchaseOrderRow {
    poNumber: string;
    poDate: string;
    SupplierName: string;
    itemsCount: number;
    total: number;
    status: string;
   
}

// 2. The whole Purchase Order ---Header
export interface PurchaseOrder {
  id: string;
  poNumber: string;        // e.g. "PO-001"
  poDate:String;
  SupplierName: string;
  orderDate: string;
  
  grandTotal: number;
  status: 'Draft' | 'Approved' | 'Completed';
   remarks: String;
    entryBy:string;
}

export interface PurchaseOrderLine {
    itemName: string;
    qty: number;
    rate: number;
    
}