import React, { useState } from "react";
import axios from "axios";
import "./TransferPage.css";

const TransferPage = ({ username }) => {
  const [batchNumber, setBatchNumber] = useState("");
  const [itemCode, setItemCode] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [batchStatus, setBatchStatus] = useState("");
  const [warehouses, setWarehouses] = useState([]);
  const [fromWarehouse, setFromWarehouses] = useState("");
  const [selectedWarehouse, setSelectedWarehouse] = useState("");
  const [selectedFromBin, setSelectedFromBin] = useState("");
  const [selectedFromBinID, setSelectedFromBinID] = useState("");
  const [selectedToWarehouse, setSelectedToWarehouse] = useState("");
  const [selectedToBin, setSelectedToBin] = useState("");
  const [selectedToBinID, setSelectedToBinID] = useState("");
  const [quantity, setQuantity] = useState("");
  const [enteredQuantity, setEnteredQuantity] = useState(0);
  const [maxQuantity, setMaxQuantity] = useState("");
  const [uomName, setUomName] = useState("");
  const [batchInBin, setBatchInBin] = useState([]);
  const [bins, setBins] = useState([]);
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
  const [selectedToWarehouseName, setSelectedToWarehouseName] = useState("");
  const [warehouseDestnation, setWarehouseDestnation] = useState();
  const [toBins, setToBins] = useState([]);
  const [toBinID, setToBinID] = useState([]);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [journalMemo, setJournalMemo] = useState("");
  const [remarks, setRemarks] = useState();
  const [transferObject, setTransferObject] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [rowData, setRowData] = useState([]);




  /*
  
      const [username, setUsername] = React.useState('');
      const [password, setPassword] = React.useState('');
      const [batchNumber, setBatchNumber] = React.useState('');
      const [itemCode, setItemCode] = React.useState('');
      const [itemDescription, setItemDescription] = React.useState('');
      const [batchStatus, setBatchStatus] = React.useState('');
      const [warehouses, setWarehouses] = React.useState([]);
      const [selectedWarehouse, setSelectedWarehouse] = React.useState('');
      const [bins, setBins] = React.useState([]);
      const [selectedFromBin, setSelectedFromBin] = React.useState('');
      const [toWarehouse, setToWarehouse] = React.useState('');
      const [selectedToWarehouse, setSelectedToWarehouse] = React.useState('');
      const [toBins, setToBins] = React.useState([]);
      const [selectedToBin, setSelectedToBin] = React.useState('');
      const [quantity, setQuantity] = React.useState('');
      const [postingDate, setPostingDate] = React.useState('');
      const [remarks, setRemarks] = React.useState('');
      const [errorMessage, setErrorMessage] = React.useState('');
      const [successMessage, setSuccessMessage] = React.useState('');
      const [showSummary, setShowSummary] = React.useState(false);
      const [transferDetails, setTransferDetails] = React.useState({});
      const [transferStatus, setTransferStatus] = React.useState('');
  
  
  */








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

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    const currentDate = new Date();
    if (selectedDate <= currentDate) {
      setDate(event.target.value);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Call this function whenever the selectedWarehouse changes
  React.useEffect(() => {
    calculateMaxQuantity();
    if (selectedWarehouse) {
      fetchBatchInBin(batchNumber);
    } else {
      setBins([]);
    }
  }, [selectedWarehouse]);

  // Call this function whenever the selectedToWarehouse changes
  React.useEffect(() => {
    if (selectedToWarehouse) {
      fetchBinLocations(selectedToWarehouse);
      if (selectedToWarehouse === "WIQ") {
        setSelectedToWarehouseName("Incoming Quarantine Warehouse");
      } else if (selectedToWarehouse === "WCP") {
        selectedToWarehouseName("Component Warehouse");
      } else if (selectedToWarehouse === "WFP") {
        selectedToWarehouseName("Finished Product Warehouse");
      } else if (selectedToWarehouse === "WIQ") {
        selectedToWarehouseName("Incoming Quarantine Warehouse");
      } else if (selectedToWarehouse === "WPQ") {
        selectedToWarehouseName("Production Quarantine Warehouse");
      } else if (selectedToWarehouse === "WRJ") {
        selectedToWarehouseName("Reject Warehouse");
      } else if (selectedToWarehouse === "WRT") {
        selectedToWarehouseName("Return Warehouse");
      } else if (selectedToWarehouse === "WRV") {
        selectedToWarehouseName("Review Warehouse");
      } else {
        selectedToWarehouseName("XXX");
      }

    } else {
      setToBins([]);
    }
  }, [selectedToWarehouse]);

  React.useEffect(() => {
    if (selectedFromBin) {
      setToWarehouses(["WIQ", "WCP", "WRV", "W3Q", "WFP", "WPQ", "WRJ", "WRT"]);
    } else {
      setToWarehouses([]);
    }
  }, [selectedFromBin]);

  // Clear All button
  const clearAllClick = () => {
    setBatchNumber("");
    setItemCode("");
    setItemDescription("");
    setBatchStatus("");
    setWarehouses([]);
    setFromWarehouses("");
    setSelectedWarehouse("");
    setSelectedFromBin("");
    setSelectedFromBinID("");
    setSelectedToWarehouse("");
    setSelectedToBin("");
    setQuantity("");
    setMaxQuantity("");
    setUomName("");
    setBatchInBin([]);
    setBins([]);
    setWarehouseDestnation();
    setToBins([]);
    setToBinID([]);
    setDate(new Date().toISOString().slice(0, 10));
    setJournalMemo("");
    setRemarks("");
    setTransferObject([]);
  };

  // Clicking the Search button will call this function
  const handleSearchClick = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3005/api/batchnumberdetail",
        {
          BatchNumber: batchNumber,
        }
      );
      if (
        response.data &&
        response.data.value &&
        response.data.value.length > 0
      ) {
        // Clear all fields
        setErrorMessage("");
        setWarehouses([]);
        setFromWarehouses("");
        setSelectedWarehouse("");
        setSelectedFromBin("");
        setSelectedFromBinID("");
        setSelectedToWarehouse("");
        setSelectedToBin("");
        setQuantity("");
        setMaxQuantity("");
        setUomName("");
        setBatchInBin([]);
        setBins([]);
        setWarehouseDestnation();
        setToBins([]);
        setToBinID([]);
        setDate(new Date().toISOString().slice(0, 10));
        setJournalMemo("");
        setRemarks("");
        setTransferObject([]);

        //Set the data from the response
        setItemCode(response.data.value[0].ItemCode);
        setItemDescription(response.data.value[0].ItemDescription);
        if (response.data.value[0].batchStatus.includes("_")) {
          setBatchStatus(response.data.value[0].batchStatus.split("_")[1].toUpperCase());
        } else {
          setBatchStatus(response.data.value[0].batchStatus);
        }
      } else {
        setErrorMessage("Batch number not found");
      }
    } catch (error) {
      console.error(error);
    }
    fetchBatchInBin();
    handleItemSearch();
  };

  const fetchBatchInBin = async (batchNumber) => {
    try {
      const response = await axios.post(
        "http://localhost:3005/api/batchinbin",
        {
          BatchNumber: batchNumber,
        }
      );
      if (!response.data.value) {
        setErrorMessage("Stock infomation not found for this batch number.");
        setBatchInBin([]);
        setBins([]);
        setWarehouses([]);
      } else if (response.data.value.length === 0) {
        setErrorMessage("No stock available for this batch number.");
        setBatchInBin([]);
        setBins([]);
        setWarehouses([]);
      } else if (response.data && response.data.value) {
        setBatchInBin(response.data.value);
        setWarehouses(response.data.value.map((item) => item.WarehouseCode));
        setBins(response.data.value.map((item) => item.BinCode));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleItemSearch = async () => {
    try {
      const response = await axios.post("http://localhost:3005/api/items", {
        ItemNumber: itemCode,
      });
      setUomName(response.data.InventoryUOM);
    } catch (error) {
      setUomName("");
      console.error(error);
    }
  };

  const calculateMaxQuantity = () => {
    let maxQty = 0;
    if (selectedWarehouse) {
      const warehouse = warehouses.find(
        (warehouse) => warehouse.WarehouseCode === selectedWarehouse
      );
      if (warehouse) {
        maxQty = warehouse.InStock;
      }
    } else {
      maxQty = warehouses.reduce(
        (acc, warehouse) => acc + warehouse.InStock,
        0
      );
    }
    setMaxQuantity(maxQty);
  };

  const fetchBinLocations = async (warehouseCodes) => {
    try {
      const requests = warehouseCodes.map((warehouseCode) =>
        axios.post("http://localhost:3005/api/binlocations", {
          WarehouseCode: warehouseCode,
        })
      );
      const responses = await Promise.all(requests);
      const combinedData = responses.reduce((acc, response) => {
        if (response.data && response.data.value) {
          response.data.value.forEach((item) => {
            acc.AbsEntry = (acc.AbsEntry || []).concat(item.AbsEntry);
            acc.Warehouse = (acc.Warehouse || []).concat(item.Warehouse);
            acc.BinCode = (acc.BinCode || []).concat(item.BinCode);
          });
        }
        return acc;
      }, {});
      setToBins(combinedData.BinCode);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Transfer Page</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <div className="flexbox">
        <div className="row">
          <div className="cell">Login Person</div>
          <div className="cell">{username.toUpperCase()}</div>
          <div className="cell db">DB:Homart_Live</div>
        </div>





        <div className="row">
          <div className="cell">Batch Number</div>
          <div className="cell">
            <input
              className="yellow-background"
              type="text"
              value={batchNumber}
              onChange={(event) => setBatchNumber(event.target.value)}
            />
          </div>
          <div className="cell">
            <button onClick={handleSearchClick}>Search</button>
          </div>
        </div>




        <div className="row">
          <div className="cell">Item Code</div>
          <div className="cell grey-background">{itemCode}</div>
          <div className="cell grey-background">{batchStatus}</div>
        </div>




        <div className="row">
          <div className="cell ">Item Description</div>
          <div className="cell grey-background">{itemDescription}</div>
          <div className="cell"></div>
        </div>





        <div className="row">
          <div className="cell">From Warehouse</div>
          <div className="cell">
            <select
              className="yellow-background"
              value={selectedWarehouse}
              onChange={(event) => setSelectedWarehouse(event.target.value)}
            >
              <option value="">Source Warehouse</option>
              {warehouses.map((warehouse) => (
                <option
                  key={warehouse.WarehouseCode}
                  value={warehouse.WarehouseCode}
                >
                  {/* Will need to change below to full warehouse house name. */}
                  {warehouse.WarehouseCode}
                </option>
              ))}
            </select>
          </div>
          <div className="cell">{selectedWarehouse}</div>
        </div>





        <div className="row">
          <div className="cell">From Bin</div>
          <div className="cell">
            <select
              className="yellow-background"
              value={selectedFromBin}
              onChange={(event) => setSelectedFromBin(event.target.value)}
            >
              <option value="">Source Bin</option>
              {bins.map((bin) => (
                <option key={bin} value={bin}>
                  {bin}
                </option>
              ))}
            </select>
          </div>
          <div className="cell"></div>
        </div>








        <div className="row">
          <div className="cell">To Warehouse</div>
          <div className="cell">
            <select
              className="yellow-background"
              value={selectedToWarehouse}
              onChange={(event) => setSelectedToWarehouse(event.target.value)}
            >
              <option value="">Destination Warehouse</option>
              {toWarehouses.map((warehouse) => (
                <option key={warehouse} value={warehouse}>
                  {warehouse}
                </option>
              ))}
            </select>
          </div>
          <div className="cell grey-background">{selectedToWarehouseName}</div>
        </div>






        <div className="row">
          <div className="cell">To Bin</div>
          <div className="cell">
            <select
              className="yellow-background"
              value={selectedToBin}
              onChange={(event) => setSelectedToBin(event.target.value)}
            >
              <option value="">Destination Bin</option>
              {toBins.map((bin) => (
                <option key={bin} value={bin}>
                  {bin}
                </option>
              ))}
            </select>
          </div>
          <div className="cell"></div>
        </div>






        <div className="row">
          <div className="cell">Quantity</div>
          <div className="cell">
            <input
              className="yellow-background"
              type="number"
              step="1"
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
            />
          </div>
          <div className="cell grey-background display-only">
            Maximum Qty = {maxQuantity}
          </div>
        </div>





        <div className="row">
          <div className="cell">UoM Name</div>
          <div className="cell grey-background display-only">{uomName}</div>
          <div className="cell"></div>
        </div>





        <div className="row">
          <div className="cell">Posting Date</div>
          <div className="cell">
            <input
              className="yellow-background"
              type="date"
              value={date}
              onChange={handleDateChange}
            />
            {/* <div>{formatDate(date)}</div> */}
          </div>
          <div className="cell"></div>
        </div>





        <div className="row">
          <div className="cell">Remarks</div>
          <div className="cell">
            <textarea className="remarks yellow-background"></textarea>
          </div>
          <div className="cell"></div>
        </div>





        <div className="row">
          <div className="cell">
            <button onClick={clearAllClick}>Clear All</button>
          </div>
          <div className="cell"></div>
          <div className="cell">
            <button onClick={() => { }}>Transfer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferPage;
