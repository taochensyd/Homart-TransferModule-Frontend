[{
    JournalMemo: journalMemo,
    StockTransferLines: [
        {
            ItemCode: itemCode,
            Quantity: quantity,
            WarehouseCode: warehouseDestnation,
            FromWarehouseCode: fromWarehouse,
            SerialNumbers:[],
            BatchNumbers:[{
                BatchNumber: batchNumber,
                Quantity: quantity
            }],
            StockTransferLinesBinAllocations: [{
                BinAbsEntry: toBinID,
                BinActionType: "batToWarehouse",
                Quantity: quantity,
                SerialAndBatchNumbersBaseLine: 0
            },
            {
                BinAbsEntry: selectedFromBinID,
                BinActionType: "batFromWarehouse",
                Quantity: quantity,
                SerialAndBatchNumbersBaseLine: 0
            }]
        }
    ]
},


// included comments/remarks
{
    JournalMemo: journalMemo,
    Comments: remarks,
    StockTransferLines: [
        {
            ItemCode: itemCode,
            Quantity: enteredQuantity,
            WarehouseCode: selectedToWarehouse,
            FromWarehouseCode: selectedWarehouse,
            SerialNumbers:[],
            BatchNumbers:[{
                BatchNumber: batchNumber,
                Quantity: enteredQuantity
            }],
            StockTransferLinesBinAllocations: [{
                BinAbsEntry: selectedToBinID,
                BinActionType: "batToWarehouse",
                Quantity: quantity,
                SerialAndBatchNumbersBaseLine: 0
            },
            {
                BinAbsEntry: selectedFromBinID,
                BinActionType: "batFromWarehouse",
                Quantity: quantity,
                SerialAndBatchNumbersBaseLine: 0
            }]
        }
    ]
}]