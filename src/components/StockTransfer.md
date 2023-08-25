Below is work stock transfer object, make sure to set the exchange rate in SAP -> Admin -> Exchange rate -> CNY to a float number > 0


{
    "JournalMemo": "WEB STOCK Transferno:202308250001",
    "Comments": "This is the example transfer from Postman",
    "StockTransferLines": [
        {
            "ItemCode": "PKKEY-0005",
            "Quantity": "3",
            "WarehouseCode": "WCP",
            "FromWarehouseCode": "WCP",
            "SerialNumbers": [],
            "BatchNumbers": [
                {
                    "BatchNumber": "H35996",
                    "Quantity": 3
                }
            ],
            "StockTransferLinesBinAllocations": [
                {
                    "BinAbsEntry": 893,
                    "BinActionType": "batToWarehouse",
                    "Quantity": 3,
                    "SerialAndBatchNumbersBaseLine": 0
                },
                {
                    "BinAbsEntry": 805,
                    "BinActionType": "batFromWarehouse",
                    "Quantity": 3,
                    "SerialAndBatchNumbersBaseLine": 0
                }
            ]
        }
    ]
}

