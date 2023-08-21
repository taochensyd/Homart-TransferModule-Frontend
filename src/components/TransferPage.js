import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TransferPage.css";

const TransferPage = ({ username }) => {
  const [errorMessage, setErrorMessage] = useState([]);

  const [batchNumber, setBatchNumber] = useState("");
  const [batchNumberInputBox, setBatchNumberInputBox] = useState("");
  const [itemCode, setItemCode] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [batchStatus, setBatchStatus] = useState("");
  const [uomName, setUomName] = useState("");

  const [remarks, setRemarks] = useState("");
  const [postingDate, setPostingDate] = useState("");

  const [maxQuantity, setMaxQuantity] = useState("");
  const [enteredQuantity, setEnteredQuantity] = useState("");

  const [batchInBin, setBatchInBin] = useState([]);
  const [fromWarehouses, setFromWarehouses] = useState([]);
  const [selectedFromWarehouse, setSelectedFromWarehouse] = useState("");
  const [selectedFromWarehouseName, setSelectedFromWarehouseName] =
    useState("");
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
  const [wcpBinList, setWcpBinList] = useState([]);
  const [wrvBinList, setWrvBinList] = useState([]);
  const [wiqBinList, setWiqBinList] = useState([]);
  const [selectedToBin, setSelectedToBin] = useState("");

  const [errorTransferMessage, setErrorTransferMessage] = useState([]);
  const [successTransferMessage, setSuccessTransferMessage] = useState("");
  const [showSummary, setShowSummary] = useState(false);
  const [transferDetailsSummary, setTransferDetailsSummary] = useState([]);

  const clearAll = () => {
  };

  const handleBatchNumberChange = async (batchNumber) => {
    // Clear error message
    setErrorMessage([]);

    if (batchNumber === "") {
      setErrorMessage(...errorMessage, "Please enter a batch number");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3005/api/batchnumberdetail",
        {
          BatchNumber: batchNumber,
        }
      );
      // handle response here
      console.log(response.data);
      if (response.data.value.length > 0) {
        setItemCode(response.data.value[0].ItemCode);
        console.log(`ItemCode: ${response.data.value[0].ItemCode}`);
        setItemDescription(response.data.value[0].ItemDescription);
        console.log(
          `ItemDescription: ${response.data.value[0].ItemDescription}`
        );
        if (response.data.value[0].Status.includes("_")) {
          setBatchStatus(
            response.data.value[0].Status.split("_")[1].toUpperCase()
          );
        } else {
          setBatchStatus(response.data.value[0].batchStatus);
        }
        console.log(`BatchStatus: ${response.data.value[0].Status}`);
      } else {
        setErrorMessage(...errorMessage, "Batch number not found");
        setItemCode("");
        setItemDescription("");
        setBatchStatus("");
        setUomName("");
      }
    } catch (error) {
      // handle error here
      console.log(`handleBatchNumberChange: ${error}`);
    }
  };

  const handleItemNumberChange = async (itemCode) => {
    try {
      const response = await axios.post("http://localhost:3005/api/items", {
        ItemNumber: itemCode,
      });
      console.log(`UOM API Call: ${response.data}`);
      console.log(`UOM : ${response.data.InventoryUOM}`);
      if (response.data.InventoryUOM) {
        setUomName(response.data.InventoryUOM);
      } else {
        setUomName("");
      }
    } catch (error) {
      setUomName("");
      console.log(`handleItemNumberChange: ${error}`);
    }
  };

  const fetchBatchInBin = async (batchNumber) => {
    try {
      const response = await axios.post(
        "http://localhost:3005/api/batchinbin",
        {
          BatchNumber: batchNumber,
        }
      );
      console.log(JSON.stringify(response.data));
      console.log(`fetchBatchInBin Data: ${response.data.value}`);

      if (!response.data.value) {
        setErrorMessage(
          errorMessage,
          "Stock information not found for this batch number."
        );
      } else if (response.data.value.length === 0) {
        setErrorMessage(
          errorMessage,
          "No stock available for this batch number."
        );
      }

      if (response.data && response.data.value) {
        console.log(`setBatchInBin: ${response.data.value}`);
        setBatchInBin(response.data.value);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setSourceWarehouseAndBin = (batchInBin) => {
    const newFromWarehouses = [...fromWarehouses];
    console.log(`batchInBin: ${batchInBin}`);
    if (batchInBin.length > 0) {
      for (let i = 0; i < batchInBin.length; i++) {
        const item = batchInBin[i];
        if (!newFromWarehouses.includes(item.WhsCode)) {
          newFromWarehouses.push(item.WhsCode);
        }
      }
      setFromWarehouses(newFromWarehouses);
      console.log(`newFromWarehouses: ${newFromWarehouses}`);
      console.log(`fromWarehouses: ${fromWarehouses}`);

      const newFromBins = [...fromBins];
      for (let i = 0; i < batchInBin.length; i++) {
        const item = batchInBin[i];
        newFromBins.push(item.BinCode);
      }
      setFromBins(newFromBins);
      console.log(`newFromBins: ${newFromBins}`);
      console.log(`fromBins: ${fromBins}`);
    }
  };

  const fetchBinLocations = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3005/api/binlocations"
      );
      console.log(`fetchBinLocations: ${response.data.value}`);
      if (response.data && response.data.value) {

        setWiqBinList([]);
        setWcpBinList([]);
        setWrvBinList([]);

        response.data.value.forEach((item) => {
          if (item.Warehouse === "WIQ") {
            setWiqBinList((prevWiqBinList) => [
              ...prevWiqBinList,
              item.BinCode,
            ]);
            console.log(`WIQ Bin: ${item.BinCode}`);
          } else if (item.Warehouse === "WCP") {
            setWcpBinList((prevWcpBinList) => [
              ...prevWcpBinList,
              item.BinCode,
            ]);
            console.log(`WCP Bin: ${item.BinCode}`);
          } else if (item.Warehouse === "WRV") {
            setWrvBinList((prevWrvBinList) => [
              ...prevWrvBinList,
              item.BinCode,
            ]);
            console.log(`WRV Bin: ${item.BinCode}`);
          }
        });
      }
    } catch (error) {
      console.log(`fetchBinLocations: ${error}`);
    }
  };

  const calculateMaxQty = (
    batchInBin,
    selectedFromWarehouse,
    selectedFromBin
  ) => {
    let maxQty = 0;
    batchInBin.forEach((item) => {
      maxQty += item.OnHandQty;
    });
    setMaxQuantity(maxQty);

    if (selectedFromWarehouse !== "") {
      maxQty = 0;
      batchInBin.forEach((item) => {
        if (item.WhsCode === selectedFromWarehouse) {
          maxQty += item.OnHandQty;
        }
      });
      setMaxQuantity(maxQty);
    }

    if (selectedFromBin !== "") {
      maxQty = 0;
      batchInBin.forEach((item) => {
        if (item.BinCode === selectedFromBin) {
          maxQty += item.OnHandQty;
        }
      });
      setMaxQuantity(maxQty);
    }

    console.log(`calculateMaxQty MaxQuantity: ${maxQty}`);
  };

  const getSelectedBinQty = (binCode) => {
    let qty = 0;
    batchInBin.forEach((item) => {
      if (item.BinCode === binCode) {
        setMaxQuantity(qty);
      }
    });

    console.log(`setMaxQuantity getSelectedBinQty: ${qty}`);
    console.log(`setMaxQuantity getSelectedBinQty: ${maxQuantity}`);
  };

  const warehouseFullName = (warehouseCode, fromOrToWarehouse) => {
    const warehouseNames = {
      WIQ: "Incoming Quarantine Warehouse",
      WCP: "Component Warehouse",
      WFP: "Finished Product Warehouse",
      WPQ: "Production Quarantine Warehouse",
      WRJ: "Reject Warehouse",
      WRT: "Return Warehouse",
      WRV: "Review Warehouse",
      W3Q: "Level 3 Quarantine Warehouse",
    };

    const tempString = warehouseNames[warehouseCode] || "";

    if (fromOrToWarehouse === "from") {
      setSelectedFromWarehouseName(tempString);
    } else if (fromOrToWarehouse === "to") {
      setSelectedToWarehouseName(tempString);
    }

    console.log(`tempString: ${tempString}`);
    console.log(`selectedFromWarehouseName: ${selectedFromWarehouseName}`);
  };

  const filterBinBySelectedFromWarehouse = (
    selectedFromWarehouse,
    batchInBin
  ) => {
    const tempBin = [];
    for (let i = 0; i < batchInBin.length; i++) {
      const item = batchInBin[i];
      if (item.WhsCode === selectedFromWarehouse) {
        tempBin.push(item.BinCode);
      }
    }
    setFromBins(tempBin);
  };

  const updateToBins = (selectedToWarehouse, wrvBinList, wiqBinList, wcpBinList) => {
    let selectedBinList;
    if (selectedToWarehouse === "WRV") {
        setToBins(wrvBinList);
    } else if (selectedToWarehouse === "WIQ") {
        setToBins(wiqBinList);
    } else if (selectedToWarehouse === "WCP") {
        setToBins(wcpBinList);
    } else {
        setToBins([]);
        return;
    }
    console.log(`updateToBins Function`);
    console.log(`toBins: ${toBins}`);
};


  const showSelectedWarehouse = () => {
    setToWarehouses(["WIQ", "W3Q", "WFP", "WPQ", "WRJ", "WRV", "WRT", "WCP"]);
  };

  useEffect(() => {
    fetchBinLocations();
  }, []);

  useEffect(() => {
    handleBatchNumberChange(batchNumber);

  }, [batchNumber]);

  useEffect(() => {
    fetchBatchInBin(batchNumber);
    fetchBinLocations(batchNumber);
  }, [batchNumber]);

  useEffect(() => {
    handleItemNumberChange(itemCode);
  }, [itemCode]);

  useEffect(() => {
    setSourceWarehouseAndBin(batchInBin);
    calculateMaxQty(batchInBin, selectedFromWarehouse, selectedFromBin);
  }, [batchInBin]);

  useEffect(() => {
    getSelectedBinQty(selectedFromBin);
    showSelectedWarehouse();
  }, [selectedFromBin]);

  useEffect(() => {
    setSelectedFromBin("");
    warehouseFullName(selectedFromWarehouse, "from");
    filterBinBySelectedFromWarehouse(selectedFromWarehouse, batchInBin);
    calculateMaxQty(batchInBin, selectedFromWarehouse, selectedFromBin);
  }, [selectedFromWarehouse]);

  useEffect(() => {
    calculateMaxQty(batchInBin, selectedFromWarehouse, selectedFromBin);
  }, [selectedFromBin]);

  useEffect(() => {
    warehouseFullName(selectedToWarehouse, "to");
  }, [selectedToWarehouse]);

  useEffect(() => {
    updateToBins(selectedToWarehouse, wrvBinList, wiqBinList, wcpBinList);
  }, [selectedToWarehouse]);

  return (
    <div className="form-container">
      <div className="input-group">
        <label>Database Name: Homart_Live</label>
        <label>Login Person: {username}</label>
      </div>

      <div className="input-group">
        <label>Batch Number:</label>
        <input
          type="text"
          onChange={(event) => setBatchNumberInputBox(event.target.value)}
        />
        <button onClick={() => setBatchNumber(batchNumberInputBox)}>
          Search
        </button>
      </div>

      <div className="input-group">
        <label>Item Code:</label>
        <div>{itemCode}</div>
      </div>

      <div className="input-group">
        <label>Item Description:</label>
        <div>{itemDescription}</div>
      </div>

      <div className="input-group">
        <label>Status:</label>
        <div>{batchStatus}</div>
      </div>

      <div className="input-group">
        <label>From Warehouse:</label>
        <select
          value={selectedFromWarehouse}
          onChange={(event) => setSelectedFromWarehouse(event.target.value)}
        >
          <option value="" disabled selected>
            Select a warehouse
          </option>
          {fromWarehouses.map((fromWarehouse) => (
            <option key={fromWarehouse} value={fromWarehouse}>
              {fromWarehouse}
            </option>
          ))}
        </select>
        <div>{selectedFromWarehouseName}</div>
      </div>

      <div className="input-group">
        <label>From Bin:</label>
        <select
          value={selectedFromBin}
          onChange={(event) => setSelectedFromBin(event.target.value)}
        >
          <option value="" disabled selected>
            Select a bin
          </option>
          {fromBins.map((fromBin) => (
            <option key={fromBin} value={fromBin}>
              {fromBin}
            </option>
          ))}
        </select>
      </div>

      <div className="input-group">
        <label>To Warehouse:</label>
        <select
          value={selectedToWarehouse}
          onChange={(event) => setSelectedToWarehouse(event.target.value)}
        >
          <option value="" disabled selected>
            Select a warehouse
          </option>
          {toWarehouses.map((toWarehouse) => (
            <option key={toWarehouse} value={toWarehouse}>
              {toWarehouse}
            </option>
          ))}
        </select>
        <div>{selectedToWarehouseName}</div>
      </div>

      <div className="input-group">
        <label>To Bin:</label>
        <select
          value={selectedToBin}
          onChange={(event) => setSelectedToBin(event.target.value)}
        >
          {toBins.map((toBin) => (
            <option key={toBin} value={toBin}>
              {toBin}
            </option>
          ))}
        </select>
      </div>

      <div className="input-group">
        <label>Quantity:</label>
        <input type="number" />
        <div>MaxQty: {maxQuantity}</div>
      </div>

      <div className="input-group">
        <label>UoM Name: {uomName}</label>
      </div>

      <div className="input-group">
        <label>Posting Date:</label>
        <input type="date" />
      </div>

      <div className="input-group">
        <label>Remarks:</label>
        <textarea></textarea>
      </div>

      <div className="input-group">
        <button>Clear All</button>
        <button>Add</button>
        <button>Transfer</button>
      </div>
    </div>
  );
};

export default TransferPage;
