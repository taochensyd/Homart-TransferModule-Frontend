/*

    Define all the function here
    APi request data:
    1. /api/batchnumberdetail
    2. /api/items
    3. /api/batchinbin
    4. /api/binlocations
    
    // Below is the function that need to be define
    1. Get the current date and convert it in DD/MM/YYYY format and set it to variable
    2. 
    

    Button:
    Search Button:
        -   Set the Batch number to variable

    Clear All Button:
        -   Clear all the input field/variable
    
    Start Transfer Button:
        -   Check if all the field is filled
        -   Show the summary of the transfer detail and ask for confirmation
        if yes then run the following function:
            -   /api/transfer
        else:
            -   Hide the summary and do nothing


    
    UseEffect:
    -   If batch bumber has change then run the folling function:
        -   /api/batchnumberdetail
        -   /api/items
        -   /api/batchinbin
        -   /api/binlocations

    -   If from warehouse has change, based on the selected warehouse,
        then add the available bin to the bin dropdown which belong to that warehouse:
        -   add the From Bin to the bin dropdown

    -   If warehouse is in WIQ, WRV, QCP then run the following function:
            -   /api/binlocations
        Else make to bin dropdown empty and grey out.

    -   If the Bin has change, then run the following function:
        -  display the available quantity in the bin, this is also the max quantity that can be transfered

    -   Check the text length of Remarks, since SQL only allow 254 characters, if more than 254 then show error message

    -   Check the entered quantity is not more than the available quantity in the bin,
        -   If input number in the input box is empty then don't show any message
        -   If more than maximum then show error message

    




*/











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



  const [batchNumber, setBatchNumber] = React.useState("");
  const [itemCode, setItemCode] = React.useState("");
  const [itemDescription, setItemDescription] = React.useState("");
  const [batchStatus, setBatchStatus] = React.useState("");
  const [batchInBin, setBatchInBin] = React.useState([]);
  const [warehouses, setWarehouses] = React.useState([]);
  const [selectedWarehouse, setSelectedWarehouse] = React.useState("");
  const [fromBins, setFromBins] = React.useState([]);
  const [selectedFromBin, setSelectedFromBin] = React.useState("");
  const [toWarehouses, setToWarehouses] = React.useState([
    "WIQ",
    "W3Q",
    "WFP",
    "WPQ",
    "WRJ",
    "WRV",
    "WRT",
    "WCP",
  ]);
  const [selectedToWarehouse, setSelectedToWarehouse] = React.useState("");
  const [selectedToWarehouseName, setSelectedToWarehouseName] =
    React.useState("");
  const [toBins, setToBins] = React.useState([]);
  const [selectedToBin, setSelectedToBin] = React.useState("");
  const [maxQuantity, setMaxQuantity] = React.useState("");
  const [enteredQuantity, setEnteredQuantity] = React.useState("");
  const [availableQuantity, setAvailableQuantity] = React.useState("");
  const [postingDate, setPostingDate] = React.useState("");
  const [uomName, setUomName] = React.useState("");
  const [remarks, setRemarks] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState([]);
  const [successMessage, setSuccessMessage] = React.useState("");
  const [showSummary, setShowSummary] = React.useState(false);
  const [transferDetails, setTransferDetails] = React.useState([]);
  const [transferStatus, setTransferStatus] = React.useState("");