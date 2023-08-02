/*

    // When Page loaded
    

    // Date Function
        handleDateChange()
        handlePostingDateChange()
        formatDate()

    // Button Function
        clearAllClick()
        startTransfer()
        addToQueue()

    // useEffect
        selectedToWarehouse
        selectedFromBin

    // Search batch with batch number
    // Step 1
    Search Button -> handleSearchClick()
        - handleItemSearch()
        - fetchBatchInBin()
        - setItemCode
        - setItemDescription
        - setBatchStatus
        - setBatchStatus

    // Automatic call Step 1 run
    // Step 1.1
    handleItemSearch()
        - setUomName
        

    // Automatic call Step 1 run
    // Step 1.2
    fetchBatchInBin()
        - setBatchInBin
        - setWarehouses
        - setFromBins

    // Step 2
    fetchBinLocations() -> 
        - setToBins

    // Step 3
    startTransfer()
        // included comments/remarks
        - Check if all fields are filled 
            (ItemCode, Quantity, WarehouseCode, FromWarehouseCode, BatchNumber. Quantity, ToBinID, FromBinID, JournalMemo(Start With Web Stock Date), Comments(Optional))
        - Check item code is not empty
        - Check if batch number is not empty
        - Check if from bin is not empty (Need Bin ID)
        - Check if to bin is not empty (Unless it is not in WIQ, WRV, WCP)
        - Check if to warehouse is not empty
        - Check if from warehouse is not empty
        - Check if quantity is not empty and not 0 or negative number
        - Check if quantity is not more than batch quantity
        - Check if quantity is not more than from bin quantity
        - Check Journal Memo is empty or less than 254 characters (limites by Database)

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

*/
