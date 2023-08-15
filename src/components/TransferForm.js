import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TransferForm.css";

function TransferForm({ username }) {
  // Below is the list of variables that will be used in the Transfer Form
  const [batchNumber, setBatchNumber] = useState("");
  const [itemCode, setItemCode] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [batchStatus, setBatchStatus] = useState("");
  const [batchInBin, setBatchInBin] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const [selectedWarehouse, setSelectedWarehouse] = useState("");
  const [fromBins, setFromBins] = useState([]);
  const [selectedFromBin, setSelectedFromBin] = useState("");
  const [toWarehouses, setToWarehouses] = useState([
    "WIQ",
    "W3Q",
    "WFP",
    "WPQ",
    "WRJ",
    "WRV",
    "WRT",
    "WCP",
  ]);
  const [selectedToWarehouse, setSelectedToWarehouse] = useState("");
  const [selectedToWarehouseName, setSelectedToWarehouseName] = useState("");
  const [toBins, setToBins] = useState([]);
  const [selectedToBin, setSelectedToBin] = useState("");
  const [maxQuantity, setMaxQuantity] = useState("");
  const [enteredQuantity, setEnteredQuantity] = useState("");
  const [availableQuantity, setAvailableQuantity] = useState("");
  const [postingDate, setPostingDate] = useState("");
  const [uomName, setUomName] = useState("");
  const [remarks, setRemarks] = useState("");
  const [errorMessage, setErrorMessage] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [showSummary, setShowSummary] = useState(false);
  const [transferDetails, setTransferDetails] = useState([]);
  const [transferStatus, setTransferStatus] = useState("");

  /*
    1. Login to SAP session
    2. Check if user account is valid
    3. Search for batch number
      3.1 If batch number is valid, get item code, item description, status
      3.2 If batch number is invalid, show error message
      3.3 If batch number is valid, get list of warehouse/bins that have stock
      3.4 If stock is 0 in all warehouses, show error message
      3.5 If stock is > 0 in at least 1 warehouse, show list of warehouses/bins
    4. Select warehouse
      4.1 If warehouse is selected, get list of bins in that warehouse
    5. Select bin
    6. Select destination warehouse
      6.1 If destination warehouse is selected, get list of bins in that warehouse
    7. Select destination bin
    8. Enter quantity
      8.1 If quantity is entered, check if quantity is valid
      8.2 If quantity is invalid, show error message
      8.3 If quantity is valid, check if quantity is less than or equal to stock
      8.4 If quantity is greater than stock, show error message
      8.5 If quantity is less than or equal to stock, show success message
    9. Enter posting date
      9.1 If posting date is entered, check if posting date is valid
      9.2 If posting date is invalid, show error message
      9.3 If posting date is valid, show success message  
    10. Enter remarks
    11. Click Clear All button
      11.1 If Clear All button is clicked, clear all fields
    12. Click Transfer button
      12.1 If Transfer button is clicked, check if all fields are valid
      12.2 If all fields are valid, show success message
      12.3 If all fields are invalid, show error message
    13. Show summary of transfer details
      13.1 Show Transfer or Abort button
      13.2 If Transfer button is clicked, submit Transfer
      13.3 If Abort button is clicked, hide summary of transfer details
    14. Show success/error message
    15. If Transfer is successful, clear all fields and hide summary of transfer details.
    */

  // Below are the functions that will be used in the Transfer Form
  // Below function will be used to search for batch number indlude item code, item description, status

  /*
  
    Below is Setp 1:
  
  
  */

  const handleSearchClick = async () => {
    // Sample response from API
    /*
      {
          "odata.metadata": "https://192.168.0.44:50000/b1s/v1/$metadata#BatchNumberDetails",
          "value": [
              {
                  "DocEntry": 19425,
                  "ItemCode": "PB300-0010",
                  "ItemDescription": "Bottle 1HOM RA300ml Amber PET Bottle - JX",
                  "Status": "bdsStatus_Released",
              }]
      }
    */

    // Clear error message
    setErrorMessage([]);

    if (batchNumber === "") {
      setErrorMessage(...errorMessage, "Please enter a batch number");
      return;
    }

    try {
      /*
      Clear all fields
        Todo: Clear all fields
                    Make relevant fields set to empty string or empty array
                    
                */
      const response = await axios.post(
        "http://localhost:3005/api/batchnumberdetail",
        {
          BatchNumber: batchNumber,
        }
      );

      console.log(response.data);

      // If batch number is valid, get item code, item description, status
      if (response.data.value.length > 0) {
        setErrorMessage([]);

        // Call the function to get the UOM name
        handleItemSearch();

        // Call the function to get the list of the warehouses and bins that have stock
        fetchBatchInBin();

        //Set the data from the response
        setItemCode(response.data.value[0].ItemCode);
        setItemDescription(response.data.value[0].ItemDescription);
        console.log(response.data.value[0].batchStatus);
        if (response.data.value[0].Status.includes("_")) {
          setBatchStatus(
            response.data.value[0].Status.split("_")[1].toUpperCase()
          );
        } else {
          setBatchStatus(response.data.value[0].batchStatus);
        }
      } else {
        setErrorMessage(...errorMessage, "Batch number not found");
        setItemCode("");
        setItemDescription("");
        setBatchStatus("");
        setUomName("");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(
        ...errorMessage,
        "Unexpected error occured. Please try again."
      );
      setItemCode("");
      setItemDescription("");
      setBatchStatus("");
      setUomName("");
    }
  };

  // Below function will be used to get the UOM name (Unit of Measure)
  const handleItemSearch = async () => {
    /*
      Sample response from API
        //   Sample Response
//   {
//     "odata.metadata": "https://192.168.0.44:50000/b1s/v1/$metadata#Items/@Element",
//     "odata.etag": "W/\"DA4B9237BACCCDF19C0760CAB7AEC4A8359010B0\"",
//     "ItemCode": "PLPID-0006",
//     "ItemName": "Label 1BSP Performance Inspired Turmeric Curcumin 120s",
//     "ForeignName": "Label Performance Inspired Turmeric Curcumin 120s",
//     "InventoryUOM": "each"
// }
    */
    try {
      const response = await axios.post("http://localhost:3005/api/items", {
        ItemNumber: itemCode,
      });

      console.log(`API(Items).UOM: ${response.data}`);

      if (response.data.InventoryUOM) {
        setUomName(response.data.InventoryUOM);
      } else {
        setUomName("");
      }
    } catch (error) {
      setUomName("");
      console.error(error);
    }
  };

  // Below function will be used to get list of warehouse/bins that have stock
  const fetchBatchInBin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3005/api/batchinbin",
        {
          BatchNumber: batchNumber,
        }
      );

      console.log(`fetcBatchInBin: ${response.data}`);

      if (!response.data.value) {
        setErrorMessage(
          errorMessage,
          "Stock information not found for this batch number."
        );
        setBatchInBin([]);
        setFromBins([]);
        setWarehouses([]);
      } else if (response.data.value.length === 0) {
        setErrorMessage(
          errorMessage,
          "No stock available for this batch number."
        );
        setBatchInBin([]);
        setFromBins([]);
        setWarehouses([]);
      } else if (response.data && response.data.value) {
        setBatchInBin(response.data.value);

        for (let i = 0; i < batchInBin.length; i++) {
          console.log(`batchInBin: ${batchInBin[i].WhsCode}`);
        }

        if (batchInBin.length > 0) {
          setErrorMessage([]);
          let tempWarehouses = [];
          for (let i = 0; i < batchInBin.length; i++) {
            if (!tempWarehouses.includes(batchInBin[i].WhsCode)) {
              tempWarehouses.push(batchInBin[i].WhsCode);
            }
            setWarehouses(tempWarehouses);
            if (!fromBins.includes(batchInBin[i].BinCode)) {
              setFromBins((fromBins) => [...fromBins, batchInBin[i].BinCode]);
            }
          }
        }
      }

      // setWarehouses(response.data.value.map((item) => item.WhsCode));
      // console.log(`warehouses: ${warehouses}`);
      // setFromBins(response.data.value.map((item) => item.BinCode));
      // console.log(`fromBins: ${fromBins}`);
    } catch (error) {
      console.error(error);
    }
  };

  /*
  
    Below is Step 2
  
  
  */

  // Below function will be used to get list of bins in that warehouse
  const fetchBinLocations = async () => {
    if (
      selectedWarehouse === "WIQ" ||
      selectedWarehouse === "WRV" ||
      selectedWarehouse === "WCP"
    ) {
      try {
        const response = await axios.post(
          "http://localhost:3005/api/binlocations",
          {
            WarehouseCode: selectedWarehouse,
          }
        );

        console.log(response.data);

        if (response.data && response.data.value) {
          setToBins(response.data.value.map((item) => item.BinCode));
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      setToBins([]);
    }
  };

  //Below function will be used to get max quantity
  // const calculateMaxQuantity = () => {
  //   let maxQty = 0;
  //   if (selectedWarehouse) {
  //     const warehouse = warehouses.find(
  //       (warehouse) => warehouse.WarehouseCode === selectedWarehouse
  //     );
  //     if (warehouse) {
  //       maxQty = warehouse.InStock;
  //     }
  //   } else {
  //     maxQty = warehouses.reduce(
  //       (acc, warehouse) => acc + warehouse.InStock,
  //       0
  //     );
  //   }
  //   setMaxQuantity(maxQty);
  // };

  // Below function will be used to check if quantity is valid
  // const checkQuantity = () => {
  //   if (enteredQuantity > maxQuantity) {
  //     setErrorMessage("Quantity entered is more than available stock.");
  //     return false;
  //   } else if (enteredQuantity <= 0) {
  //     setErrorMessage("Quantity entered is invalid.");
  //     return false;
  //   } else {
  //     setErrorMessage("");
  //     return true;
  //   }
  // }

  // Below function will be used to check if quantity is less than or equal to stock

  // Below function will be used to set the posting date to today's date by default
  const handlePostingDateChange = (event) => {
    setPostingDate(event.target.value);
  };

  // Below function will be used to check if posting date is valid
  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    const currentDate = new Date();
    if (selectedDate <= currentDate) {
      setPostingDate(event.target.value);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Below function will be used to check if all fields are filled
  const checkAllFileds = () => {
    let checkList = [];

    if (itemCode === "") {
      checkList.push("Item Code is required");
    }

    if (selectedFromBin === "") {
      checkList.push("From Bin is required");
    }

    if (selectedWarehouse === "") {
      checkList.push("From Warehouse is required");
    }

    if (toWarehouses === "") {
      checkList.push("To Warehouse is required");
    }

    if (
      (selectedToBin === "" && selectedToWarehouse === "WIQ") ||
      selectedToWarehouse === "WRV" ||
      selectedToWarehouse === "WCP"
    ) {
      checkList.push("To Bin is required");
    }

    if (enteredQuantity > maxQuantity) {
      checkList.push("Quantity entered is more than available stock.");
    }

    if (postingDate === "") {
      checkList.push("Posting Date is required");
    }

    if (remarks.length > 254) {
      checkList.push("Remarks cannot be more than 254 characters");
    }

    /*
      // Need to check Remark/comment length
    */
    if (remarks.length > 254) {
      // Waiting to be confirm
      checkList.push("Remarks cannot be more than 254 characters");
    }

    if (checkList.length > 0) {
      return false;
    } else {
      return true;
    }
  };

  // Below function will be used to submit Transfer

  // Below function will be used to show summary of transfer details

  // Below function will be used to show success/error message

  // Below function will be used to clear all fields and hide summary of transfer details
  const clearAllClick = () => {
    setBatchNumber("");
    setItemCode("");
    setItemDescription("");
    setBatchStatus("");
    setSelectedWarehouse("");
    setFromBins([]);
    setSelectedFromBin("");
    setSelectedToWarehouse("");
    setToBins([]);
    setSelectedToBin("");
    setMaxQuantity("");
    setEnteredQuantity("");
    setPostingDate("");
    setUomName("");
    setRemarks("");
    setErrorMessage([]);
    setSuccessMessage("");
    setShowSummary(false);
    setTransferDetails([]);
    setTransferStatus("");
  };

  // Below function will be used to show Transfer or Abort button

  // Below function will be used to submit Transfer
  const startTransfer = async () => {
    if (checkAllFileds() === true) {
    } else {
      setErrorMessage(...errorMessage, "Please fill in all fields");
    }

    try {
      const response = await axios.post("http://localhost:3005/api/transfer", {
        transferDetails,
      });

      console.log(response.data);

      if (response.data && response.data.value) {
        setSuccessMessage("Transfer successful");
        clearAllClick();
      } else {
        setErrorMessage(...errorMessage, "Transfer failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Below function will be used to hide summary of transfer details

  // Below is the Add to Queue button
  const addToQueue = () => {};

  // Below are the React useEffect hook
  // Call this function whenever the selectedToWarehouse changes
  useEffect(() => {
    if (selectedToWarehouse) {
      fetchBinLocations(selectedToWarehouse);
      if (selectedToWarehouse === "WIQ") {
        setSelectedToWarehouseName("Incoming Quarantine Warehouse");
      } else if (selectedToWarehouse === "WCP") {
        setSelectedToWarehouseName("Component Warehouse");
      } else if (selectedToWarehouse === "WFP") {
        setSelectedToWarehouseName("Finished Product Warehouse");
      } else if (selectedToWarehouse === "WIQ") {
        setSelectedToWarehouseName("Incoming Quarantine Warehouse");
      } else if (selectedToWarehouse === "WPQ") {
        setSelectedToWarehouseName("Production Quarantine Warehouse");
      } else if (selectedToWarehouse === "WRJ") {
        setSelectedToWarehouseName("Reject Warehouse");
      } else if (selectedToWarehouse === "WRT") {
        setSelectedToWarehouseName("Return Warehouse");
      } else if (selectedToWarehouse === "WRV") {
        setSelectedToWarehouseName("Review Warehouse");
      } else {
        setSelectedToWarehouseName("XXX");
      }
    } else {
      setToBins([]);
    }
  }, [selectedToWarehouse]);

  // Call this function whenever the selectedFromBin changes
  useEffect(() => {
    if (selectedFromBin) {
      setToWarehouses(["WIQ", "WCP", "WRV", "W3Q", "WFP", "WPQ", "WRJ", "WRT"]);
    } else {
      setToWarehouses([]);
    }
  }, [selectedFromBin]);
  
  // Below is the actual Transfer Form that will be displayed
  return (
    <div className="flex-container">
      <h2>Transfer Page</h2>
      {errorMessage.length > 0 && (
        <div className="error-message" style={{ visibility: "visible" }}>
          {errorMessage.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      )}

      {/* // Below row is current logged in user and database name */}
      <div className="row">
        <div className="cell">Login Person</div>
        <div className="cell">{username.toUpperCase()}</div>
        <div className="cell">DB:Homart_Live</div>
      </div>
      {/* // Below row allows user to enter and search a batch number and display the batch details */}
      <div className="row">
        <div className="cell">Batch Number</div>
        <input
          className="yellow-background cell"
          type="text"
          value={batchNumber}
          onChange={(event) => setBatchNumber(event.target.value)}
        />
        <button className="cell" onClick={handleSearchClick}>
          Search
        </button>
      </div>
      {/* // Below row displays the batch details */}
      <div className="row">
        <div className="cell">Item Code</div>
        <div className="cell">{itemCode}</div>
        <div className="cell">{batchStatus}</div>
      </div>
      {/* Below row displays the items details */}
      <div className="row">
        <div className="cell ">Item Description</div>
        <div className="cell grey-background">{itemDescription}</div>
        <div className="cell"></div>
      </div>
      {/* Below row allows user to select a warehouse */}
      <div className="row">
        <div className="cell">From Warehouse</div>

        <select
          className="yellow-background cell"
          value={selectedWarehouse}
          onChange={(event) => setSelectedWarehouse(event.target.value)}
        >
          <option value="">Source Warehouse</option>
          {warehouses.map((warehouse) => (
            <option key={warehouse} value={warehouse}>
              {warehouse}
            </option>
          ))}
        </select>
        {selectedWarehouse && (
          <input
            className="cell"
            type="text"
            value={selectedWarehouse}
            onChange={(event) => setSelectedWarehouse(event.target.value)}
            readOnly
          />
        )}
      </div>
      {/* // Below row allows user to select a bin */}
      <div className="row">
        <div className="cell">From Bin</div>
        <select
          className="yellow-background cell"
          value={selectedFromBin}
          onChange={(event) => setSelectedFromBin(event.target.value)}
        >
          <option value="">Source Bin</option>
          {fromBins.map((fromBin) => (
            <option key={fromBin} value={fromBin}>
              {fromBin}
            </option>
          ))}
        </select>
        {selectedFromBin && (
          <input
            className="cell"
            type="text"
            value={selectedFromBin}
            readOnly
          />
        )}
      </div>
      {/* // Below row allows user to select a destination warehouse */}
      <div className="row">
        <div className="cell">To Warehouse</div>
        <select
          className="yellow-background cell"
          value={selectedToWarehouse}
          onChange={(event) => setSelectedToWarehouse(event.target.value)}
        >
          <option value="">Destination Warehouse</option>
          {toWarehouses.map((toWarehouse) => (
            <option key={toWarehouse} value={toWarehouse}>
              {toWarehouse}
            </option>
          ))}
        </select>
        {selectedToWarehouse && (
          <input
            className="cell"
            type="text"
            value={selectedToWarehouse}
            readOnly
          />
        )}
      </div>
      {/* // Below row allows user to select a destination bin */}
      <div className="row">
        <div className="cell">To Bin</div>
        <select
          className="yellow-background cell"
          value={selectedToBin}
          onChange={(event) => setSelectedToBin(event.target.value)}
          disabled={toBins.length === 0}
        >
          <option value="">Destination Bin</option>
          {toBins.map((bin) => (
            <option key={bin} value={bin}>
              {bin}
            </option>
          ))}
        </select>
        {selectedToBin && (
          <input className="cell" type="text" value={selectedToBin} readOnly />
        )}
      </div>
      {/* // Below row allows user to enter a quantity */}
      <div className="row">
        <div className="cell">Quantity</div>
        <div className="cell">
          <input
            className="yellow-background"
            type="number"
            step="1"
            value={enteredQuantity}
            onChange={(event) => setEnteredQuantity(event.target.value)}
          />
        </div>
        <div className="cell grey-background display-only">
          Maximum Qty = {maxQuantity}
        </div>
      </div>
      {/* // Below row displays the UoM name */}
      <div className="row">
        <div className="cell">UoM Name</div>
        <div className="cell grey-background display-only">{uomName}</div>
        <div className="cell"></div>
      </div>
      {/* // Below row allows user to enter a posting date */}
      <div className="row">
        <div className="cell">Posting Date</div>
        <input
          className="yellow-background cell"
          type="date"
          value={postingDate}
          onChange={handlePostingDateChange}
        />
        {/* <div>{formatDate(date)}</div> */}
        <div className="cell"></div>
      </div>
      {/* // Remarks field */}
      <div className="row">
        <div className="cell">Remarks</div>
        <textarea className="remarks yellow-background cell"></textarea>
        <div className="cell"></div>
      </div>
      {/* // Clear All, Add and Transfer buttons */}
      <div className="row">
        <button className="cell" onClick={clearAllClick}>
          Clear All
        </button>
        <button className="cell" onClick={addToQueue}>
          Add
        </button>
        <button className="cell" onClick={startTransfer}>
          Transfer
        </button>
      </div>
    </div>
  );
}

export default TransferForm;
