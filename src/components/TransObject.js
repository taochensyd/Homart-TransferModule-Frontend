{
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
}